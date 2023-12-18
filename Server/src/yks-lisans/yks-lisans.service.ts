import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { YksLisansEntity } from "./entity/yks-lisans.entity";
import { Repository } from "typeorm";

@Injectable()
export class YksLisansService {
  constructor(
    @InjectRepository(YksLisansEntity)
    private yksLisansRepository: Repository<YksLisansEntity>
  ) {}

  // async showAllUniversities(){
  //     return await this.yksLisansRepository.find({
  //         take: 100,
  //     });
  // }

  async filterUsers(
    filters: Record<string, any>,
    page = 1,
    limit = 10, 
    sortByField: string = 'UniversiteAdi', 
    sortOrder: 'ASC' | 'DESC' = 'ASC'
  ): Promise<{ universities: YksLisansEntity[]; total: number }> {
    const query = this.yksLisansRepository.createQueryBuilder("yks");

    if (filters.ProgramKodu) {
      query.andWhere("yks.ProgramKodu LIKE :ProgramKodu", { ProgramKodu: `%${filters.ProgramKodu}%` });
    }

    if (filters.UniversiteAdi) {
      query.andWhere("yks.UniversiteAdi LIKE :UniversiteAdi", { UniversiteAdi: `%${filters.UniversiteAdi}%` });
    }

    if (filters.ProgramAdi) {
      query.andWhere("yks.ProgramAdi LIKE :ProgramAdi", { ProgramAdi: `%${filters.ProgramAdi}%` });
    }

    if (filters.Sehir) {
      query.andWhere("yks.Sehir LIKE :Sehir", { Sehir: `%${filters.Sehir}%` });
    }

    if (filters.Sehir) {
      query.andWhere("yks.Sehir LIKE :Sehir", { Sehir: `%${filters.Sehir}%` });
    }

    if (filters.Sehir) {
      query.andWhere("yks.Sehir LIKE :Sehir", { Sehir: `%${filters.Sehir}%` });
    }

    if (filters.Sehir) {
      query.andWhere("yks.Sehir LIKE :Sehir", { Sehir: `%${filters.Sehir}%` });
    }

    if (filters.Sehir) {
      query.andWhere("yks.Sehir LIKE :Sehir", { Sehir: `%${filters.Sehir}%` });
    }

    if (filters.email) {
      query.andWhere("yks.email LIKE :email", { email: `%${filters.email}%` });
    }

    // Diğer filtreler için de benzer şekilde devam edilebilir.

    const total = await query.getCount(); // Toplam kayıt sayısını alır

    const universities = await query
      .take(limit) // Her sayfada gösterilecek kullanıcı sayısı
      .skip((page - 1) * limit) // Atlanacak kayıt sayısı
      .orderBy(`yks.${sortByField}`, sortOrder)
      .getMany();

    return { universities, total };
  }
}
