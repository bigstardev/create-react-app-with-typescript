import React, {FC, ReactNode} from 'react';
import TopNavBar from 'container/TopNavBar';
interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({children}) => {
  return (
    <div className="Layout">
      <div className="Layout__top">
        <TopNavBar />
      </div>
      {children}
    </div>
  );
};
export default Layout;
