import Header from "./Header";
import News from "./News";
import Footer from "./Footer";
import Contacts from "./Contacts";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <News />
      </main>
      <Contacts />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
