import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateBookDto) {
    return this.prisma.book.create({
      data: dto,
    });
  }

  async findAll(filter: FilterBookDto) {
    const {
      author,
      category,
      rating,
      search,
      sortBy,
      sortOrder,
      page = 1,
      limit = 10,
    } = filter;

    const where: any = {};
    if (author) where.author = { contains: author, mode: 'insensitive' };
    if (category) where.category = { contains: category, mode: 'insensitive' };
    if (rating) where.rating = { gte: +rating };
    if (search) where.title = { contains: search, mode: 'insensitive' };

    const orderBy: any = {};
    if (sortBy) orderBy[sortBy] = sortOrder ?? 'asc';

    return this.prisma.book.findMany({
      where,
      orderBy: sortBy ? orderBy : undefined,
      skip: (page - 1) * limit,
      take: +limit,
    });
  }

  async findOne(id: string) {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(id: string, dto: UpdateBookDto) {
    return this.prisma.book.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.book.delete({ where: { id } });
  }
}
