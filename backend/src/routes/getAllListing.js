import { fakeListings } from "./fake-data";
export const getAllListRoute = {
  method: "GET",
  path: "/api/listings",
  handler: (req, h) => {
    return fakeListings;
  },
};
