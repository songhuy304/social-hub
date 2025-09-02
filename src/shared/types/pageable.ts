export interface PageableRequest {
  limit: number;
  skip: number;
  filter?: string;
  q?: string;
  [key: string]: any;
}

export class PageableResponse<T> {
  private readonly data: T[];
  private readonly totalItems: number;
  private readonly page: number;
  private readonly size: number;

  constructor(response: any, key: string) {
    this.data = response[key] ?? [];
    this.totalItems = response.total ?? 0;
    this.page = response.page ?? 1;
    this.size = response.size ?? 10;
  }

  getData(): T[] {
    return this.data ?? [];
  }

  getTotalItems(): number {
    return this.totalItems ?? 0;
  }

  getPage(): number {
    return this.page;
  }

  getSize(): number {
    return this.size;
  }

  getCurrentPage(): number {
    return this.page;
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.size);
  }
}

export interface Pagination {
  limit: number;
  skip: number;
}
