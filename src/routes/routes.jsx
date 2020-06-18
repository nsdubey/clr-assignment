import { authRoutes } from "./authRoutes";
import { dashboardRoutes } from "./dashboardRoutes";

export const routes = [...authRoutes, ...dashboardRoutes];