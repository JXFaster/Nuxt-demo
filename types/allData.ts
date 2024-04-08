export interface Data {
  id: number;
  name: string;
}

export interface Body {
  message: string;
  data: Data[];
}

export interface _rawValue {
  stauts: number;
  body: Body;
}

export interface Data {
  id: number;
  name: string;
}

export interface Body {
  message: string;
  data: Data[];
}

export interface _value {
  stauts: number;
  body: Body;
}

export interface Data {
  __v_isShallow: boolean;
  __v_isRef: boolean;
  _rawValue: _rawValue;
  _value: _value;
}

export interface Pending {
  __v_isShallow: boolean;
  __v_isRef: boolean;
  _rawValue: boolean;
  _value: boolean;
}

export interface _object {
  sESzx8XqwE?: any;
  dH4q8o00Td?: any;
}

export interface Error {
  _object: _object;
  _key: string;
  __v_isRef: boolean;
}

export interface Statu {
  __v_isShallow: boolean;
  __v_isRef: boolean;
  _rawValue: string;
  _value: string;
}

export interface RootObject {
  data?: Data;
  pending?: Pending;
  error?: Error;
  status?: Statu;
}
