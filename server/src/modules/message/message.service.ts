import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMessageDto } from '../../shared/dtos';
import { Message } from '../../shared/entities';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private repo: Repository<Message>
  ) {}

  async create(message: CreateMessageDto): Promise<Message> {
    return await this.repo.save(this.repo.create(message))
  }
}
