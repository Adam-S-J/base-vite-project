import Navbar from '../components/Navbar/Navbar';
import { Children } from '../types/Children';

interface Props {
  children: Children;
}

const BaseLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default BaseLayout;
