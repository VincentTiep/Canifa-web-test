import HomePage from "../../components/HomePage";
import Footer from "../../components/Footer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BaseLayout = ({ children }: any) => {
  return (
    <div>
      <HomePage />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
