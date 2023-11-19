using Microsoft.AspNetCore.Mvc;
using PuanHesaplamaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PuanHesaplamaAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class KPSS_ORTAOGRETIMController : ControllerBase
    {

        PuanHesaplamaContext db = new PuanHesaplamaContext();
        public readonly _KPSS KPSS_ORTAOGRETIM;

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllList()
        {
            var kpssOrDataSet = from kO in db.KPSS_ORTAOGRETIM
                                where kO.Aktif == 1
                                select new
                                {
                                    Il = kO.Il,
                                    Yer = kO.Yer,
                                    Kurum_Adi = kO.Kurum_Adi,
                                    Kadro_Unvani = kO.Kadro_Unvani,
                                    Kontenjan_Sayisi = kO.Kontenjan_Sayisi,
                                    Yerlesen_Aday_Sayisi = kO.Yerlesen_Aday_Sayisi,
                                    Bos_Kalan_Kontenjan_Sayisi = kO.Bos_Kalan_Kontenjan_Sayisi,
                                    En_Kucuk_Puan = kO.En_Kucuk_Puan,
                                    En_Buyuk_Puan = kO.En_Buyuk_Puan
                                };
            var kpssOnList = kpssOrDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
            return kpssOnList;
        }

        [HttpPost ]
        public ActionResult<IEnumerable<object>> GetById(string PROGRAM_KODU)
        {
            var kodNumber = int.Parse(PROGRAM_KODU);
            var kpssOrDataSet = from kO in db.KPSS_ORTAOGRETIM
                                where kO.Aktif == 1 && kO.Kod == kodNumber
                                select new
                                {
                                    Il = kO.Il,
                                    Yer = kO.Yer,
                                    Kurum_Adi = kO.Kurum_Adi,
                                    Kadro_Unvani = kO.Kadro_Unvani,
                                    Kontenjan_Sayisi = kO.Kontenjan_Sayisi,
                                    Yerlesen_Aday_Sayisi = kO.Yerlesen_Aday_Sayisi,
                                    Bos_Kalan_Kontenjan_Sayisi = kO.Bos_Kalan_Kontenjan_Sayisi,
                                    En_Kucuk_Puan = kO.En_Kucuk_Puan,
                                    En_Buyuk_Puan = kO.En_Buyuk_Puan
                                };
            var kpssOnList = kpssOrDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
            return kpssOnList;
        }

        [HttpPost]
        public ActionResult<IEnumerable<object>> GetFilterKPSSOrList([FromBody] _KPSS dtKPSSOr)
        {
            if (dtKPSSOr.En_Buyuk_Puan == 0 && dtKPSSOr.En_Kucuk_Puan > 0)
            {
                var kpssOrDataSet = from kO in db.KPSS_ORTAOGRETIM
                                    where kO.Aktif == 1 &&
                                       kO.Il == (dtKPSSOr.Il != "" ? dtKPSSOr.Il : kO.Il) &&
                                       kO.Kurum_Adi == (dtKPSSOr.Kurum_Adi != "" ? dtKPSSOr.Kurum_Adi : kO.Kurum_Adi) &&
                                       kO.Kadro_Unvani == (dtKPSSOr.Kadro_Unvani != "" ? dtKPSSOr.Kadro_Unvani : kO.Kadro_Unvani) &&
                                       kO.Yer == (dtKPSSOr.Yer != "" ? dtKPSSOr.Yer : kO.Yer) &&
                                       kO.En_Kucuk_Puan >= dtKPSSOr.En_Kucuk_Puan
                                    select new
                                    {
                                        Il = kO.Il,
                                        Yer = kO.Yer,
                                        Kurum_Adi = kO.Kurum_Adi,
                                        Kadro_Unvani = kO.Kadro_Unvani,
                                        Kontenjan_Sayisi = kO.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = kO.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = kO.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = kO.En_Kucuk_Puan,
                                        En_Buyuk_Puan = kO.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOrDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;

            }
            else if (dtKPSSOr.En_Buyuk_Puan > 0 && dtKPSSOr.En_Kucuk_Puan == 0)
            {
                var kpssOrDataSet = from kO in db.KPSS_ORTAOGRETIM
                                    where kO.Aktif == 1 &&
                                       kO.Il == (dtKPSSOr.Il != "" ? dtKPSSOr.Il : kO.Il) &&
                                       kO.Kurum_Adi == (dtKPSSOr.Kurum_Adi != "" ? dtKPSSOr.Kurum_Adi : kO.Kurum_Adi) &&
                                       kO.Kadro_Unvani == (dtKPSSOr.Kadro_Unvani != "" ? dtKPSSOr.Kadro_Unvani : kO.Kadro_Unvani) &&
                                       kO.Yer == (dtKPSSOr.Yer != "" ? dtKPSSOr.Yer : kO.Yer) &&
                                       kO.En_Buyuk_Puan <= dtKPSSOr.En_Buyuk_Puan
                                    select new
                                    {
                                        Il = kO.Il,
                                        Yer = kO.Yer,
                                        Kurum_Adi = kO.Kurum_Adi,
                                        Kadro_Unvani = kO.Kadro_Unvani,
                                        Kontenjan_Sayisi = kO.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = kO.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = kO.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = kO.En_Kucuk_Puan,
                                        En_Buyuk_Puan = kO.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOrDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;
            }
            else if (dtKPSSOr.En_Kucuk_Puan > 0 && dtKPSSOr.En_Buyuk_Puan > 0)
            {
                var kpssOrDataSet = from kO in db.KPSS_ORTAOGRETIM
                                    where kO.Aktif == 1 &&
                                       kO.Il == (dtKPSSOr.Il != "" ? dtKPSSOr.Il : kO.Il) &&
                                       kO.Kurum_Adi == (dtKPSSOr.Kurum_Adi != "" ? dtKPSSOr.Kurum_Adi : kO.Kurum_Adi) &&
                                       kO.Kadro_Unvani == (dtKPSSOr.Kadro_Unvani != "" ? dtKPSSOr.Kadro_Unvani : kO.Kadro_Unvani) &&
                                       kO.Yer == (dtKPSSOr.Yer != "" ? dtKPSSOr.Yer : kO.Yer) &&
                                       kO.En_Buyuk_Puan <= dtKPSSOr.En_Buyuk_Puan &&
                                       kO.En_Kucuk_Puan >= dtKPSSOr.En_Kucuk_Puan
                                    select new
                                    {
                                        Il = kO.Il,
                                        Yer = kO.Yer,
                                        Kurum_Adi = kO.Kurum_Adi,
                                        Kadro_Unvani = kO.Kadro_Unvani,
                                        Kontenjan_Sayisi = kO.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = kO.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = kO.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = kO.En_Kucuk_Puan,
                                        En_Buyuk_Puan = kO.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOrDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;
            }
            else
            {
                var kpssOrDataSet = from kO in db.KPSS_ORTAOGRETIM
                                    where kO.Aktif == 1 &&
                                       kO.Il == (dtKPSSOr.Il != "" ? dtKPSSOr.Il : kO.Il) &&
                                       kO.Kurum_Adi == (dtKPSSOr.Kurum_Adi != "" ? dtKPSSOr.Kurum_Adi : kO.Kurum_Adi) &&
                                       kO.Kadro_Unvani == (dtKPSSOr.Kadro_Unvani != "" ? dtKPSSOr.Kadro_Unvani : kO.Kadro_Unvani) &&
                                       kO.Yer == (dtKPSSOr.Yer != "" ? dtKPSSOr.Yer : kO.Yer) 
                                    select new
                                    {
                                        Il = kO.Il,
                                        Yer = kO.Yer,
                                        Kurum_Adi = kO.Kurum_Adi,
                                        Kadro_Unvani = kO.Kadro_Unvani,
                                        Kontenjan_Sayisi = kO.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = kO.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = kO.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = kO.En_Kucuk_Puan,
                                        En_Buyuk_Puan = kO.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOrDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllYer()
        {
            var kpssOnDataSet = from d in db.KPSS_ORTAOGRETIM
                                where d.Aktif == 1
                                select new
                                {
                                    Yer = d.Yer
                                };
            var kpssOnList = kpssOnDataSet.ToList().Distinct().ToList().OrderBy(x => x.Yer).ToList();
            return kpssOnList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllKurum_Adi()
        {
            var kpssOnDataSet = from d in db.KPSS_ORTAOGRETIM
                                where d.Aktif == 1
                                select new
                                {
                                    Kurum_Adi = d.Kurum_Adi
                                };
            var kpssOnList = kpssOnDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Kurum_Adi).ToList();
            return kpssOnList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllKadro_Unvani()
        {
            var kpssOnDataSet = from d in db.KPSS_ORTAOGRETIM
                                where d.Aktif == 1
                                select new
                                {
                                    Kadro_Unvani = d.Kadro_Unvani
                                };
            var kpssOnList = kpssOnDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Kadro_Unvani).ToList();
            return kpssOnList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllIl()
        {
            var kpssOnDataSet = from d in db.KPSS_ORTAOGRETIM
                                where d.Aktif == 1
                                select new
                                {
                                    Il = d.Il
                                };
            var kpssOnList = kpssOnDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Il).ToList();
            return kpssOnList;
        }
    }
}
