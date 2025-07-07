import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }
}
