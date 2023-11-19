using System;
using System.Collections.Generic;

namespace PuanHesaplamaAPI.Models
{
    public partial class IpControl
    {
        public int Id { get; set; }
        public string IpName { get; set; }
        public byte? Aktif { get; set; }
    }
}
