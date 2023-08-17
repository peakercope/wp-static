import { BaseApi } from '@/shared';
import type { PostType } from '../model';

class PostApi extends BaseApi {
  getAll(fields: string[] = []): Promise<PostType[]> {
    return this.get(`${this.PUBLIC_API_URL}/posts${fields.length > 0 ? `?_fields=${fields.join(',')}` : ''}`).then((res) => res.json());
  }

  getById(id: number, embed = false): Promise<PostType> {
    return this.get(`${this.PUBLIC_API_URL}/posts/${id}${embed && '?_embed'}`).then((res) => res.json());
  }
}

export const postApi = new PostApi();
