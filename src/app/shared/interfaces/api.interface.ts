export interface IApi<T> {
  content: T[] | T
  statusCode: number
  path: string
  method: string
  timestamp: string
}
