export type slideJsonType = Array<{
  type: Array<string>;
  value: Array<{
    type: Array<string>;
    value: string;
    [key: string] : any;
  }>;
  [key: string]: any;
}>;

export type simpleElement = {
  type: string[];
  value: string | any;
  [key: string]: any;
};
