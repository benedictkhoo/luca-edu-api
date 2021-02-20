import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  async create(createQuestionDto: CreateQuestionDto) {
    const repository = getRepository(Question);
    const question = repository.create({
      title: createQuestionDto.title,
      content: createQuestionDto.content
    });

    await repository.save(question);

    return 'Your question is successfluu saved.';
  }

  findAll(start: number): Promise<Question[]> {
    return getRepository(Question).find({
      skip: start,
      take: 20
    });
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    const repository = getRepository(Question);

    if (updateQuestionDto.action === 'like' || updateQuestionDto.action === 'dislike') {
      await repository.save({
        id: id,
        liked: updateQuestionDto.liked,
        disliked: updateQuestionDto.disliked
      });
    } else {
      await repository.save({
        id: id,
        starred: updateQuestionDto.starred
      });
    }

    return 'Question was successfully updated';
  }
}
