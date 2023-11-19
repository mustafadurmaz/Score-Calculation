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
    public class KPSS_LISANSController : ControllerBase
    {

        PuanHesaplamaContext db = new PuanHesaplamaContext();
        public readonly _KPSS KPSS_LISANS;

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllList()
        {
            var kpssOnDataSet = from k in db.KPSS_LISANS
                                where k.Aktif == 1
                                select new
                                {
                                    Il = k.Il,
                                    Yer = k.Yer,
                                    Kurum_Adi = k.Kurum_Adi,
                                    Kadro_Unvani = k.Kadro_Unvani,
                                    Kontenjan_Sayisi = k.Kontenjan_Sayisi,
                                    Yerlesen_Aday_Sayisi = k.Yerlesen_Aday_Sayisi,
                                    Bos_Kalan_Kontenjan_Sayisi = k.Bos_Kalan_Kontenjan_Sayisi,
                                    En_Kucuk_Puan = k.En_Kucuk_Puan,
                                    En_Buyuk_Puan = k.En_Buyuk_Puan
                                };
            var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
            return kpssOnList;
        }

        [HttpPost ]
        public ActionResult<IEnumerable<object>> GetById(string PROGRAM_KODU)
        {
            var kodNumber = int.Parse(PROGRAM_KODU);
            var kpssOnDataSet = from k in db.KPSS_LISANS
                                where k.Aktif == 1 && k.Kod == kodNumber
                                select new
                                {
                                    Il = k.Il,
                                    Yer = k.Yer,
                                    Kurum_Adi = k.Kurum_Adi,
                                    Kadro_Unvani = k.Kadro_Unvani,
                                    Kontenjan_Sayisi = k.Kontenjan_Sayisi,
                                    Yerlesen_Aday_Sayisi = k.Yerlesen_Aday_Sayisi,
                                    Bos_Kalan_Kontenjan_Sayisi = k.Bos_Kalan_Kontenjan_Sayisi,
                                    En_Kucuk_Puan = k.En_Kucuk_Puan,
                                    En_Buyuk_Puan = k.En_Buyuk_Puan
                                };
            var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
            return kpssOnList;
        }

        [HttpPost]
        public ActionResult<IEnumerable<object>> GetFilterKPSSLList([FromBody] _KPSS dtKPSSOn)
        {
            if (dtKPSSOn.En_Buyuk_Puan == 0 && dtKPSSOn.En_Kucuk_Puan > 0)
            {
                var kpssOnDataSet = from k in db.KPSS_LISANS
                                    where k.Aktif == 1 &&
                                       k.Il == (dtKPSSOn.Il != "" ? dtKPSSOn.Il : k.Il) &&
                                       k.Kurum_Adi == (dtKPSSOn.Kurum_Adi != "" ? dtKPSSOn.Kurum_Adi : k.Kurum_Adi) &&
                                       k.Kadro_Unvani == (dtKPSSOn.Kadro_Unvani != "" ? dtKPSSOn.Kadro_Unvani : k.Kadro_Unvani) &&
                                       k.Yer == (dtKPSSOn.Yer != "" ? dtKPSSOn.Yer : k.Yer) &&
                                       k.En_Kucuk_Puan >= dtKPSSOn.En_Kucuk_Puan
                                    select new
                                    {
                                        Il = k.Il,
                                        Yer = k.Yer,
                                        Kurum_Adi = k.Kurum_Adi,
                                        Kadro_Unvani = k.Kadro_Unvani,
                                        Kontenjan_Sayisi = k.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = k.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = k.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = k.En_Kucuk_Puan,
                                        En_Buyuk_Puan = k.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;

            }
            else if (dtKPSSOn.En_Buyuk_Puan > 0 && dtKPSSOn.En_Kucuk_Puan == 0)
            {
                var kpssOnDataSet = from k in db.KPSS_LISANS
                                    where k.Aktif == 1 &&
                                       k.Il == (dtKPSSOn.Il != "" ? dtKPSSOn.Il : k.Il) &&
                                       k.Kurum_Adi == (dtKPSSOn.Kurum_Adi != "" ? dtKPSSOn.Kurum_Adi : k.Kurum_Adi) &&
                                       k.Kadro_Unvani == (dtKPSSOn.Kadro_Unvani != "" ? dtKPSSOn.Kadro_Unvani : k.Kadro_Unvani) &&
                                       k.Yer == (dtKPSSOn.Yer != "" ? dtKPSSOn.Yer : k.Yer) &&
                                       k.En_Buyuk_Puan <= dtKPSSOn.En_Buyuk_Puan
                                    select new
                                    {
                                        Il = k.Il,
                                        Yer = k.Yer,
                                        Kurum_Adi = k.Kurum_Adi,
                                        Kadro_Unvani = k.Kadro_Unvani,
                                        Kontenjan_Sayisi = k.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = k.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = k.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = k.En_Kucuk_Puan,
                                        En_Buyuk_Puan = k.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;
            }
            else if (dtKPSSOn.En_Kucuk_Puan > 0 && dtKPSSOn.En_Buyuk_Puan > 0)
            {
                var kpssOnDataSet = from k in db.KPSS_LISANS
                                    where k.Aktif == 1 &&
                                       k.Il == (dtKPSSOn.Il != "" ? dtKPSSOn.Il : k.Il) &&
                                       k.Kurum_Adi == (dtKPSSOn.Kurum_Adi != "" ? dtKPSSOn.Kurum_Adi : k.Kurum_Adi) &&
                                       k.Kadro_Unvani == (dtKPSSOn.Kadro_Unvani != "" ? dtKPSSOn.Kadro_Unvani : k.Kadro_Unvani) &&
                                       k.Yer == (dtKPSSOn.Yer != "" ? dtKPSSOn.Yer : k.Yer) &&
                                       k.En_Buyuk_Puan <= dtKPSSOn.En_Buyuk_Puan &&
                                       k.En_Kucuk_Puan >= dtKPSSOn.En_Kucuk_Puan
                                    select new
                                    {
                                        Il = k.Il,
                                        Yer = k.Yer,
                                        Kurum_Adi = k.Kurum_Adi,
                                        Kadro_Unvani = k.Kadro_Unvani,
                                        Kontenjan_Sayisi = k.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = k.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = k.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = k.En_Kucuk_Puan,
                                        En_Buyuk_Puan = k.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;
            }
            else
            {
                var kpssOnDataSet = from k in db.KPSS_LISANS
                                    where k.Aktif == 1 &&
                                       k.Il == (dtKPSSOn.Il != "" ? dtKPSSOn.Il : k.Il) &&
                                       k.Kurum_Adi == (dtKPSSOn.Kurum_Adi != "" ? dtKPSSOn.Kurum_Adi : k.Kurum_Adi) &&
                                       k.Kadro_Unvani == (dtKPSSOn.Kadro_Unvani != "" ? dtKPSSOn.Kadro_Unvani : k.Kadro_Unvani) &&
                                       k.Yer == (dtKPSSOn.Yer != "" ? dtKPSSOn.Yer : k.Yer) 
                                    select new
                                    {
                                        Il = k.Il,
                                        Yer = k.Yer,
                                        Kurum_Adi = k.Kurum_Adi,
                                        Kadro_Unvani = k.Kadro_Unvani,
                                        Kontenjan_Sayisi = k.Kontenjan_Sayisi,
                                        Yerlesen_Aday_Sayisi = k.Yerlesen_Aday_Sayisi,
                                        Bos_Kalan_Kontenjan_Sayisi = k.Bos_Kalan_Kontenjan_Sayisi,
                                        En_Kucuk_Puan = k.En_Kucuk_Puan,
                                        En_Buyuk_Puan = k.En_Buyuk_Puan
                                    };
                var kpssOnList = kpssOnDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return kpssOnList;
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllYer()
        {
            var kpssOnDataSet = from d in db.KPSS_LISANS
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
            var kpssOnDataSet = from d in db.KPSS_LISANS
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
            var kpssOnDataSet = from d in db.KPSS_LISANS
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
            var kpssOnDataSet = from d in db.KPSS_LISANS
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
