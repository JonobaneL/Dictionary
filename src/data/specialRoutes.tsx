const specialRoutes = ["/", "/log-in", "/sign-up", "/test"];

export const checkRoute = (route: string) =>
  specialRoutes.find((item) => item === route);
