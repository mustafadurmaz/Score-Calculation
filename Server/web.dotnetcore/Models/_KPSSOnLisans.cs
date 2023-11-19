using System;
using System.Collections.Generic;

namespace PuanHesaplamaAPI.Models
{
    public partial class _KPSSOnLisans
    {
        public int Kod { get; set; }
        public string Kurum_Adi { get; set; }
        public string Kadro_Unvani { get; set; }
        public string Yer { get; set; }
        public string Il { get; set; }
        public int? Kontenjan_Sayisi { get; set; }
        public int? Yerlesen_Aday_Sayisi { get; set; }
        public int? Bos_Kalan_Kontenjan_Sayisi { get; set; }
        public decimal? En_Kucuk_Puan { get; set; }
        public decimal? En_Buyuk_Puan { get; set; }
        public int? Yil { get; set; }
        public int? Aktif { get; set; }

    }
}
