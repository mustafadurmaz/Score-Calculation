using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PuanHesaplamaAPI.Models
{
    public partial class PuanHesaplamaContext : DbContext
    {
        public PuanHesaplamaContext()
        {
        }

        public PuanHesaplamaContext(DbContextOptions<PuanHesaplamaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bolumler> Bolumler { get; set; }
        public virtual DbSet<Fakulteler> Fakulteler { get; set; }
        public virtual DbSet<Ilceler> Ilceler { get; set; }
        public virtual DbSet<Iller> Iller { get; set; }
        public virtual DbSet<IpControl> IpControl { get; set; }
        public virtual DbSet<_2023OsymLisans> _2023OsymLisans { get; set; }
        public virtual DbSet<_2023OsymOnlisans> _2023OsymOnlisans { get; set; }
        public virtual DbSet<_LGS> LGS { get; set; }
        public virtual DbSet<_TUS> TUS { get; set; }
        public virtual DbSet<_DGS> DGS { get; set; }
        public virtual DbSet<_KPSSOnLisans> KPSS_ONLISANS { get; set; }
        public virtual DbSet<_KPSS> KPSS_LISANS { get; set; }
        public virtual DbSet<_KPSS> KPSS_ORTAOGRETIM { get; set; }

        // Unable to generate entity type for table 'dbo.universiteler'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.Universite_Puan'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("server=.;Database=PuanHesaplama;Trusted_Connection=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Bolumler>(entity =>
            {
                entity.HasKey(e => e.BolumId);

                entity.ToTable("bolumler");

                entity.Property(e => e.BolumId)
                    .HasColumnName("bolum_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BolumAd)
                    .HasColumnName("bolum_ad")
                    .HasMaxLength(250);

                entity.Property(e => e.FakulteId).HasColumnName("fakulte_id");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.UniId).HasColumnName("uni_id");
            });

            modelBuilder.Entity<Fakulteler>(entity =>
            {
                entity.HasKey(e => e.FakulteId);

                entity.ToTable("fakulteler");

                entity.Property(e => e.FakulteId)
                    .HasColumnName("fakulte_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.FakulteAd)
                    .HasColumnName("fakulte_ad")
                    .HasMaxLength(250);

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.UniId).HasColumnName("uni_id");
            });

            modelBuilder.Entity<Ilceler>(entity =>
            {
                entity.ToTable("ilceler");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Ilceadi)
                    .IsRequired()
                    .HasColumnName("ilceadi")
                    .HasMaxLength(255);

                entity.Property(e => e.Sehirid).HasColumnName("sehirid");
            });

            modelBuilder.Entity<Iller>(entity =>
            {
                entity.ToTable("iller");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Sehiradi)
                    .HasColumnName("sehiradi")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<IpControl>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.IpName).HasMaxLength(250);
            });

            modelBuilder.Entity<_2023OsymLisans>(entity =>
            {
                entity.HasKey(e => e.ProgramKodu);

                entity.ToTable("2023_OSYM_LISANS");

                entity.Property(e => e.ProgramKodu)
                    .HasColumnName("ProgramKodu")
                    .HasMaxLength(250)
                    .ValueGeneratedNever();

                entity.Property(e => e.DepremzedeYerlestirmeEnBuyukPuan)
                    .HasColumnName("DepremzedeYerlestirmeEnBuyukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.DepremzedeYerlestirmeEnKucukPuan)
                    .HasColumnName("DepremzedeYerlestirmeEnKucukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.DepremzedeYerlestirmeKontenjan).HasColumnName("DepremzedeYerlestirmeKontenjan");

                entity.Property(e => e.DepremzedeYerlestirmeYerlesen).HasColumnName("DepremzedeYerlestirmeYerlesen");

                entity.Property(e => e.FakulteYuksekOkulAdi)
                    .HasColumnName("FakulteYuksekOkulAdi")
                    .HasMaxLength(250);

                entity.Property(e => e.OkulBirincisiYerlestirmeEnBuyukPuan)
                    .HasColumnName("OkulBirincisiYerlestirmeEnBuyukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.OkulBirincisiYerlestirmeEnKucukPuan)
                    .HasColumnName("OkulBirincisiYerlestirmeEnKucukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.OkulBirincisiYerlestirmeKontenjani).HasColumnName("OkulBirincisiYerlestirmeKontenjani");

                entity.Property(e => e.OkulBirincisiYerlestirmeYerlesen).HasColumnName("OkulBirincisiYerlestirmeYerlesen");

                entity.Property(e => e.ProgramAdi)
                    .HasColumnName("ProgramAdi")
                    .HasMaxLength(250);

                entity.Property(e => e.PuanTuru)
                    .HasColumnName("PuanTuru")
                    .HasMaxLength(250);

                entity.Property(e => e.Sehir).HasMaxLength(50);

                entity.Property(e => e.TabanPuan)
                    .HasColumnName("TabanPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.TavanPuan)
                    .HasColumnName("TavanPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e._34YasUstuKadinYerlestirmeEnBuyukPuan)
                    .HasColumnName("_34YasUstuKadinYerlestirmeEnBuyukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e._34YasUstuKadinYerlestirmeEnKucukPuan)
                    .HasColumnName("_34YasUstuKadinYerlestirmeEnKucukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e._34YasUstuKadinYerlestirmeKontenjan).HasColumnName("_34YasUstuKadinYerlestirmeKontenjan");

                entity.Property(e => e._34YasUstuKadinYerlestirmeYerlesen).HasColumnName("_34YasUstuKadinYerlestirmeYerlesen");

                entity.Property(e => e.UniversiteAdi)
                    .HasColumnName("UniversiteAdi")
                    .HasMaxLength(250);

                entity.Property(e => e.UniversiteTuru)
                    .HasColumnName("UniversiteTuru")
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<_2023OsymOnlisans>(entity =>
            {
                entity.HasKey(e => e.ProgramKodu);

                entity.ToTable("2023_OSYM_ONLISANS");

                entity.Property(e => e.ProgramKodu)
                      .HasColumnName("ProgramKodu")
                      .HasMaxLength(250)
                      .ValueGeneratedNever();

                entity.Property(e => e.DepremzedeYerlestirmeEnBuyukPuan)
                    .HasColumnName("DepremzedeYerlestirmeEnBuyukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.DepremzedeYerlestirmeEnKucukPuan)
                    .HasColumnName("DepremzedeYerlestirmeEnKucukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.DepremzedeYerlestirmeKontenjan).HasColumnName("DepremzedeYerlestirmeKontenjan");

                entity.Property(e => e.DepremzedeYerlestirmeYerlesen).HasColumnName("DepremzedeYerlestirmeYerlesen");

                entity.Property(e => e.FakulteYuksekOkulAdi)
                    .HasColumnName("FakulteYuksekOkulAdi")
                    .HasMaxLength(250);

                entity.Property(e => e.OkulBirincisiYerlestirmeEnBuyukPuan)
                    .HasColumnName("OkulBirincisiYerlestirmeEnBuyukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.OkulBirincisiYerlestirmeEnKucukPuan)
                    .HasColumnName("OkulBirincisiYerlestirmeEnKucukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.OkulBirincisiYerlestirmeKontenjani).HasColumnName("OkulBirincisiYerlestirmeKontenjani");

                entity.Property(e => e.OkulBirincisiYerlestirmeYerlesen).HasColumnName("OkulBirincisiYerlestirmeYerlesen");

                entity.Property(e => e.ProgramAdi)
                    .HasColumnName("ProgramAdi")
                    .HasMaxLength(250);

                entity.Property(e => e.PuanTuru)
                    .HasColumnName("PuanTuru")
                    .HasMaxLength(250);

                entity.Property(e => e.Sehir).HasMaxLength(50);

                entity.Property(e => e.TabanPuan)
                    .HasColumnName("TabanPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.TavanPuan)
                    .HasColumnName("TavanPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e._34YasUstuKadinYerlestirmeEnBuyukPuan)
                    .HasColumnName("_34YasUstuKadinYerlestirmeEnBuyukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e._34YasUstuKadinYerlestirmeEnKucukPuan)
                    .HasColumnName("_34YasUstuKadinYerlestirmeEnKucukPuan")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e._34YasUstuKadinYerlestirmeKontenjan).HasColumnName("_34YasUstuKadinYerlestirmeKontenjan");

                entity.Property(e => e._34YasUstuKadinYerlestirmeYerlesen).HasColumnName("_34YasUstuKadinYerlestirmeYerlesen");

                entity.Property(e => e.UniversiteAdi)
                    .HasColumnName("UniversiteAdi")
                    .HasMaxLength(250);

                entity.Property(e => e.UniversiteTuru)
                    .HasColumnName("UniversiteTuru")
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<_LGS>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.ToTable("LGS");

                entity.Property(e => e.Id)
                    .HasColumnName("Id")
                    .HasMaxLength(36)
                    .ValueGeneratedNever();

                entity.Property(e => e.LiseAdi)
                    .HasColumnName("LiseAdi")
                    .HasMaxLength(250);

                entity.Property(e => e.Puan2023)
                    .HasColumnName("Puan2023")
                    .HasMaxLength(250);

                entity.Property(e => e.Puan2022).HasColumnName("Puan2022");

                entity.Property(e => e.Kontenjan2023).HasColumnName("Kontenjan2023");

                entity.Property(e => e.Kontenjan2022)
                    .HasColumnName("Kontenjan2022")
                    .HasMaxLength(250);

                entity.Property(e => e.MinimumYuzdelikDilim2023)
                    .HasColumnName("MinimumYuzdelikDilim2023")
                    .HasMaxLength(250);

                entity.Property(e => e.MinimumYuzdelikDilim2022)
                    .HasColumnName("MinimumYuzdelikDilim2022")
                    .HasMaxLength(250);

                entity.Property(e => e.Il).HasColumnName("Il");

                entity.Property(e => e.Ilce).HasColumnName("Ilce");

                entity.Property(e => e.AlanTuru)
                    .HasColumnName("AlanTuru")
                    .HasMaxLength(250);

                entity.Property(e => e.OgrenimDili)
                    .HasColumnName("OgrenimDili")
                    .HasMaxLength(250);

                entity.Property(e => e.Aktif).HasMaxLength(250);

                entity.Property(e => e.Yil)
                    .HasColumnName("Yil")
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<_TUS>(entity =>
            {
                entity.HasKey(e => e.Kod);

                entity.ToTable("TUS");

                entity.Property(e => e.Kod)
                    .HasColumnName("Kod")
                    .HasMaxLength(36)
                    .ValueGeneratedNever();

                entity.Property(e => e.Program_Adi)
                    .HasColumnName("Program_Adi")
                    .HasMaxLength(250);

                entity.Property(e => e.Il)
                    .HasColumnName("Il")
                    .HasMaxLength(250);

                entity.Property(e => e.Kontenjan_Turu)
                    .HasColumnName("Kontenjan_Turu")
                    .HasMaxLength(250);

                entity.Property(e => e.Alan)
                    .HasColumnName("Alan")
                    .HasMaxLength(250);

                entity.Property(e => e.Kontenjan_Sayisi).HasColumnName("Kontenjan_Sayisi");

                entity.Property(e => e.Yerlesen_Aday_Sayisi).HasColumnName("Yerlesen_Aday_Sayisi"); 
                
                entity.Property(e => e.Bos_Kalan_Kontenjan_Sayisi).HasColumnName("Bos_Kalan_Kontenjan_Sayisi");                

                entity.Property(e => e.En_Kucuk_Puan).HasColumnName("En_Kucuk_Puan");                
                
                entity.Property(e => e.En_Buyuk_Puan).HasColumnName("En_Buyuk_Puan");

                entity.Property(e => e.Yil).HasColumnName("Yil");

                entity.Property(e => e.Aktif).HasColumnName("Aktif");
            });

            modelBuilder.Entity<_DGS>(entity =>
            {
                entity.HasKey(e => e.PROGRAM_KODU);

                entity.ToTable("DGS");

                entity.Property(e => e.PROGRAM_KODU)
                    .HasColumnName("PROGRAM_KODU")
                    .HasMaxLength(36)
                    .ValueGeneratedNever();

                entity.Property(e => e.PROGRAM_ADI_DETAY)
                    .HasColumnName("PROGRAM_ADI_DETAY")
                    .HasMaxLength(250);

                entity.Property(e => e.Il)
                    .HasColumnName("Il")
                    .HasMaxLength(250);

                entity.Property(e => e.UNIVERSITE_ADI)
                    .HasColumnName("UNIVERSITE_ADI")
                    .HasMaxLength(250);

                entity.Property(e => e.UNIVERSİTE_TURU)
                    .HasColumnName("UNIVERSİTE_TURU")
                    .HasMaxLength(250);                
                
                entity.Property(e => e.PROGRAM_ADI)
                    .HasColumnName("PROGRAM_ADI")
                    .HasMaxLength(250);                
                
                entity.Property(e => e.PUAN_TURU)
                    .HasColumnName("PUAN_TURU")
                    .HasMaxLength(250);                
                
                entity.Property(e => e.Il)
                    .HasColumnName("Il")
                    .HasMaxLength(250);

                entity.Property(e => e.KONTENJAN).HasColumnName("KONTENJAN");

                entity.Property(e => e.YERLESEN).HasColumnName("YERLESEN");

                entity.Property(e => e.BOS_KONTENJAN).HasColumnName("BOS_KONTENJAN");

                entity.Property(e => e.EN_KUCUK_PUAN).HasColumnName("EN_KUCUK_PUAN");

                entity.Property(e => e.EN_BUYUK_PUAN).HasColumnName("EN_BUYUK_PUAN");

                entity.Property(e => e.YIL).HasColumnName("YIL");

                entity.Property(e => e.AKTIF).HasColumnName("AKTIF");
            });

            modelBuilder.Entity<_KPSSOnLisans>(entity =>
            {
                entity.HasKey(e => e.Kod);

                entity.ToTable("KPSS_ONLISANS");

                entity.Property(e => e.Kod)
                    .HasColumnName("Kod")
                    .HasMaxLength(36)
                    .ValueGeneratedNever();

                entity.Property(e => e.Kurum_Adi)
                    .HasColumnName("Kurum_Adi")
                    .HasMaxLength(250);

                entity.Property(e => e.Il)
                    .HasColumnName("Il")
                    .HasMaxLength(250);

                entity.Property(e => e.Kadro_Unvani)
                    .HasColumnName("Kadro_Unvani")
                    .HasMaxLength(250);

                entity.Property(e => e.Yer)
                    .HasColumnName("Yer")
                    .HasMaxLength(250);

                entity.Property(e => e.Kontenjan_Sayisi).HasColumnName("Kontenjan_Sayisi");

                entity.Property(e => e.Yerlesen_Aday_Sayisi).HasColumnName("Yerlesen_Aday_Sayisi");

                entity.Property(e => e.Bos_Kalan_Kontenjan_Sayisi).HasColumnName("Bos_Kalan_Kontenjan_Sayisi");

                entity.Property(e => e.En_Kucuk_Puan).HasColumnName("En_Kucuk_Puan");

                entity.Property(e => e.En_Buyuk_Puan).HasColumnName("En_Buyuk_Puan");

                entity.Property(e => e.Yil).HasColumnName("Yil");

                entity.Property(e => e.Aktif).HasColumnName("Aktif");
            });

            modelBuilder.Entity<_KPSS>(entity =>
            {
                entity.HasKey(e => e.Kod);

                entity.ToTable("KPSS_LISANS");

                entity.Property(e => e.Kod)
                    .HasColumnName("Kod")
                    .HasMaxLength(36)
                    .ValueGeneratedNever();

                entity.Property(e => e.Kurum_Adi)
                    .HasColumnName("Kurum_Adi")
                    .HasMaxLength(250);

                entity.Property(e => e.Il)
                    .HasColumnName("Il")
                    .HasMaxLength(250);

                entity.Property(e => e.Kadro_Unvani)
                    .HasColumnName("Kadro_Unvani")
                    .HasMaxLength(250);

                entity.Property(e => e.Yer)
                    .HasColumnName("Yer")
                    .HasMaxLength(250);

                entity.Property(e => e.Kontenjan_Sayisi).HasColumnName("Kontenjan_Sayisi");

                entity.Property(e => e.Yerlesen_Aday_Sayisi).HasColumnName("Yerlesen_Aday_Sayisi");

                entity.Property(e => e.Bos_Kalan_Kontenjan_Sayisi).HasColumnName("Bos_Kalan_Kontenjan_Sayisi");

                entity.Property(e => e.En_Kucuk_Puan).HasColumnName("En_Kucuk_Puan");

                entity.Property(e => e.En_Buyuk_Puan).HasColumnName("En_Buyuk_Puan");

                entity.Property(e => e.Yil).HasColumnName("Yil");

                entity.Property(e => e.Aktif).HasColumnName("Aktif");
            });

            modelBuilder.Entity<_KPSS>(entity =>
            {
                entity.HasKey(e => e.Kod);

                entity.ToTable("KPSS_ORTAOGRETIM");

                entity.Property(e => e.Kod)
                    .HasColumnName("Kod")
                    .HasMaxLength(36)
                    .ValueGeneratedNever();

                entity.Property(e => e.Kurum_Adi)
                    .HasColumnName("Kurum_Adi")
                    .HasMaxLength(250);

                entity.Property(e => e.Il)
                    .HasColumnName("Il")
                    .HasMaxLength(250);

                entity.Property(e => e.Kadro_Unvani)
                    .HasColumnName("Kadro_Unvani")
                    .HasMaxLength(250);

                entity.Property(e => e.Yer)
                    .HasColumnName("Yer")
                    .HasMaxLength(250);

                entity.Property(e => e.Kontenjan_Sayisi).HasColumnName("Kontenjan_Sayisi");

                entity.Property(e => e.Yerlesen_Aday_Sayisi).HasColumnName("Yerlesen_Aday_Sayisi");

                entity.Property(e => e.Bos_Kalan_Kontenjan_Sayisi).HasColumnName("Bos_Kalan_Kontenjan_Sayisi");

                entity.Property(e => e.En_Kucuk_Puan).HasColumnName("En_Kucuk_Puan");

                entity.Property(e => e.En_Buyuk_Puan).HasColumnName("En_Buyuk_Puan");

                entity.Property(e => e.Yil).HasColumnName("Yil");

                entity.Property(e => e.Aktif).HasColumnName("Aktif");
            });
        }
    }
}
