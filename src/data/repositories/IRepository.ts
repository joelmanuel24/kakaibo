export interface IRepository<T> {
  getAll(): Promise<Array<T>>;
  create(obj: T): Promise<T>;
}
