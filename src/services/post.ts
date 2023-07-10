import type { Post } from '@/types/post';
import { BaseService } from './base';

class PostService extends BaseService {
  getAll(fields: string[] = []): Promise<Post[]> {
    return this.get(`${this.PUBLIC_API_URL}/posts${fields.length > 0 ? `?_fields=${fields.join(',')}` : ''}`).then((res) => res.json());
  }

  getById(id: number, embed = false): Promise<Post> {
    return this.get(`${this.PUBLIC_API_URL}/posts/${id}${embed && '?_embed'}`).then((res) => res.json());
  }
}

export const postService = new PostService();
