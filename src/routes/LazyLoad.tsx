// components/LazyLoad.js
import { ReactNode, Suspense } from "react";
import SpinnerFullPage from "./SpinnerFullPage";

export default function LazyLoad({ children }:{children:ReactNode}) {
  return <Suspense fallback={<SpinnerFullPage />}>{children}</Suspense>;
}
