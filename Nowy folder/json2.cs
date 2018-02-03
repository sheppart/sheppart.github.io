// Pobiera obrazki
using System;
using System.Net;
using System.Net.Sockets;
using System.IO;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.ComponentModel;

namespace Json2
{
	class Json2
	{
		public static void Main(String[] args)
		{
			if (Directory.Exists("obrazki"))
				Directory.Delete("obrazki", true);
			Directory.CreateDirectory("obrazki");
			String URL = "http://jsonplaceholder.typicode.com/photos";
			HttpWebRequest req = HttpWebRequest.CreateHttp(URL);
			HttpWebResponse res = (HttpWebResponse)req.GetResponse();
			using (Stream stream = res.GetResponseStream())
			{
				StreamReader reader = new StreamReader(stream);
				String s = reader.ReadToEnd();
				dynamic doc = JsonConvert.DeserializeObject(s);
				int ID = 0;
				int LIMIT = 20;
				Task[] tasks = new Task[LIMIT];
				foreach (dynamic ob in doc)
				{
					String url = ob.url;
					Agent agent = new Agent(ID, url);
					tasks[ID] = agent.Start();
					ID++;
					if (ID >= LIMIT)
						break;
				}
				Task.WaitAll(tasks);
			}
		}
	}
	class Agent
	{
		int ID = 0;
		String url;
		public Agent(int ID, String url)
		{
			this.ID = ID;
			this.url = url;
		}
		
		public Task Start()
		{
			WebClient client = new WebClient();
			client.DownloadFileCompleted += Pobrano;
			client.DownloadProgressChanged += Postep;
			Uri uri = new Uri(this.url);
			int ostatni = uri.Segments.Length - 1;
			String nazwa = uri.Segments[ostatni] + ".png";
			return client.DownloadFileTaskAsync(uri, "obrazki/"+nazwa);
		}
		
		public void Postep(object sender, DownloadProgressChangedEventArgs e)
		{
			Console.WriteLine("Pobrano " + e.ProgressPercentage + "% pliku! "+ID);
		}
		public void Pobrano(object sender, AsyncCompletedEventArgs e)
		{
			Console.WriteLine("Pobrano plik! "+ID);
		}
	}
}