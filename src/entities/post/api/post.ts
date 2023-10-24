import { BaseApi } from '@/shared';
import type { PostType } from '../model';

class PostApi extends BaseApi {
  async getAll(fields: string[] = []): Promise<PostType[]> {
    const res = await this.get(`${this.PUBLIC_API_URL}/posts${fields.length > 0 ? `?_fields=${fields.join(',')}` : ''}`);
    return res.json();
  }

  async getById(id: number, embed = false): Promise<PostType> {
    const res = await this.get(`${this.PUBLIC_API_URL}/posts/${id}${embed && '?_embed'}`);
    return res.json();
  }
}

export const postApi = new PostApi();
