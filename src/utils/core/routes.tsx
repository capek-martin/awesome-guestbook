import { Visitors } from "../../pages/Visitors/Visitors";

export interface AppRoute {
  path: string;
  component: React.ComponentType;
  isRestricted: boolean;
}

export const paths = {
  VISITORS: "/awesome-guestbook",
};

export const routes: AppRoute[] = [
  {
    path: paths.VISITORS,
    component: Visitors,
    isRestricted: false,
  },
];
