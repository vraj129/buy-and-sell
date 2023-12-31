import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListings";
import { getAllListRoute } from "./getAllListing";
import { getListingRoute } from "./getListing";
import { getUserListingsRoute } from "./getUserListings";
import { updateListingRoute } from "./updateListings";

export default [
  getAllListRoute,
  getListingRoute,
  addViewToListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
  updateListingRoute,
];
