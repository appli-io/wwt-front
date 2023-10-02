export interface IApi<T> {
  content: T[]
  statusCode: number
  path: string
  method: string
  timestamp: string
}
