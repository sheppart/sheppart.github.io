using System;
using System.Net;
using System.Net.Sockets;
using System.IO;
using Newtonsoft.Json;

namespace Json1
{
	class Json1 
	{
		public static void Main(String[] args)
		{
			HttpWebRequest req = HttpWebRequest.CreateHttp("http://jsonplaceholder.typicode.com/posts");
			HttpWebResponse res = (HttpWebResponse)req.GetResponse();
			using (Stream stream = res.GetResponseStream())
			{
				StreamReader reader = new StreamReader(stream);
				String s = reader.ReadToEnd();
				dynamic doc = JsonConvert.DeserializeObject(s);
				foreach (dynamic ob in doc)
				{
					Console.WriteLine(ob.id);
					Console.WriteLine(ob.title);
				}	
			}	
			
		}
	}
}