export interface tabbarDataType {
  id: number;
  name: string;
}

interface Data {
  id: number;
  name: string;
}

interface Body {
  message: string;
  data: Data[];
}

interface _rawValue {
  stauts: number;
  body: Body;
}

interface Data {
  id: number;
  name: string;
}

interface Body {
  message: string;
  data: Data[];
}

interface _value {
  stauts: number;
  body: Body;
}

interface Data {
  __v_isShallow: boolean;
  __v_isRef: boolean;
  _rawValue: _rawValue;
  _value: _value;
}

interface Pending {
  __v_isShallow: boolean;
  __v_isRef: boolean;
  _rawValue: boolean;
  _value: boolean;
}

interface _object {
  sESzx8XqwE?: any;
  dH4q8o00Td?: any;
}

interface Error {
  _object: _object;
  _key: string;
  __v_isRef: boolean;
}

interface Statu {
  __v_isShallow: boolean;
  __v_isRef: boolean;
  _rawValue: string;
  _value: string;
}

export interface tabbarAllDataType {
  data: Data;
  pending: Pending;
  error: Error;
  status: Statu;
}
