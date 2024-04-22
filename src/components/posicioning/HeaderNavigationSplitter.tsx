import { ReactNode } from "react";

interface Props {
  header?: ReactNode;
  children: ReactNode;
  navigation?: ReactNode;
}

export const HeaderNavigationSplitter = ({ header, children, navigation }: Props) => {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {header && <div style={{ flex: '0 0 auto' }}>{header}</div>}
      <div style={{ flex: '1 1 auto', overflowY: 'auto' }}>{children}</div>
      {navigation && <div style={{ flex: '0 0 auto' }}>{navigation}</div>}
    </div>
  );
};
