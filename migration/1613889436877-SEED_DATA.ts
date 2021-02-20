import { Question } from 'src/questions/entities/question.entity';
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

export class SEEDDATA1613889436877 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const questionRepository = getRepository(Question);

        for (let x = 0; x < 200; x++) {
            const question = questionRepository.create({
                title: `Question ${x}`,
                content: `Question Content ${x}`,
                comments: Math.floor(Math.random() * Math.floor(200)),
                liked: x % 2 == 0,
                disliked: x % 2 != 0,
                starred: x % 5 == 0
            });

            await questionRepository.save(question);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
