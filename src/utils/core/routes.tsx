import { Guests } from "../../pages/Guests";

export interface AppRoute {
  path: string;
  component: React.ComponentType;
  isRestricted: boolean;
}

export const paths = {
  GUESTS: "/",
};

export const routes: AppRoute[] = [
  {
    path: paths.GUESTS,
    component: Guests,
    isRestricted: false,
  },
];
