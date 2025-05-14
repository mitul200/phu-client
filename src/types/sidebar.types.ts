import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebareItem = {
  key: string;
  label: ReactNode;
  children?: TSidebareItem[];
};

export type TUserPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
};
