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
    public class DGSController : ControllerBase
    {

        PuanHesaplamaContext db = new PuanHesaplamaContext();
        public readonly _DGS DGS;

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllList()
        {
            var dgsDataSet = from d in db.DGS
                             where d.AKTIF == 1
                             select new
                             {
                                 PROGRAM_ADI_DETAY = d.PROGRAM_ADI_DETAY,
                                 UNIVERSITE_ADI = d.UNIVERSITE_ADI,
                                 UNIVERSİTE_TURU = d.UNIVERSİTE_TURU,
                                 PROGRAM_ADI = d.PROGRAM_ADI,
                                 PUAN_TURU = d.PUAN_TURU,
                                 KONTENJAN = d.KONTENJAN,
                                 YERLESEN = d.YERLESEN,
                                 Il = d.Il,
                                 BOS_KONTENJAN = d.BOS_KONTENJAN,
                                 EN_KUCUK_PUAN = d.EN_KUCUK_PUAN,
                                 EN_BUYUK_PUAN = d.EN_BUYUK_PUAN
                             };
            var dgsList = dgsDataSet.ToList();
            return dgsList;
        }

        [HttpPost ]
        public ActionResult<IEnumerable<object>> GetById(string PROGRAM_KODU)
        {
            var kodNumber = int.Parse(PROGRAM_KODU);
            var dgsDataSet = from d in db.DGS
                             where d.AKTIF == 1 && d.PROGRAM_KODU == kodNumber
                             select new
                             {
                                 PROGRAM_ADI_DETAY = d.PROGRAM_ADI_DETAY,
                                 UNIVERSITE_ADI = d.UNIVERSITE_ADI,
                                 UNIVERSİTE_TURU = d.UNIVERSİTE_TURU,
                                 PROGRAM_ADI = d.PROGRAM_ADI,
                                 PUAN_TURU = d.PUAN_TURU,
                                 KONTENJAN = d.KONTENJAN,
                                 YERLESEN = d.YERLESEN,
                                 Il = d.Il,
                                 BOS_KONTENJAN = d.BOS_KONTENJAN,
                                 EN_KUCUK_PUAN = d.EN_KUCUK_PUAN,
                                 EN_BUYUK_PUAN = d.EN_BUYUK_PUAN
                             };
            var dgsList = dgsDataSet.ToList();
            return dgsList;
        }

        [HttpPost]
        public ActionResult<IEnumerable<object>> GetFilterDGSList([FromBody] _DGS dtDGS)
        {
            if (dtDGS.EN_BUYUK_PUAN == 0 && dtDGS.EN_KUCUK_PUAN > 0)
            {
                var dgsDataSet = from d in db.DGS
                                 where d.AKTIF == 1 &&
                                       d.Il == (dtDGS.Il != "" ? dtDGS.Il : d.Il) &&
                                       d.UNIVERSITE_ADI == (dtDGS.UNIVERSITE_ADI != "" ? dtDGS.UNIVERSITE_ADI : d.UNIVERSITE_ADI) &&
                                       d.UNIVERSİTE_TURU == (dtDGS.UNIVERSİTE_TURU != "" ? dtDGS.UNIVERSİTE_TURU : d.UNIVERSİTE_TURU) &&
                                       d.PROGRAM_ADI == (dtDGS.PROGRAM_ADI != "" ? dtDGS.PROGRAM_ADI : d.PROGRAM_ADI) &&
                                       d.PUAN_TURU == (dtDGS.PUAN_TURU != "" ? dtDGS.PUAN_TURU : d.PUAN_TURU) &&
                                       d.EN_KUCUK_PUAN >= dtDGS.EN_KUCUK_PUAN
                                 select new
                                 {
                                     PROGRAM_ADI_DETAY = d.PROGRAM_ADI_DETAY,
                                     UNIVERSITE_ADI = d.UNIVERSITE_ADI,
                                     UNIVERSİTE_TURU = d.UNIVERSİTE_TURU,
                                     PROGRAM_ADI = d.PROGRAM_ADI,
                                     PUAN_TURU = d.PUAN_TURU,
                                     KONTENJAN = d.KONTENJAN,
                                     YERLESEN = d.YERLESEN,
                                     Il = d.Il,
                                     BOS_KONTENJAN = d.BOS_KONTENJAN,
                                     EN_KUCUK_PUAN = d.EN_KUCUK_PUAN,
                                     EN_BUYUK_PUAN = d.EN_BUYUK_PUAN
                                 };
                var dgsList = dgsDataSet.OrderByDescending(x => x.EN_BUYUK_PUAN).ToList();
                return dgsList;
            }
            else if (dtDGS.EN_BUYUK_PUAN > 0 && dtDGS.EN_KUCUK_PUAN == 0)
            {
                var dgsDataSet = from d in db.DGS
                                 where d.AKTIF == 1 &&
                                       d.Il == (dtDGS.Il != "" ? dtDGS.Il : d.Il) &&
                                       d.UNIVERSITE_ADI == (dtDGS.UNIVERSITE_ADI != "" ? dtDGS.UNIVERSITE_ADI : d.UNIVERSITE_ADI) &&
                                       d.UNIVERSİTE_TURU == (dtDGS.UNIVERSİTE_TURU != "" ? dtDGS.UNIVERSİTE_TURU : d.UNIVERSİTE_TURU) &&
                                       d.PROGRAM_ADI == (dtDGS.PROGRAM_ADI != "" ? dtDGS.PROGRAM_ADI : d.PROGRAM_ADI) &&
                                       d.PUAN_TURU == (dtDGS.PUAN_TURU != "" ? dtDGS.PUAN_TURU : d.PUAN_TURU) &&
                                       d.EN_BUYUK_PUAN <= dtDGS.EN_BUYUK_PUAN
                                 select new
                                 {
                                     PROGRAM_ADI_DETAY = d.PROGRAM_ADI_DETAY,
                                     UNIVERSITE_ADI = d.UNIVERSITE_ADI,
                                     UNIVERSİTE_TURU = d.UNIVERSİTE_TURU,
                                     PROGRAM_ADI = d.PROGRAM_ADI,
                                     PUAN_TURU = d.PUAN_TURU,
                                     KONTENJAN = d.KONTENJAN,
                                     YERLESEN = d.YERLESEN,
                                     Il = d.Il,
                                     BOS_KONTENJAN = d.BOS_KONTENJAN,
                                     EN_KUCUK_PUAN = d.EN_KUCUK_PUAN,
                                     EN_BUYUK_PUAN = d.EN_BUYUK_PUAN
                                 };
                var dgsList = dgsDataSet.OrderByDescending(x => x.EN_BUYUK_PUAN).ToList();
                return dgsList;
            }
            else if (dtDGS.EN_KUCUK_PUAN > 0 && dtDGS.EN_BUYUK_PUAN > 0)
            {
                var dgsDataSet = from d in db.DGS
                                 where d.AKTIF == 1 &&
                                       d.Il == (dtDGS.Il != "" ? dtDGS.Il : d.Il) &&
                                       d.UNIVERSITE_ADI == (dtDGS.UNIVERSITE_ADI != "" ? dtDGS.UNIVERSITE_ADI : d.UNIVERSITE_ADI) &&
                                       d.UNIVERSİTE_TURU == (dtDGS.UNIVERSİTE_TURU != "" ? dtDGS.UNIVERSİTE_TURU : d.UNIVERSİTE_TURU) &&
                                       d.PROGRAM_ADI == (dtDGS.PROGRAM_ADI != "" ? dtDGS.PROGRAM_ADI : d.PROGRAM_ADI) &&
                                       d.PUAN_TURU == (dtDGS.PUAN_TURU != "" ? dtDGS.PUAN_TURU : d.PUAN_TURU) &&
                                       d.EN_BUYUK_PUAN <= dtDGS.EN_BUYUK_PUAN &&
                                       d.EN_KUCUK_PUAN >= dtDGS.EN_KUCUK_PUAN
                                 select new
                                 {
                                     PROGRAM_ADI_DETAY = d.PROGRAM_ADI_DETAY,
                                     UNIVERSITE_ADI = d.UNIVERSITE_ADI,
                                     UNIVERSİTE_TURU = d.UNIVERSİTE_TURU,
                                     PROGRAM_ADI = d.PROGRAM_ADI,
                                     PUAN_TURU = d.PUAN_TURU,
                                     KONTENJAN = d.KONTENJAN,
                                     YERLESEN = d.YERLESEN,
                                     Il = d.Il,
                                     BOS_KONTENJAN = d.BOS_KONTENJAN,
                                     EN_KUCUK_PUAN = d.EN_KUCUK_PUAN,
                                     EN_BUYUK_PUAN = d.EN_BUYUK_PUAN
                                 };
                var dgsList = dgsDataSet.OrderByDescending(x => x.EN_BUYUK_PUAN).ToList();
                return dgsList;
            }
            else
            {
                var dgsDataSet = from d in db.DGS
                                 where d.AKTIF == 1 &&
                                       d.Il == (dtDGS.Il != "" ? dtDGS.Il : d.Il) &&
                                       d.UNIVERSITE_ADI == (dtDGS.UNIVERSITE_ADI != "" ? dtDGS.UNIVERSITE_ADI : d.UNIVERSITE_ADI) &&
                                       d.UNIVERSİTE_TURU == (dtDGS.UNIVERSİTE_TURU != "" ? dtDGS.UNIVERSİTE_TURU : d.UNIVERSİTE_TURU) &&
                                       d.PROGRAM_ADI == (dtDGS.PROGRAM_ADI != "" ? dtDGS.PROGRAM_ADI : d.PROGRAM_ADI) &&
                                       d.PUAN_TURU == (dtDGS.PUAN_TURU != "" ? dtDGS.PUAN_TURU : d.PUAN_TURU)
                                 select new
                                 {
                                     PROGRAM_ADI_DETAY = d.PROGRAM_ADI_DETAY,
                                     UNIVERSITE_ADI = d.UNIVERSITE_ADI,
                                     UNIVERSİTE_TURU = d.UNIVERSİTE_TURU,
                                     PROGRAM_ADI = d.PROGRAM_ADI,
                                     PUAN_TURU = d.PUAN_TURU,
                                     KONTENJAN = d.KONTENJAN,
                                     YERLESEN = d.YERLESEN,
                                     Il = d.Il,
                                     BOS_KONTENJAN = d.BOS_KONTENJAN,
                                     EN_KUCUK_PUAN = d.EN_KUCUK_PUAN,
                                     EN_BUYUK_PUAN = d.EN_BUYUK_PUAN
                                 };
                var dgsList = dgsDataSet.OrderByDescending(x => x.EN_BUYUK_PUAN).ToList();
                return dgsList;
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllUniversiteTuru()
        {
            var dgsDataSet = from d in db.DGS
                             where d.AKTIF == 1
                             select new
                             {
                                 UNIVERSİTE_TURU = d.UNIVERSİTE_TURU
                             };
            var dgsList = dgsDataSet.ToList().Distinct().ToList().OrderBy(x => x.UNIVERSİTE_TURU).ToList();
            return dgsList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllUniversiteAdi()
        {
            var dgsDataSet = from d in db.DGS
                             where d.AKTIF == 1
                             select new
                             {
                                 UNIVERSITE_ADI = d.UNIVERSITE_ADI
                             };
            var dgsList = dgsDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.UNIVERSITE_ADI).ToList();
            return dgsList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllProgramAdi()
        {
            var dgsDataSet = from d in db.DGS
                             where d.AKTIF == 1
                             select new
                             {
                                 PROGRAM_ADI = d.PROGRAM_ADI
                             };
            var dgsList = dgsDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.PROGRAM_ADI).ToList();
            return dgsList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllPuanTuru()
        {
            var dgsDataSet = from d in db.DGS
                             where d.AKTIF == 1
                             select new
                             {
                                 PUAN_TURU = d.PUAN_TURU
                             };
            var dgsList = dgsDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.PUAN_TURU).ToList();
            return dgsList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllIl()
        {
            var dgsDataSet = from d in db.DGS
                             where d.AKTIF == 1
                             select new
                             {
                                 Il = d.Il
                             };
            var dgsList = dgsDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Il).ToList();
            return dgsList;
        }
    }
}
