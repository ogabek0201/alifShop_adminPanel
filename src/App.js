import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import {
  Categories,
  Dashboard,
  Home,
  LogIn,
  Orders,
  Products,
  Users,
} from "./routes/Routes";
import { RequireAuth } from "./utils/RequireAuth";

function App() {
  return (
    <div className="App bg-[#000000]">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="users"
            element={
              <Suspense fallback={<Loader />}>
                <Users />
              </Suspense>
            }
          />
          <Route
            path="categories"
            element={
              <Suspense fallback={<Loader />}>
                <Categories />
              </Suspense>
            }
          />
          <Route
            path="orders"
            element={
              <Suspense fallback={<Loader />}>
                <Orders />
              </Suspense>
            }
          />
          <Route
            path="products"
            element={
              <Suspense fallback={<Loader />}>
                <Products />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
