import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('YKSLisans')
export class YksLisansEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  ProgramKodu: number;

  @Column({ type: 'varchar', length: 512 })
  UniversiteTuru: string;

  @Column({ type: 'varchar', length: 512 })
  Sehir: string;

  @Column({ type: 'varchar', length: 512 })
  UniversiteAdi: string;

  @Column({ type: 'varchar', length: 512 })
  FakulteYuksekOkulAdi: string;

  @Column({ type: 'varchar', length: 512 })
  ProgramAdi: string;

  @Column({ type: 'varchar', length: 512 })
  PuanTuru: string;

  @Column({ type: 'int' })
  Kontenjan: number;

  @Column({ type: 'int' })
  Yerlesen: number;

  @Column({ type: 'double' })
  TabanPuan: number;

  @Column({ type: 'double' })
  TavanPuan: number;

  @Column({ type: 'int' })
  OkulBirincisiYerlestirmeKontenjani: number;

  @Column({ type: 'varchar', length: 512 })
  OkulBirincisiYerlestirmeYerlesen: string;

  @Column({ type: 'double' })
  OkulBirincisiYerlestirmeEnKucukPuan: number;

  @Column({ type: 'double' })
  OkulBirincisiYerlestirmeEnBuyukPuan: number;

  @Column({ type: 'varchar', length: 512 })
  DepremzedeYerlestirmeKontenjan: string;

  @Column({ type: 'varchar', length: 512 })
  DepremzedeYerlestirmeYerlesen: string;

  @Column({ type: 'double' })
  DepremzedeYerlestirmeEnKucukPuan: number;

  @Column({ type: 'double' })
  DepremzedeYerlestirmeEnBuyukPuan: number;

  @Column({ type: 'int', name: '_34YasUstuKadinYerlestirmeKontenjan' })
  _34YasUstuKadinYerlestirmeKontenjan: number;

  @Column({ type: 'varchar', length: 512 })
  _34YasUstuKadinYerlestirmeYerlesen: string;

  @Column({ type: 'double' })
  _34YasUstuKadinYerlestirmeEnKucukPuan: number;

  @Column({ type: 'double' })
  _34YasUstuKadinYerlestirmeEnBuyukPuan: number;

  @Column({ type: 'varchar', length: 512 })
  Aktif: string;

  @Column({ type: 'int' })
  Yil: number;

}