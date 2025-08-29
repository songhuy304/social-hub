/* eslint-disable @typescript-eslint/no-explicit-any */

export interface PageableRequest {
  page: number;
  size: number;
  filter?: string;
}

export class PageableResponse<T> {
  private readonly data: T[];
  private readonly totalItems: number;

  constructor(response: any, meta: any) {
    this.data = response;
    this.totalItems = Number(meta.response.headers.get('x-total-count'));
  }

  getData(): T[] {
    return this.data ?? [];
  }

  getTotalItems(): number {
    return this.totalItems ?? 0;
  }
}

export interface Pagination {
  page: number;
  size: number;
}
