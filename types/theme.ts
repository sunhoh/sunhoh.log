export interface ColorsType {
  [key: string]: string;
}

export interface MediaType {
  desktop: (...args: string[]) => undefined | string | unknown;
  tablet: (...args: string[]) => undefined | string | unknown;
  mobile: (...args: string[]) => undefined | string | unknown;
}
