export class PageCache<T> {
  cache = new Map<number, T>();

  constructor() {}

  getPage(index: number) {
    if (this.cache.has(index)) {
      return this.cache.get(index);
    } else {
      return null;
    }
  }

  setPage(index: number, pageData: T) {
    this.cache.set(index, pageData);
  }

  clear() {
    this.cache.clear();
  }
}

// export interface IPageCacheItem {
//   pageIndex: number,
//   pageData: any,
// }
