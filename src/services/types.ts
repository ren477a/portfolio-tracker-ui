export type APIResult<T = null> = Readonly<{
  data: T | null;
  error: { message: string } | null;
}>;
