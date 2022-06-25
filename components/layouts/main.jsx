import Navbar from "../Navbar";
import Footer from "../Footer";

const Main = ({ children, router }) => {
  return (
    <>
      <Navbar path={router.asPath} />
      {children}
      <Footer />
    </>
  );
};

export default Main;
