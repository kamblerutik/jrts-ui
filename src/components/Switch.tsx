import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const Switch = ({ children }: PropsType) => {
  return <button>{children}</button>;
};

export { Switch };
