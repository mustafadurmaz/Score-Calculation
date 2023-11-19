using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PuanHesaplamaAPI.Models;

namespace PuanHesaplamaAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OssOnLisansController : ControllerBase
    {

        PuanHesaplamaContext db = new PuanHesaplamaContext();
        private readonly _LGS osymOnLisans;

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllList()
        {
            var ossDataSet = from o in db._2023OsymOnlisans
                             where o.Aktif == 1
                             select new
                             {
                                 UniversiteTuru = o.UniversiteTuru,
                                 Sehir = o.Sehir,
                                 UniversiteAdi = o.UniversiteAdi,
                                 Fakulte = o.FakulteYuksekOkulAdi,
                                 ProgramAdi = o.ProgramAdi,
                                 PuanTuru = o.PuanTuru,
                                 Kontenjan = o.Kontenjan,
                                 Yerlesen = o.Yerlesen,
                                 TabanPuan = o.TabanPuan,
                                 TavanPuan = o.TavanPuan,
                                 OkulBirincisiYK = o.OkulBirincisiYerlestirmeKontenjani,
                                 OkulBirincisiYY = o.OkulBirincisiYerlestirmeYerlesen,
                                 OkulBirincisiYEKP = o.OkulBirincisiYerlestirmeEnKucukPuan,
                                 OkulBirincisiYEBP = o.OkulBirincisiYerlestirmeEnBuyukPuan,
                                 DepremzedeYK = o.DepremzedeYerlestirmeKontenjan,
                                 DepremzedeYY = o.DepremzedeYerlestirmeYerlesen,
                                 DepremzedeYEKP = o.DepremzedeYerlestirmeEnKucukPuan,
                                 DepremzedeYEBP = o.DepremzedeYerlestirmeEnBuyukPuan,
                                 OtuzDortYasUKYK = o._34YasUstuKadinYerlestirmeKontenjan,
                                 OtuzDortYasUKYY = o._34YasUstuKadinYerlestirmeYerlesen,
                                 OtuzDortYasUKYEKP = o._34YasUstuKadinYerlestirmeEnKucukPuan,
                                 OtuzDortYasUKYEBP = o._34YasUstuKadinYerlestirmeEnBuyukPuan
                             };
            var ossList = ossDataSet.OrderByDescending(x => x.TavanPuan).ToList();
            return ossList;
        }

        [HttpPost ]
        public ActionResult<IEnumerable<object>> GetById(string ProgramKodu)
        {
            var ossDataSet = from o in db._2023OsymOnlisans
                             where o.Aktif == 1 && o.ProgramKodu == ProgramKodu
                             select new
                             {
                                 UniversiteTuru = o.UniversiteTuru,
                                 Sehir = o.Sehir,
                                 UniversiteAdi = o.UniversiteAdi,
                                 Fakulte = o.FakulteYuksekOkulAdi,
                                 ProgramAdi = o.ProgramAdi,
                                 PuanTuru = o.PuanTuru,
                                 Kontenjan = o.Kontenjan,
                                 Yerlesen = o.Yerlesen,
                                 TabanPuan = o.TabanPuan,
                                 TavanPuan = o.TavanPuan,
                                 OkulBirincisiYK = o.OkulBirincisiYerlestirmeKontenjani,
                                 OkulBirincisiYY = o.OkulBirincisiYerlestirmeYerlesen,
                                 OkulBirincisiYEKP = o.OkulBirincisiYerlestirmeEnKucukPuan,
                                 OkulBirincisiYEBP = o.OkulBirincisiYerlestirmeEnBuyukPuan,
                                 DepremzedeYK = o.DepremzedeYerlestirmeKontenjan,
                                 DepremzedeYY = o.DepremzedeYerlestirmeYerlesen,
                                 DepremzedeYEKP = o.DepremzedeYerlestirmeEnKucukPuan,
                                 DepremzedeYEBP = o.DepremzedeYerlestirmeEnBuyukPuan,
                                 OtuzDortYasUKYK = o._34YasUstuKadinYerlestirmeKontenjan,
                                 OtuzDortYasUKYY = o._34YasUstuKadinYerlestirmeYerlesen,
                                 OtuzDortYasUKYEKP = o._34YasUstuKadinYerlestirmeEnKucukPuan,
                                 OtuzDortYasUKYEBP = o._34YasUstuKadinYerlestirmeEnBuyukPuan
                             };
            var ossList = ossDataSet.OrderByDescending(x => x.TavanPuan).ToList();
            return ossList;
        }

        [HttpPost]
        public ActionResult<IEnumerable<object>> GetFilterOssList([FromBody] OSSOnLisans dtOss)
        {
            if (dtOss.tabanPuan == 0 && dtOss.tavanPuan > 0)
            {
                var ossList = from o in db._2023OsymOnlisans
                              where o.Sehir == (dtOss.sehir != "" ? dtOss.sehir : o.Sehir)
                                 && o.PuanTuru == (dtOss.puanTuru != "" ? dtOss.puanTuru : o.PuanTuru)
                                 && o.FakulteYuksekOkulAdi == (dtOss.fakulte != "" ? dtOss.fakulte : o.FakulteYuksekOkulAdi)
                                 && o.UniversiteTuru == (dtOss.universiteTuru != "" ? dtOss.universiteTuru : o.UniversiteTuru)
                                 && o.ProgramAdi == (dtOss.programAdi != "" ? dtOss.programAdi : o.ProgramAdi) && o.PuanTuru == (dtOss.puanTuru != "" ? dtOss.puanTuru : o.PuanTuru)
                                 && o.Aktif == 1 
                                 && o.TavanPuan <= dtOss.tavanPuan
                                 && o.UniversiteAdi == (dtOss.universiteAdi != "" ? dtOss.universiteAdi : o.UniversiteAdi)
                              select new
                              {
                                  UniversiteTuru = o.UniversiteTuru,
                                  Sehir = o.Sehir,
                                  UniversiteAdi = o.UniversiteAdi,
                                  Fakulte = o.FakulteYuksekOkulAdi,
                                  ProgramAdi = o.ProgramAdi,
                                  PuanTuru = o.PuanTuru,
                                  Kontenjan = o.Kontenjan,
                                  Yerlesen = o.Yerlesen,
                                  TabanPuan = o.TabanPuan,
                                  TavanPuan = o.TavanPuan,
                                  OkulBirincisiYK = o.OkulBirincisiYerlestirmeKontenjani,
                                  OkulBirincisiYY = o.OkulBirincisiYerlestirmeYerlesen,
                                  OkulBirincisiYEKP = o.OkulBirincisiYerlestirmeEnKucukPuan,
                                  OkulBirincisiYEBP = o.OkulBirincisiYerlestirmeEnBuyukPuan,
                                  DepremzedeYK = o.DepremzedeYerlestirmeKontenjan,
                                  DepremzedeYY = o.DepremzedeYerlestirmeYerlesen,
                                  DepremzedeYEKP = o.DepremzedeYerlestirmeEnKucukPuan,
                                  DepremzedeYEBP = o.DepremzedeYerlestirmeEnBuyukPuan,
                                  OtuzDortYasUKYK = o._34YasUstuKadinYerlestirmeKontenjan,
                                  OtuzDortYasUKYY = o._34YasUstuKadinYerlestirmeYerlesen,
                                  OtuzDortYasUKYEKP = o._34YasUstuKadinYerlestirmeEnKucukPuan,
                                  OtuzDortYasUKYEBP = o._34YasUstuKadinYerlestirmeEnBuyukPuan
                              };
                var ossLists = ossList.OrderByDescending(x => x.TavanPuan).ToList();
                return ossLists;
            }
            else if (dtOss.tavanPuan == 0 && dtOss.tabanPuan > 0)
            {
                var ossList = from o in db._2023OsymOnlisans
                              where o.Sehir == (dtOss.sehir != "" ? dtOss.sehir : o.Sehir)
                                 && o.PuanTuru == (dtOss.puanTuru != "" ? dtOss.puanTuru : o.PuanTuru)
                                 && o.FakulteYuksekOkulAdi == (dtOss.fakulte != "" ? dtOss.fakulte : o.FakulteYuksekOkulAdi)
                                 && o.UniversiteTuru == (dtOss.universiteTuru != "" ? dtOss.universiteTuru : o.UniversiteTuru)
                                 && o.ProgramAdi == (dtOss.programAdi != "" ? dtOss.programAdi : o.ProgramAdi) && o.PuanTuru == (dtOss.puanTuru != "" ? dtOss.puanTuru : o.PuanTuru)
                                 && o.Aktif == 1 
                                 && o.TabanPuan >= dtOss.tabanPuan
                                 && o.UniversiteAdi == (dtOss.universiteAdi != "" ? dtOss.universiteAdi : o.UniversiteAdi)
                              select new
                              {
                                  UniversiteTuru = o.UniversiteTuru,
                                  Sehir = o.Sehir,
                                  UniversiteAdi = o.UniversiteAdi,
                                  Fakulte = o.FakulteYuksekOkulAdi,
                                  ProgramAdi = o.ProgramAdi,
                                  PuanTuru = o.PuanTuru,
                                  Kontenjan = o.Kontenjan,
                                  Yerlesen = o.Yerlesen,
                                  TabanPuan = o.TabanPuan,
                                  TavanPuan = o.TavanPuan,
                                  OkulBirincisiYK = o.OkulBirincisiYerlestirmeKontenjani,
                                  OkulBirincisiYY = o.OkulBirincisiYerlestirmeYerlesen,
                                  OkulBirincisiYEKP = o.OkulBirincisiYerlestirmeEnKucukPuan,
                                  OkulBirincisiYEBP = o.OkulBirincisiYerlestirmeEnBuyukPuan,
                                  DepremzedeYK = o.DepremzedeYerlestirmeKontenjan,
                                  DepremzedeYY = o.DepremzedeYerlestirmeYerlesen,
                                  DepremzedeYEKP = o.DepremzedeYerlestirmeEnKucukPuan,
                                  DepremzedeYEBP = o.DepremzedeYerlestirmeEnBuyukPuan,
                                  OtuzDortYasUKYK = o._34YasUstuKadinYerlestirmeKontenjan,
                                  OtuzDortYasUKYY = o._34YasUstuKadinYerlestirmeYerlesen,
                                  OtuzDortYasUKYEKP = o._34YasUstuKadinYerlestirmeEnKucukPuan,
                                  OtuzDortYasUKYEBP = o._34YasUstuKadinYerlestirmeEnBuyukPuan
                              };
                var ossLists = ossList.OrderByDescending(x => x.TavanPuan).ToList();
                return ossLists;
            }
            else if (dtOss.tavanPuan == 0 && dtOss.tabanPuan == 0)
            {
                var ossList = from o in db._2023OsymOnlisans
                              where o.Sehir == (dtOss.sehir != "" ? dtOss.sehir : o.Sehir)
                                 && o.PuanTuru == (dtOss.puanTuru != "" ? dtOss.puanTuru : o.PuanTuru)
                                 && o.FakulteYuksekOkulAdi == (dtOss.fakulte != "" ? dtOss.fakulte : o.FakulteYuksekOkulAdi)
                                 && o.UniversiteTuru == (dtOss.universiteTuru != "" ? dtOss.universiteTuru : o.UniversiteTuru)
                                 && o.ProgramAdi == (dtOss.programAdi != "" ? dtOss.programAdi : o.ProgramAdi) && o.PuanTuru == (dtOss.puanTuru != "" ? dtOss.puanTuru : o.PuanTuru)
                                 && o.Aktif == 1
                                 && o.UniversiteAdi == (dtOss.universiteAdi != "" ? dtOss.universiteAdi : o.UniversiteAdi)
                              select new
                              {
                                  UniversiteTuru = o.UniversiteTuru,
                                  Sehir = o.Sehir,
                                  UniversiteAdi = o.UniversiteAdi,
                                  Fakulte = o.FakulteYuksekOkulAdi,
                                  ProgramAdi = o.ProgramAdi,
                                  PuanTuru = o.PuanTuru,
                                  Kontenjan = o.Kontenjan,
                                  Yerlesen = o.Yerlesen,
                                  TabanPuan = o.TabanPuan,
                                  TavanPuan = o.TavanPuan,
                                  OkulBirincisiYK = o.OkulBirincisiYerlestirmeKontenjani,
                                  OkulBirincisiYY = o.OkulBirincisiYerlestirmeYerlesen,
                                  OkulBirincisiYEKP = o.OkulBirincisiYerlestirmeEnKucukPuan,
                                  OkulBirincisiYEBP = o.OkulBirincisiYerlestirmeEnBuyukPuan,
                                  DepremzedeYK = o.DepremzedeYerlestirmeKontenjan,
                                  DepremzedeYY = o.DepremzedeYerlestirmeYerlesen,
                                  DepremzedeYEKP = o.DepremzedeYerlestirmeEnKucukPuan,
                                  DepremzedeYEBP = o.DepremzedeYerlestirmeEnBuyukPuan,
                                  OtuzDortYasUKYK = o._34YasUstuKadinYerlestirmeKontenjan,
                                  OtuzDortYasUKYY = o._34YasUstuKadinYerlestirmeYerlesen,
                                  OtuzDortYasUKYEKP = o._34YasUstuKadinYerlestirmeEnKucukPuan,
                                  OtuzDortYasUKYEBP = o._34YasUstuKadinYerlestirmeEnBuyukPuan
                              };
                var ossLists = ossList.OrderByDescending(x => x.TavanPuan).ToList();
                return ossLists;
            }
            else
            {
                var ossList = from o in db._2023OsymOnlisans
                              where o.Sehir == (dtOss.sehir != "" ? dtOss.sehir : o.Sehir) 
                                 && o.PuanTuru == (dtOss.puanTuru != "" ? dtOss.puanTuru : o.PuanTuru)
                                 && o.FakulteYuksekOkulAdi == (dtOss.fakulte != "" ? dtOss.fakulte : o.FakulteYuksekOkulAdi )
                                 && o.UniversiteTuru == (dtOss.universiteTuru != "" ? dtOss.universiteTuru : o.UniversiteTuru)
                                 && o.ProgramAdi == (dtOss.programAdi != "" ? dtOss.programAdi: o.ProgramAdi) 
                                 && o.PuanTuru == (dtOss.puanTuru != "" ? dtOss.puanTuru : o.PuanTuru)
                                 && o.UniversiteAdi == (dtOss.universiteAdi != "" ? dtOss.universiteAdi : o.UniversiteAdi)
                                 && o.Aktif == 1 
                                 && o.TabanPuan >= dtOss.tabanPuan 
                                 && o.TavanPuan <= dtOss.tavanPuan
                              select new
                              {
                                  UniversiteTuru = o.UniversiteTuru,
                                  Sehir = o.Sehir,
                                  UniversiteAdi = o.UniversiteAdi,
                                  Fakulte = o.FakulteYuksekOkulAdi,
                                  ProgramAdi = o.ProgramAdi,
                                  PuanTuru = o.PuanTuru,
                                  Kontenjan = o.Kontenjan,
                                  Yerlesen = o.Yerlesen,
                                  TabanPuan = o.TabanPuan,
                                  TavanPuan = o.TavanPuan,
                                  OkulBirincisiYK = o.OkulBirincisiYerlestirmeKontenjani,
                                  OkulBirincisiYY = o.OkulBirincisiYerlestirmeYerlesen,
                                  OkulBirincisiYEKP = o.OkulBirincisiYerlestirmeEnKucukPuan,
                                  OkulBirincisiYEBP = o.OkulBirincisiYerlestirmeEnBuyukPuan,
                                  DepremzedeYK = o.DepremzedeYerlestirmeKontenjan,
                                  DepremzedeYY = o.DepremzedeYerlestirmeYerlesen,
                                  DepremzedeYEKP = o.DepremzedeYerlestirmeEnKucukPuan,
                                  DepremzedeYEBP = o.DepremzedeYerlestirmeEnBuyukPuan,
                                  OtuzDortYasUKYK = o._34YasUstuKadinYerlestirmeKontenjan,
                                  OtuzDortYasUKYY = o._34YasUstuKadinYerlestirmeYerlesen,
                                  OtuzDortYasUKYEKP = o._34YasUstuKadinYerlestirmeEnKucukPuan,
                                  OtuzDortYasUKYEBP = o._34YasUstuKadinYerlestirmeEnBuyukPuan
                              };
                var ossLists = ossList.OrderByDescending(x => x.TavanPuan).ToList();
                return ossLists;
            }

        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllUniversiteAdi()
        {
            var ossDataSet = from o in db._2023OsymOnlisans
                             where o.Aktif == 1
                             select new
                             {
                                 UniversiteAdi = o.UniversiteAdi
                             };
            var ossList = ossDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.UniversiteAdi).ToList();
            return ossList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllFakulteYuksekOkulAdi()
        {
            var ossDataSet = from o in db._2023OsymOnlisans
                             where o.Aktif == 1
                             select new
                             {
                                 FakulteYuksekOkulAdi = o.FakulteYuksekOkulAdi
                             };
            var sasd = ossDataSet.ToList();
            var ossList = ossDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.FakulteYuksekOkulAdi).ToList();
            return ossList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllProgramAdi()
        {
            var ossDataSet = from o in db._2023OsymOnlisans
                             where o.Aktif == 1
                             select new
                             {
                                 ProgramAdi = o.ProgramAdi
                             };
            var ossList = ossDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.ProgramAdi).ToList();
            return ossList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllIl()
        {
            var ossDataSet = from o in db._2023OsymOnlisans
                             where o.Aktif == 1
                             select new
                             {
                                 Sehir = o.Sehir
                             };
            var ossList = ossDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Sehir).ToList();
            return ossList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllUniversiteTuru()
        {
            var ossDataSet = from o in db._2023OsymOnlisans
                             where o.Aktif == 1
                             select new
                             {
                                 UniversiteTuru = o.UniversiteTuru
                             };
            var ossList = ossDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.UniversiteTuru).ToList();
            return ossList;
        }


        public class OSSOnLisans
        {
            public string universiteTuru { get; set; }
            public string sehir { get; set; }
            public string universiteAdi { get; set; }
            public string fakulte { get; set; }
            public string programAdi { get; set; }
            public string puanTuru { get; set; }
            public int kontenjan { get; set; }
            public int yerlesen { get; set; }
            public decimal tabanPuan { get; set; }
            public decimal tavanPuan { get; set; }
            public int okulBirincisiYK { get; set; }
            public int okulBirincisiYY { get; set; }
            public decimal okulBirincisiYEKP { get; set; }
            public decimal okulBirincisiYEBP { get; set; }
            public int depremzedeYK { get; set; }
            public int depremzedeYY { get; set; }
            public decimal depremzedeYEKP { get; set; }
            public decimal depremzedeYEBP { get; set; }
            public int otuzDortYasUKYK { get; set; }
            public int otuzDortYasUKYY { get; set; }
            public decimal otuzDortYasUKYEKP { get; set; }
            public decimal otuzDortYasUKYEBP { get; set; }
        }
    }
}
