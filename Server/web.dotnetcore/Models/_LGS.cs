using System;
using System.Collections.Generic;

namespace PuanHesaplamaAPI.Models
{
    public partial class _LGS
    {
        public Guid Id { get; set; }
        public string LiseAdi { get; set; }
        public decimal Puan2023 { get; set; }
        public decimal Puan2022 { get; set; }
        public decimal TopPuan { get; set; }
        public decimal DownPuan { get; set; }
        public int? Kontenjan2023 { get; set; }
        public int? Kontenjan2022 { get; set; }
        public decimal? MinimumYuzdelikDilim2023 { get; set; }
        public decimal? MinimumYuzdelikDilim2022 { get; set; }
        public string Il { get; set; }
        public string Ilce { get; set; }
        public string AlanTuru { get; set; }
        public string OgrenimDili { get; set; }
        public int? Aktif { get; set; }
        public int? Yil { get; set; }
    }
}
