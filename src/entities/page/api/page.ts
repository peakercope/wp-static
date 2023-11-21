import { BaseApi } from '@/shared';
import type { PageType } from '../model';

class PageApi extends BaseApi {
  async getHomePage (id: number): Promise<PageType> {
    const res = await this.get(`${this.PUBLIC_API_URL}/pages/${id}`);


    return res.json();
  }
}

export const pageApi = new PageApi();
