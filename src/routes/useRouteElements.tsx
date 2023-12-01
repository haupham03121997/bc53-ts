import { lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { PATH } from "../constants/path";
import MovieLayout from "../layouts/MovieLayout";
import AuthenticationLayout from "../layouts/AuthenticationLayout";

const HomePage = lazy(() => import("../modules/Home"));
const SignInPage = lazy(() => import("../modules/Auth/SignIn"));
const SignUPPage = lazy(() => import("../modules/Auth/SignUp"));
const NotFoundPage = lazy(() => import("../modules/NotFound"));

const RejectedRouter = () => {
  const isAuthenticated = false;
  // if (isAuthenticated) {
  //   return <Navigate to={PATH.HOME} />;
  // }
  // return <Outlet />;
  return !isAuthenticated ? <Outlet /> : <Navigate to={PATH.HOME} />;
  // Nếu user chưa login  thì cho user ở lại trang đó , ngược lại đá ra trang home
};

const ProtectedRouter = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.SIGN_IN} />;
  // Nếu user login rồi thì cho user ở lại trang đó, ngược lại thì đá về trang Signin
};

// const ProtectedAdminRouter = ()=>{
//   const isAuthenticated = true;
//   const isAdmin = curentUser.maLoaiKhachHanh === "QuanTri"
//  return isAuthenticated && isAdmin ? <Outlet/> : <Navigate to={PATH.HOME} />
// }

const useRouteElements = () => {
  let element = useRoutes([
    {
      path: "",
      element: <RejectedRouter />,
      children: [
        {
          path: "",
          element: <AuthenticationLayout />,
          children: [
            {
              path: PATH.SIGN_IN,
              element: <SignInPage />,
            },
            {
              path: PATH.SIGN_UP,
              element: <SignUPPage />,
            },
            // Trang quên mật khẩu, Trang Confirm Email
          ],
        },
      ],
    },
    {
      path: "",
      element: <ProtectedRouter />,
      children: [
        {
          path: "/booking",
          element: <div>Booking page</div>,
        },
        // Trang thanh toán, Trang profile, Trang đổi mật khẩu
      ],
    },
    {
      path: PATH.HOME,
      element: <MovieLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ]);
  return element;
};

export default useRouteElements;
