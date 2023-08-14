export interface ServiceLayerResponse<T> {
    code: number,
    result?: T | T[],
    message?: string;
    errorMessage?: unknown,
  }

export interface CustomErrorFormat {
    code: number,
    message: string,
    errorMessage: unknown
}