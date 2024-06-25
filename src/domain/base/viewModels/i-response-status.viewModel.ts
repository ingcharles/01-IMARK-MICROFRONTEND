
export interface IResponseStatusViewModel{
  message: string;
  statusCode: number | null;
  ok: boolean | null;
}

export interface IResponseStatusErrorViewModel{
  message: string ;
  statusCode: number | null;
  ok: boolean | null;
}
