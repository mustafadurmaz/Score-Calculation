using System;
using System.Collections.Generic;

namespace PuanHesaplamaAPI.Models
{
    public partial class Bolumler
    {
        public int BolumId { get; set; }
        public int? UniId { get; set; }
        public string BolumAd { get; set; }
        public int? FakulteId { get; set; }
        public byte? Status { get; set; }
    }
}
