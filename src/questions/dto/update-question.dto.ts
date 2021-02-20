export class UpdateQuestionDto {
  action: 'like' | 'dislike' | 'star';
  liked?: boolean;
  disliked?: boolean;
  starred?: boolean;
}
