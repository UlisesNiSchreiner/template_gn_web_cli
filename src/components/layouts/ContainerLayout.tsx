import { ReactNode } from "react";

interface Props {
  backGroundColor: string;
  children: ReactNode;
}

export const ContainerLayout = ({ backGroundColor = '#ffffff', children }: Props) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: backGroundColor,
      }}
      className="container"
    >
      {children}
    </div>
  );
};
