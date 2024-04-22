import { ReactNode } from "react";

interface Props {
  backGroundColor: string;
  children: ReactNode;
}

export const FullScreenLayout = ({ backGroundColor = '#ffffff', children }: Props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: backGroundColor,
      }}
    >
      {children}
    </div>
  );
};
