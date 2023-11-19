using System;
using System.Collections.Generic;

namespace PuanHesaplamaAPI.Models
{
    public partial class Fakulteler
    {
        public int FakulteId { get; set; }
        public string FakulteAd { get; set; }
        public int? UniId { get; set; }
        public byte? Status { get; set; }
    }
}
