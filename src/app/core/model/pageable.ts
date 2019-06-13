export class Pageable<T> {
    data: Array<T>;
    page: Page;
    includes: string[];
}

export class Page{
    firstPage: boolean;
    lastPage: boolean;
    pageNumber: number;
    totalOfElements: number;
    pageSize: number;
}