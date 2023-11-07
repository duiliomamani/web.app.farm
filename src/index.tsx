import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Dashboard from './pages/root/dashboard/dashboard';
import { AuthProtected } from './pages/shared/auth/auth.protected';
import ErrorPage from './pages/components/error/error.component';
import { ProvideAuth } from './pages/shared/hooks/useAuth.hook';
import Onboarding from './pages/shared/onboarding/onboarding';
import Public from './pages/public/public.component';
import SignIn from './pages/components/auth/sign-in.component';
import ActivateAccount from './pages/components/account/activate.component';

library.add(far, fas, fab);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Public />,
    errorElement: <ErrorPage />
  },
  {
    path: "/auth/sign-in",
    element: <SignIn />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <AuthProtected component={<Dashboard />} roles='Administrator, Customer' />,
    errorElement: <ErrorPage />
  },
  {
    path: "/account/confirm-email/:email",
    element: <ActivateAccount />,
    errorElement: <ErrorPage />
  },
  {
    path: "/onboarding",
    element: <AuthProtected component={<Onboarding />} />,
    errorElement: <ErrorPage />
  }
]);

root.render(
  <React.StrictMode>
    <ProvideAuth>
        <RouterProvider router={router} />
    </ProvideAuth>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
