export interface PageableRequest {
  page: number;
  size: number;
  filter?: string;
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
    this.page = Math.floor((response.skip ?? 0) / (response.limit ?? 1)) + 1;
    this.size = response.limit ?? 10;
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
}

export interface Pagination {
  page: number;
  size: number;
}
