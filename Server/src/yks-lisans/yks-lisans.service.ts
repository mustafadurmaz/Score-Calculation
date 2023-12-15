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
    limit = 10
  ): Promise<{ universities: YksLisansEntity[]; total: number }> {
    const query = this.yksLisansRepository.createQueryBuilder("yks");

    if (filters.Sehir) {
      query.andWhere("user.Sehir LIKE :Sehir", { Sehir: `%${filters.Sehir}%` });
    }

    if (filters.email) {
      query.andWhere("user.email LIKE :email", { email: `%${filters.email}%` });
    }

    // Diğer filtreler için de benzer şekilde devam edilebilir.

    const total = await query.getCount(); // Toplam kayıt sayısını alır

    const universities = await query
      .take(limit) // Her sayfada gösterilecek kullanıcı sayısı
      .skip((page - 1) * limit) // Atlanacak kayıt sayısı
      .getMany();

    return { universities, total };
  }
}
