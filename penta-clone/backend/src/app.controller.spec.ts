import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() body: Partial<Contact>) {
    return this.contactService.create(body);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }
}
