import { Injectable } from '@nestjs/common';

const data = [
  { id: 1, title: 'Post 1', describtion: 'Post 1 Desc' },
  { id: 2, title: 'Post 2', describtion: 'Post 2 Desc' },
  { id: 3, title: 'Post 3', describtion: 'Post 3 Desc' },
  { id: 4, title: 'Post 4', describtion: 'Post 4 Desc' },
];

@Injectable()
export class PostService {
  getAll() {
    return data;
  }
}
