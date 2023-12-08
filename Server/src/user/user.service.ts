import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  activeUsers() {
    return [
      { id: 1, name: 'John' },
      { id: 2, name: 'Mustafa' },
    ];
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create();
    newUser.id = uuidv4();
    newUser.email = createUserDto.email;
    newUser.name = createUserDto.name;
    return await this.userRepository.save(newUser);
  }
}
