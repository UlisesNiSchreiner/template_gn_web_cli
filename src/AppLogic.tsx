import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppLogic = ({ children }: Props) => {
  return <div>{children}</div>;
};
