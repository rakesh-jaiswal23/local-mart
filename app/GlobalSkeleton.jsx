// components/GlobalSkeleton.js
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function GlobalSkeleton({ children }) {
  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
      {children}
    </SkeletonTheme>
  );
}
