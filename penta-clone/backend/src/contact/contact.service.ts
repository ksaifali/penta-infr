import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  create(data: Partial<Contact>) {
    const contact = this.contactRepository.create(data);
    return this.contactRepository.save(contact);
  }

  findAll() {
    return this.contactRepository.find();
  }
}
