const specialRoutes = ["/", "/log-in", "/sign-up", "/test", "/password-reset"];

export const checkRoute = (route: string) =>
  specialRoutes.find((item) => item === route);
