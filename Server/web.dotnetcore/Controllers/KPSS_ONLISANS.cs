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
    public class KPSS_ONLISANSController : ControllerBase
    {

        PuanHesaplamaContext db = new PuanHesaplamaContext();
        public readonly _KPSSOnLisans KPSS_ONLISANS;

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllList()
        {
            var kpssOnDataSet = from kOn in db.KPSS_ONLISANS
                                where kOn.Aktif == 1
                                select new
                                {
                                    Il = kOn.Il,
                                    Yer = kOn.Yer,
                                    Kurum_Adi = kOn.Kurum_Adi,
                                    Kadro_Unvani = kOn.Kadro_Unvani,
                                    Kontenjan_Sayisi = kOn.Kontenjan_Sayisi,
                                    Yerlesen_Aday_Sayisi = kOn.Yerlesen_Aday_Sayisi,
                                    Bos_Kalan_Kontenjan_Sayisi = kOn.Bos_Kalan_Kontenjan_Sayisi,
                                    En_Kucuk_Puan = kOn.En_Kucuk_Puan,
                                    En_Buyuk_Puan = kOn.En_Buyuk_Puan
                                };
            var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
            return kpssOnList;
        }

        [HttpPost ]
        public ActionResult<IEnumerable<object>> GetById(string PROGRAM_KODU)
        {
            var kodNumber = int.Parse(PROGRAM_KODU);
            var kpssOnDataSet = from kOn in db.KPSS_ONLISANS
                                where kOn.Aktif == 1 && kOn.Kod == kodNumber
                                select new
                                {
                                    Il = kOn.Il,
                                    Yer = kOn.Yer,
                                    Kurum_Adi = kOn.Kurum_Adi,
                                    Kadro_Unvani = kOn.Kadro_Unvani,
                                    Kontenjan_Sayisi = kOn.Kontenjan_Sayisi,
                                    Yerlesen_Aday_Sayisi = kOn.Yerlesen_Aday_Sayisi,
                                    Bos_Kalan_Kontenjan_Sayisi = kOn.Bos_Kalan_Kontenjan_Sayisi,
                                    En_Kucuk_Puan = kOn.En_Kucuk_Puan,
                                    En_Buyuk_Puan = kOn.En_Buyuk_Puan
                                };
            var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
            return kpssOnList;
        }

        [HttpPost]
        public ActionResult<IEnumerable<object>> GetFilterKPSSOnList([FromBody] _KPSSOnLisans dtKPSSOn)
        {
            if (dtKPSSOn.En_Buyuk_Puan == 0 && dtKPSSOn.En_Kucuk_Puan > 0)
            {
                var kpssOnDataSet = from kOn in db.KPSS_ONLISANS
                                    where kOn.Aktif == 1 &&
                                       kOn.Il == (dtKPSSOn.Il != "" ? dtKPSSOn.Il : kOn.Il) &&
                                       kOn.Kurum_Adi == (dtKPSSOn.Kurum_Adi != "" ? dtKPSSOn.Kurum_Adi : kOn.Kurum_Adi) &&
                                       kOn.Kadro_Unvani == (dtKPSSOn.Kadro_Unvani != "" ? dtKPSSOn.Kadro_Unvani : kOn.Kadro_Unvani) &&
                                       kOn.Yer == (dtKPSSOn.Yer != "" ? dtKPSSOn.Yer : kOn.Yer) &&
                                       kOn.En_Kucuk_Puan >= dtKPSSOn.En_Kucuk_Puan
                                    select new
                                    {
                                        Il = kOn.Il,
                                        Yer = kOn.Yer,
                                        Kurum_Adi = kOn.Kurum_Adi,
                                        Kadro_Unvani = kOn.Kadro_Unvani,
                                        Kontenjan_Sayisi = kOn.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = kOn.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = kOn.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = kOn.En_Kucuk_Puan,
                                        En_Buyuk_Puan = kOn.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;

            }
            else if (dtKPSSOn.En_Buyuk_Puan > 0 && dtKPSSOn.En_Kucuk_Puan == 0)
            {
                var kpssOnDataSet = from kOn in db.KPSS_ONLISANS
                                    where kOn.Aktif == 1 &&
                                       kOn.Il == (dtKPSSOn.Il != "" ? dtKPSSOn.Il : kOn.Il) &&
                                       kOn.Kurum_Adi == (dtKPSSOn.Kurum_Adi != "" ? dtKPSSOn.Kurum_Adi : kOn.Kurum_Adi) &&
                                       kOn.Kadro_Unvani == (dtKPSSOn.Kadro_Unvani != "" ? dtKPSSOn.Kadro_Unvani : kOn.Kadro_Unvani) &&
                                       kOn.Yer == (dtKPSSOn.Yer != "" ? dtKPSSOn.Yer : kOn.Yer) &&
                                       kOn.En_Buyuk_Puan <= dtKPSSOn.En_Buyuk_Puan
                                    select new
                                    {
                                        Il = kOn.Il,
                                        Yer = kOn.Yer,
                                        Kurum_Adi = kOn.Kurum_Adi,
                                        Kadro_Unvani = kOn.Kadro_Unvani,
                                        Kontenjan_Sayisi = kOn.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = kOn.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = kOn.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = kOn.En_Kucuk_Puan,
                                        En_Buyuk_Puan = kOn.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;
            }
            else if (dtKPSSOn.En_Kucuk_Puan > 0 && dtKPSSOn.En_Buyuk_Puan > 0)
            {
                var kpssOnDataSet = from kOn in db.KPSS_ONLISANS
                                    where kOn.Aktif == 1 &&
                                       kOn.Il == (dtKPSSOn.Il != "" ? dtKPSSOn.Il : kOn.Il) &&
                                       kOn.Kurum_Adi == (dtKPSSOn.Kurum_Adi != "" ? dtKPSSOn.Kurum_Adi : kOn.Kurum_Adi) &&
                                       kOn.Kadro_Unvani == (dtKPSSOn.Kadro_Unvani != "" ? dtKPSSOn.Kadro_Unvani : kOn.Kadro_Unvani) &&
                                       kOn.Yer == (dtKPSSOn.Yer != "" ? dtKPSSOn.Yer : kOn.Yer) &&
                                       kOn.En_Buyuk_Puan <= dtKPSSOn.En_Buyuk_Puan &&
                                       kOn.En_Kucuk_Puan >= dtKPSSOn.En_Kucuk_Puan
                                    select new
                                    {
                                        Il = kOn.Il,
                                        Yer = kOn.Yer,
                                        Kurum_Adi = kOn.Kurum_Adi,
                                        Kadro_Unvani = kOn.Kadro_Unvani,
                                        Kontenjan_Sayisi = kOn.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = kOn.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = kOn.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = kOn.En_Kucuk_Puan,
                                        En_Buyuk_Puan = kOn.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;
            }
            else
            {
                var kpssOnDataSet = from kOn in db.KPSS_ONLISANS
                                    where kOn.Aktif == 1 &&
                                       kOn.Il == (dtKPSSOn.Il != "" ? dtKPSSOn.Il : kOn.Il) &&
                                       kOn.Kurum_Adi == (dtKPSSOn.Kurum_Adi != "" ? dtKPSSOn.Kurum_Adi : kOn.Kurum_Adi) &&
                                       kOn.Kadro_Unvani == (dtKPSSOn.Kadro_Unvani != "" ? dtKPSSOn.Kadro_Unvani : kOn.Kadro_Unvani) &&
                                       kOn.Yer == (dtKPSSOn.Yer != "" ? dtKPSSOn.Yer : kOn.Yer) 
                                    select new
                                    {
                                        Il = kOn.Il,
                                        Yer = kOn.Yer,
                                        Kurum_Adi = kOn.Kurum_Adi,
                                        Kadro_Unvani = kOn.Kadro_Unvani,
                                        Kontenjan_Sayisi = kOn.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = kOn.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = kOn.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = kOn.En_Kucuk_Puan,
                                        En_Buyuk_Puan = kOn.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllYer()
        {
            var kpssOnDataSet = from d in db.KPSS_ONLISANS
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
            var kpssOnDataSet = from d in db.KPSS_ONLISANS
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
            var kpssOnDataSet = from d in db.KPSS_ONLISANS
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
            var kpssOnDataSet = from d in db.KPSS_ONLISANS
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
