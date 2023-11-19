using System;

namespace PuanHesaplamaAPI.Controllers
{
    internal class OSSLisansAttribute : Attribute
    {
        public string universiteTuru { get; set; }
        public string sehir { get; set; }
        public string universiteAdi { get; set; }
        public string fakulte { get; set; }
        public string programAdi { get; set; }
        public string puanTuru { get; set; }
        public int kontenjan { get; set; }
        public int yerlesen { get; set; }
        public string tabanPuan { get; set; }
        public string tavanPuan { get; set; }
        public int okulBirincisiYK { get; set; }
        public int okulBirincisiYY { get; set; }
        public string okulBirincisiYEKP { get; set; }
        public string okulBirincisiYEBP { get; set; }
        public int depremzedeYK { get; set; }
        public int depremzedeYY { get; set; }
        public string depremzedeYEKP { get; set; }
        public string depremzedeYEBP { get; set; }
        public int otuzDortYasUKYK { get; set; }
        public int otuzDortYasUKYY { get; set; }
        public string otuzDortYasUKYEKP { get; set; }
        public string otuzDortYasUKYEBP { get; set; }
    }
}