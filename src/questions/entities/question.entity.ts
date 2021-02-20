import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  content: string;

  // In real life, should be a relationship with another table; eg: comments
  @Column({ type: 'int', unsigned: true, width: 4, default: 0 })
  comments: number;

  // In real life, should be a relationship with another table; eg: likes
  @Column({ type: 'boolean', default: false, nullable: false })
  liked: boolean;

  // In real life, should be a relationship with another table; eg: dislikes
  @Column({ type: 'boolean', default: false, nullable: false })
  disliked: boolean;

  // In real life, should be a relationship with another table; eg: stars
  @Column({ type: 'boolean', default: false, nullable: false })
  starred: boolean;

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
  updatedAt: Date;
}
