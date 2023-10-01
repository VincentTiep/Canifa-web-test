import HomePage from "../../components/HomePage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomePageLayout = ({ children }: any) => {
  return (
    <div>
      <HomePage />
      {children}
    </div>
  );
};

export default HomePageLayout;
