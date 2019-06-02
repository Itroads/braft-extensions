declare module "braft-extensions" {
  export interface IOption {
    [key: string]: any;
  }
  export function Table(option: IOption): any;
}