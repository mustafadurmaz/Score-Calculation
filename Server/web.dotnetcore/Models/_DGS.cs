using System;
using System.Collections.Generic;

namespace PuanHesaplamaAPI.Models
{
    public partial class _DGS
    {
        public int PROGRAM_KODU { get; set; }
        public string PROGRAM_ADI_DETAY { get; set; }
        public string Il { get; set; }
        public string UNIVERSITE_ADI { get; set; }
        public string UNIVERSİTE_TURU { get; set; }
        public string PROGRAM_ADI { get; set; }
        public string PUAN_TURU { get; set; }
        public int? KONTENJAN { get; set; }
        public int? YERLESEN { get; set; }
        public int? BOS_KONTENJAN { get; set; }
        public decimal? EN_KUCUK_PUAN { get; set; }
        public decimal? EN_BUYUK_PUAN { get; set; }
        public int? YIL { get; set; }
        public int? AKTIF { get; set; }

    }
}
