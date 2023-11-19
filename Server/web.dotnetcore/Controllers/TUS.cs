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
    public class TUSController : ControllerBase
    {

        PuanHesaplamaContext db = new PuanHesaplamaContext();
        public readonly _TUS TUS;

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllList()
        {
            var tusDataSet = from t in db.TUS
                             where t.Aktif == 1
                             select new
                             {
                                 Program_Adi = t.Program_Adi,
                                 Il = t.Il,
                                 Kontenjan_Turu = t.Kontenjan_Turu,
                                 Alan = t.Alan,
                                 Kontenjan_Sayisi = t.Kontenjan_Sayisi,
                                 Yerlesen_Aday_Sayisi = t.Yerlesen_Aday_Sayisi,
                                 Bos_Kalan_Kontenjan_Sayisi = t.Bos_Kalan_Kontenjan_Sayisi,
                                 En_Kucuk_Puan = t.En_Kucuk_Puan,
                                 En_Buyuk_Puan = t.En_Buyuk_Puan
                             };
            var tusList = tusDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
            return tusList;
        }

        [HttpPost ]
        public ActionResult<IEnumerable<object>> GetById(string Kod)
        {
            var kodNumber = int.Parse(Kod);
            var tusDataSet = from t in db.TUS
                             where t.Aktif == 1 && t.Kod == kodNumber
                             select new
                             {
                                 Program_Adi = t.Program_Adi,
                                 Il = t.Il,
                                 Kontenjan_Turu = t.Kontenjan_Turu,
                                 Alan = t.Alan,
                                 Kontenjan_Sayisi = t.Kontenjan_Sayisi,
                                 Yerlesen_Aday_Sayisi = t.Yerlesen_Aday_Sayisi,
                                 Bos_Kalan_Kontenjan_Sayisi = t.Bos_Kalan_Kontenjan_Sayisi,
                                 En_Kucuk_Puan = t.En_Kucuk_Puan,
                                 En_Buyuk_Puan = t.En_Buyuk_Puan
                             };
            var tusList = tusDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
            return tusList;
        }

        [HttpPost]
        public ActionResult<IEnumerable<object>> GetFilterTUSList([FromBody] _TUS dtTUS)
        {
            if (dtTUS.En_Buyuk_Puan == 0 && dtTUS.En_Kucuk_Puan > 0)
            {
                var tusDataSet = from t in db.TUS
                                 where t.Aktif == 1 &&
                                 t.Il == (dtTUS.Il != "" ? dtTUS.Il : t.Il) &&
                                 t.Alan == (dtTUS.Alan != "" ? dtTUS.Alan : t.Alan) &&
                                 t.Kontenjan_Turu == (dtTUS.Kontenjan_Turu != "" ? dtTUS.Kontenjan_Turu : t.Kontenjan_Turu) &&
                                 t.En_Kucuk_Puan >= dtTUS.En_Kucuk_Puan
                                 select new
                                 {
                                     Program_Adi = t.Program_Adi,
                                     Il = t.Il,
                                     Kontenjan_Turu = t.Kontenjan_Turu,
                                     Alan = t.Alan,
                                     Kontenjan_Sayisi = t.Kontenjan_Sayisi,
                                     Yerlesen_Aday_Sayisi = t.Yerlesen_Aday_Sayisi,
                                     Bos_Kalan_Kontenjan_Sayisi = t.Bos_Kalan_Kontenjan_Sayisi,
                                     En_Kucuk_Puan = t.En_Kucuk_Puan,
                                     En_Buyuk_Puan = t.En_Buyuk_Puan
                                 };
                var tusList = tusDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return tusList;
            }
            else if (dtTUS.En_Buyuk_Puan > 0 && dtTUS.En_Kucuk_Puan == 0)
            {
                var tusDataSet = from t in db.TUS
                                 where t.Aktif == 1 &&
                                 t.Il == (dtTUS.Il != "" ? dtTUS.Il : t.Il) &&
                                 t.Alan == (dtTUS.Alan != "" ? dtTUS.Alan : t.Alan) &&
                                 t.Kontenjan_Turu == (dtTUS.Kontenjan_Turu != "" ? dtTUS.Kontenjan_Turu : t.Kontenjan_Turu) &&
                                 t.En_Buyuk_Puan <= dtTUS.En_Buyuk_Puan
                                 select new
                                 {
                                     Program_Adi = t.Program_Adi,
                                     Il = t.Il,
                                     Kontenjan_Turu = t.Kontenjan_Turu,
                                     Alan = t.Alan,
                                     Kontenjan_Sayisi = t.Kontenjan_Sayisi,
                                     Yerlesen_Aday_Sayisi = t.Yerlesen_Aday_Sayisi,
                                     Bos_Kalan_Kontenjan_Sayisi = t.Bos_Kalan_Kontenjan_Sayisi,
                                     En_Kucuk_Puan = t.En_Kucuk_Puan,
                                     En_Buyuk_Puan = t.En_Buyuk_Puan
                                 };
                var tusList = tusDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return tusList;
            }
            else if (dtTUS.En_Kucuk_Puan > 0 && dtTUS.En_Buyuk_Puan > 0)
            {
                var tusDataSet = from t in db.TUS
                                 where t.Aktif == 1 &&
                                 t.Il == (dtTUS.Il != "" ? dtTUS.Il : t.Il) &&
                                 t.Alan == (dtTUS.Alan != "" ? dtTUS.Alan : t.Alan) &&
                                 t.Kontenjan_Turu == (dtTUS.Kontenjan_Turu != "" ? dtTUS.Kontenjan_Turu : t.Kontenjan_Turu) &&
                                 t.En_Buyuk_Puan <= dtTUS.En_Buyuk_Puan && t.En_Kucuk_Puan >= dtTUS.En_Kucuk_Puan
                                 select new
                                 {
                                     Program_Adi = t.Program_Adi,
                                     Il = t.Il,
                                     Kontenjan_Turu = t.Kontenjan_Turu,
                                     Alan = t.Alan,
                                     Kontenjan_Sayisi = t.Kontenjan_Sayisi,
                                     Yerlesen_Aday_Sayisi = t.Yerlesen_Aday_Sayisi,
                                     Bos_Kalan_Kontenjan_Sayisi = t.Bos_Kalan_Kontenjan_Sayisi,
                                     En_Kucuk_Puan = t.En_Kucuk_Puan,
                                     En_Buyuk_Puan = t.En_Buyuk_Puan
                                 };
                var tusList = tusDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return tusList;
            }
            else
            {
                var tusDataSet = from t in db.TUS
                                 where t.Aktif == 1 &&
                                 t.Il == (dtTUS.Il != "" ? dtTUS.Il : t.Il) &&
                                 t.Alan == (dtTUS.Alan != "" ? dtTUS.Alan : t.Alan) &&
                                 t.Kontenjan_Turu == (dtTUS.Kontenjan_Turu != "" ? dtTUS.Kontenjan_Turu : t.Kontenjan_Turu) 
                                 select new
                                 {
                                     Program_Adi = t.Program_Adi,
                                     Il = t.Il,
                                     Kontenjan_Turu = t.Kontenjan_Turu,
                                     Alan = t.Alan,
                                     Kontenjan_Sayisi = t.Kontenjan_Sayisi,
                                     Yerlesen_Aday_Sayisi = t.Yerlesen_Aday_Sayisi,
                                     Bos_Kalan_Kontenjan_Sayisi = t.Bos_Kalan_Kontenjan_Sayisi,
                                     En_Kucuk_Puan = t.En_Kucuk_Puan,
                                     En_Buyuk_Puan = t.En_Buyuk_Puan
                                 };
                var tusList = tusDataSet.OrderByDescending(x => x.En_Buyuk_Puan).ToList();
                return tusList;
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllProgram_Adi()
        {
            var tusDataSet = from t in db.TUS
                             where t.Aktif == 1
                             select new
                             {
                                 Program_Adi = t.Program_Adi
                             };
            var tusList = tusDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Program_Adi).ToList();
            return tusList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllKontenjan_Turu()
        {
            var tusDataSet = from t in db.TUS
                             where t.Aktif == 1
                             select new
                             {
                                 Kontenjan_Turu = t.Kontenjan_Turu
                             };
            var sasd = tusDataSet.ToList();
            var tusList = tusDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Kontenjan_Turu).ToList();
            return tusList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllAlan()
        {
            var tusDataSet = from t in db.TUS
                             where t.Aktif == 1
                             select new
                             {
                                 Alan = t.Alan
                             };
            var tusList = tusDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Alan).ToList();
            return tusList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllIl()
        {
            var tusDataSet = from t in db.TUS
                             where t.Aktif == 1
                             select new
                             {
                                 Il = t.Il
                             };
            var tusList = tusDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Il).ToList();
            return tusList;
        }

    }
}
