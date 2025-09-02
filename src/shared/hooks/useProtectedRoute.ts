import React from "react";
import { useRouter } from "next/navigation";

import { useAppSelector } from "@/shared/reducers/store";
import { selectAuthenticatedDetail } from "@/shared/reducers/states/authentication";
import { ROUTERS } from "@/components";

interface WithProtectedRouteOptions {
  redirectTo?: string;
  requireAuth?: boolean;
}

export function withProtectedRoute<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithProtectedRouteOptions = {}
) {
  const { redirectTo = ROUTERS.AUTH.LOGIN, requireAuth = true } = options;

  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const isAuthenticated = useAppSelector(selectAuthenticatedDetail);

    React.useEffect(() => {
      if (requireAuth && !isAuthenticated) {
        router.push(redirectTo);
      } else if (!requireAuth && isAuthenticated) {
        router.push(ROUTERS.APP.HOME);
      }
    }, [isAuthenticated, requireAuth, redirectTo, router]);

    if (requireAuth && !isAuthenticated) return null;
    if (!requireAuth && isAuthenticated) return null;

    return React.createElement(WrappedComponent, props);
  };

  ComponentWithAuth.displayName = `withProtectedRoute(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithAuth;
}
