import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('2023_OSYM_LISANS')
export class YksLisansEntity {
  @PrimaryGeneratedColumn()
  ProgramKodu: number;

  @Column({ nullable: true})
  UniversiteTuru: string;

  @Column({ nullable: true})
  Sehir: string;

  @Column({ nullable: true})
  UniversiteAdi: string;

  @Column({ nullable: true})
  FakulteYuksekOkulAdi: string;

  @Column({ nullable: true})
  ProgramAdi: string;

  @Column({ nullable: true})
  PuanTuru: string;

  @Column({ nullable: true})
  Kontenjan: number;

  @Column({ nullable: true})
  Yerlesen: number;

  @Column({ nullable: true})
  TabanPuan: number;

  @Column({ nullable: true})
  OkulBirincisiYerlestirmeKontenjani: number;

  @Column({ nullable: true})
  OkulBirincisiYerlestirmeYerlesen: number;

  @Column({ nullable: true})
  OkulBirincisiYerlestirmeEnKucukPuan: number;

  @Column({ nullable: true})
  OkulBirincisiYerlestirmeEnBuyukPuan: number;

  @Column({ nullable: true})
  DepremzedeYerlestirmeKontenjan: number;

  @Column({ nullable: true})
  DepremzedeYerlestirmeYerlesen: number;

  @Column({ nullable: true})
  DepremzedeYerlestirmeEnKucukPuan: number;

  @Column({ nullable: true})
  DepremzedeYerlestirmeEnBuyukPuan: number;

  // @Column({ nullable: true})
  // _34YasUstuKadinYerlestirmeKontenjan: number;

  // @Column({ nullable: true})
  // _34YasUstuKadinYerlestirmeYerlesen: number;

  // @Column({ nullable: true})
  // _34YasUstuKadinYerlestirmeEnKucukPuan: number;

  // @Column({ nullable: true})
  // _34YasUstuKadinYerlestirmeEnBuyukPuan: number;

  // @Column({ nullable: true})
  // Aktif: number;

  // @Column({ nullable: true})
  // Yil: number;

}