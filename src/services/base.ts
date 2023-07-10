export class BaseService {
  PUBLIC_API_URL = import.meta.env.PUBLIC_WP_API;

  fetch = fetch;

  get = (url: string): Promise<Response> => this.fetch(url);

  post = (url: string, body: RequestInit['body']): Promise<Response> => this.fetch(url, { method: 'POST', body });

  put = (url: string, body: RequestInit['body']): Promise<Response> => this.fetch(url, { method: 'PUT', body });

  delete = (url: string): Promise<Response> => this.fetch(url, { method: 'DELETE' });

  patch = (url: string, body: RequestInit['body']): Promise<Response> => this.fetch(url, { method: 'PATCH', body });

  head = (url: string): Promise<Response> => this.fetch(url, { method: 'HEAD' });
}
