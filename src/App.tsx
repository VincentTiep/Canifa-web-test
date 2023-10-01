import { Route, Routes } from "react-router-dom";
import "./App.css";
import { privateRouter } from "./routes";
import BlankLayout from "./layout/Blank";

function App() {
  return (
    <div>
      <Routes>
        {privateRouter.map((route, index) => {
          let Layout = BlankLayout;

          if (route?.layout) {
            Layout = route.layout;
          }
          const Component = route.element;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
