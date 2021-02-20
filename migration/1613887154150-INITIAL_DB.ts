import { MigrationInterface, QueryRunner } from 'typeorm';

export class INITIALDB1613887154150 implements MigrationInterface {
    name = 'INITIALDB1613887154150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `question` (`id` varchar(36) NOT NULL, `title` varchar(100) NOT NULL, `content` text NOT NULL, `comments` int(4) UNSIGNED NOT NULL DEFAULT '0', `liked` tinyint NOT NULL DEFAULT 0, `disliked` tinyint NOT NULL DEFAULT 0, `starred` tinyint NOT NULL DEFAULT 0, `created_at` datetime NOT NULL DEFAULT now(), `updated_at` datetime NOT NULL DEFAULT now(), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `question`");
    }

}
