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
    public class LGSController : ControllerBase
    {

        PuanHesaplamaContext db = new PuanHesaplamaContext();
        public readonly _LGS LGS;

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllList()
        {
            var lgsDataSet = from l in db.LGS
                             where l.Aktif == 1
                             select new
                             {
                                 LiseAdi = l.LiseAdi,
                                 Puan2023 = l.Puan2023,
                                 Puan2022 = l.Puan2022,
                                 Kontenjan2023 = l.Kontenjan2023,
                                 Kontenjan2022 = l.Kontenjan2022,
                                 MinimumYuzdelikDilim2023 = l.MinimumYuzdelikDilim2023,
                                 MinimumYuzdelikDilim2022 = l.MinimumYuzdelikDilim2022,
                                 Il = l.Il,
                                 Ilce = l.Ilce,
                                 AlanTuru = l.AlanTuru,
                                 OgrenimDili = l.OgrenimDili
                             };
            var lgsList = lgsDataSet.OrderByDescending(x => x.Puan2023).ToList();
            return lgsList;
        }

        [HttpPost("{id}")]
        public ActionResult<IEnumerable<object>> GetById(string id)
        {
            string guid = id;
            var Id = Guid.Parse(guid);

            var lgsDataSet = from l in db.LGS
                             where l.Aktif == 1 && l.Id == Id
                             select new
                             {
                                 LiseAdi = l.LiseAdi,
                                 Puan2023 = l.Puan2023,
                                 Puan2022 = l.Puan2022,
                                 Kontenjan2023 = l.Kontenjan2023,
                                 Kontenjan2022 = l.Kontenjan2022,
                                 MinimumYuzdelikDilim2023 = l.MinimumYuzdelikDilim2023,
                                 MinimumYuzdelikDilim2022 = l.MinimumYuzdelikDilim2022,
                                 Il = l.Il,
                                 Ilce = l.Ilce,
                                 AlanTuru = l.AlanTuru,
                                 OgrenimDili = l.OgrenimDili
                             };
            var lgsList = lgsDataSet.OrderByDescending(x => x.Puan2023).ToList();
            return lgsList;
        }

        [HttpPost]
        public ActionResult<IEnumerable<object>> GetFilterLGSList([FromBody] _LGS dtLGS)
        {
            if (dtLGS.TopPuan == 0 && dtLGS.DownPuan > 0)
            {
                var lgsDataSet = from l in db.LGS
                                 where l.Il == (dtLGS.Il != "" ? dtLGS.Il : l.Il)
                                    && l.Ilce == (dtLGS.Ilce != "" ? dtLGS.Ilce : l.Ilce)
                                    && l.AlanTuru == (dtLGS.AlanTuru != "" ? dtLGS.AlanTuru : l.AlanTuru)
                                    && l.OgrenimDili == (dtLGS.OgrenimDili != "" ? dtLGS.OgrenimDili : l.OgrenimDili)
                                    && l.Aktif == 1
                                    && l.Puan2023 >= dtLGS.DownPuan
                                    && l.LiseAdi == (dtLGS.LiseAdi != "" ? dtLGS.LiseAdi : l.LiseAdi)
                                 select new
                                 {
                                     LiseAdi = l.LiseAdi,
                                     Puan2023 = l.Puan2023,
                                     Puan2022 = l.Puan2022,
                                     Kontenjan2023 = l.Kontenjan2023,
                                     Kontenjan2022 = l.Kontenjan2022,
                                     MinimumYuzdelikDilim2023 = l.MinimumYuzdelikDilim2023,
                                     MinimumYuzdelikDilim2022 = l.MinimumYuzdelikDilim2022,
                                     Il = l.Il,
                                     Ilce = l.Ilce,
                                     AlanTuru = l.AlanTuru,
                                     OgrenimDili = l.OgrenimDili
                                 };
                var lgsList = lgsDataSet.OrderByDescending(x => x.Puan2023).ToList();
                return lgsList;
            }
            else if (dtLGS.TopPuan > 0 && dtLGS.DownPuan == 0)
            {
                var lgsDataSet = from l in db.LGS
                                 where l.Il == (dtLGS.Il != "" ? dtLGS.Il : l.Il)
                                    && l.Ilce == (dtLGS.Ilce != "" ? dtLGS.Ilce : l.Ilce)
                                    && l.AlanTuru == (dtLGS.AlanTuru != "" ? dtLGS.AlanTuru : l.AlanTuru)
                                    && l.OgrenimDili == (dtLGS.OgrenimDili != "" ? dtLGS.OgrenimDili : l.OgrenimDili)
                                    && l.Aktif == 1
                                    && l.Puan2023 <= dtLGS.TopPuan
                                    && l.LiseAdi == (dtLGS.LiseAdi != "" ? dtLGS.LiseAdi : l.LiseAdi)
                                 select new
                                 {
                                     LiseAdi = l.LiseAdi,
                                     Puan2023 = l.Puan2023,
                                     Puan2022 = l.Puan2022,
                                     Kontenjan2023 = l.Kontenjan2023,
                                     Kontenjan2022 = l.Kontenjan2022,
                                     MinimumYuzdelikDilim2023 = l.MinimumYuzdelikDilim2023,
                                     MinimumYuzdelikDilim2022 = l.MinimumYuzdelikDilim2022,
                                     Il = l.Il,
                                     Ilce = l.Ilce,
                                     AlanTuru = l.AlanTuru,
                                     OgrenimDili = l.OgrenimDili
                                 };
                var lgsList = lgsDataSet.OrderByDescending(x => x.Puan2023).ToList();
                return lgsList;
            }
            else if (dtLGS.TopPuan > 0 && dtLGS.DownPuan > 0)
            {
                var lgsDataSet = from l in db.LGS
                                 where l.Il == (dtLGS.Il != "" ? dtLGS.Il : l.Il)
                                    && l.Ilce == (dtLGS.Ilce != "" ? dtLGS.Ilce : l.Ilce)
                                    && l.AlanTuru == (dtLGS.AlanTuru != "" ? dtLGS.AlanTuru : l.AlanTuru)
                                    && l.OgrenimDili == (dtLGS.OgrenimDili != "" ? dtLGS.OgrenimDili : l.OgrenimDili)
                                    && l.Aktif == 1
                                    && l.Puan2023 <= dtLGS.TopPuan
                                    && l.Puan2023 >= dtLGS.DownPuan
                                    && l.LiseAdi == (dtLGS.LiseAdi != "" ? dtLGS.LiseAdi : l.LiseAdi)
                                 select new
                                 {
                                     LiseAdi = l.LiseAdi,
                                     Puan2023 = l.Puan2023,
                                     Puan2022 = l.Puan2022,
                                     Kontenjan2023 = l.Kontenjan2023,
                                     Kontenjan2022 = l.Kontenjan2022,
                                     MinimumYuzdelikDilim2023 = l.MinimumYuzdelikDilim2023,
                                     MinimumYuzdelikDilim2022 = l.MinimumYuzdelikDilim2022,
                                     Il = l.Il,
                                     Ilce = l.Ilce,
                                     AlanTuru = l.AlanTuru,
                                     OgrenimDili = l.OgrenimDili
                                 };
                var lgsList = lgsDataSet.OrderByDescending(x => x.Puan2023).ToList();
                return lgsList;
            }
            else
            {
                var lgsDataSet = from l in db.LGS
                                 where l.Il == (dtLGS.Il != "" ? dtLGS.Il : l.Il)
                                    && l.Ilce == (dtLGS.Ilce != "" ? dtLGS.Ilce : l.Ilce)
                                    && l.AlanTuru == (dtLGS.AlanTuru != "" ? dtLGS.AlanTuru : l.AlanTuru)
                                    && l.OgrenimDili == (dtLGS.OgrenimDili != "" ? dtLGS.OgrenimDili : l.OgrenimDili)
                                    && l.Aktif == 1
                                    && l.LiseAdi == (dtLGS.LiseAdi != "" ? dtLGS.LiseAdi : l.LiseAdi)
                                 select new
                                 {
                                     LiseAdi = l.LiseAdi,
                                     Puan2023 = l.Puan2023,
                                     Puan2022 = l.Puan2022,
                                     Kontenjan2023 = l.Kontenjan2023,
                                     Kontenjan2022 = l.Kontenjan2022,
                                     MinimumYuzdelikDilim2023 = l.MinimumYuzdelikDilim2023,
                                     MinimumYuzdelikDilim2022 = l.MinimumYuzdelikDilim2022,
                                     Il = l.Il,
                                     Ilce = l.Ilce,
                                     AlanTuru = l.AlanTuru,
                                     OgrenimDili = l.OgrenimDili
                                 };
                var lgsList = lgsDataSet.OrderByDescending(x => x.Puan2023).ToList();
                return lgsList;
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllLiseAdi()
        {
            var lgsDataSet = from l in db.LGS
                             where l.Aktif == 1
                             select new
                             {
                                 LiseAdi = l.LiseAdi
                             };
            var lgsList = lgsDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.LiseAdi).ToList();
            return lgsList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllAlanTuru()
        {
            var lgsDataSet = from l in db.LGS
                             where l.Aktif == 1
                             select new
                             {
                                 AlanTuru = l.AlanTuru
                             };
            var lgsList = lgsDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.AlanTuru).ToList();
            return lgsList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllOgrenimDili()
        {
            var lgsDataSet = from l in db.LGS
                             where l.Aktif == 1
                             select new
                             {
                                 OgrenimDili = l.OgrenimDili
                             };
            var lgsList = lgsDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.OgrenimDili).ToList();
            return lgsList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllIl()
        {
            var lgsDataSet = from l in db.LGS
                             where l.Aktif == 1
                             select new
                             {
                                 Il = l.Il
                             };
            var lgsList = lgsDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Il).ToList();
            return lgsList;
        }

        [HttpGet]
        public ActionResult<IEnumerable<object>> GetAllIlce()
        {
            var lgsDataSet = from l in db.LGS
                             where l.Aktif == 1
                             select new
                             {
                                 Ilce = l.Ilce
                             };
            var lgsList = lgsDataSet.ToList().Distinct().ToList().Distinct().ToList().OrderBy(x => x.Ilce).ToList();
            return lgsList;
        }
    }
}
