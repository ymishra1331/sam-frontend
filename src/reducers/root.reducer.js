import { combineReducers } from "redux";
import BannerReducer from "./banner.reducer.js";
import BrandReducer from "./brand.reducer.js";
import EventReducer from "./event.reducer.js";
import GalleryReducer from "./gallery.reducer.js";
import OfferReducer from "./offer.reducer.js";
import CareerReducer from "./career.reducer.js";
import VacancyReducer from "./vacancy.reducer.js";
import NotificationReducer from "./contact.reducer.js";

const rootReducer = combineReducers({
    banners:BannerReducer,
    brands:BrandReducer,
    events:EventReducer,
    gallery:GalleryReducer,
    offers:OfferReducer,
    careers:CareerReducer,
    vacancy:VacancyReducer,
    contact:NotificationReducer
});

export default rootReducer;