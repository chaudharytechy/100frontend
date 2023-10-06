import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import PropertyView from "../Pages/PropertyView";
import Properties from "../Pages/Properties";
import Profile from "../Components/ProfileSec_Components/Profile";
import LoginMain from "../Components/Actual_Components/LoginMain";
import SingleBlog from "../Components/Blog_Components/SingleBlog";
import VerificationForm from "../Components/Forms.js/SignUpForm/VerificationForm";
import SignUpForm from "../Components/Forms.js/SignUpForm/SignUpForm";
import AboutPage from "../Components/AboutPageComponents/AboutPage";
import PropertyKnow from "../Components/KnowAbouts/PropertyKnow";
import ProfilePage from "../Components/ProfilePage";
import PageNotFound from "../Pages/PageNotFound";
import BlogMain from "../Components/Blog_Components/BlogMain";

export const ROOT ="/";
export const LOGIN ="/login";
export const REGISTER ="/register";
export const PAGE_NOT_FOUND ="/404";
export const ABOUT="/about";
export const PROPERTIES="/properties";
export const PROPERTYVIEW="/:name";
export const BLOG="/blog";
export const FORM="/form";
export const ROUGH="/rough";
export const BLOGVIEW="/blog/:name"
export const KNOWABOUT="/knowabouts"
export const PROTECTED="/protected";
export const PROFILE="/protected/profile/:id";
export const POST="/protected/sell/:id";

export const router = createBrowserRouter([
    { path: ROOT, element:<Home />},
    { path: LOGIN, element:<LoginMain />},
    { path: REGISTER, element:<SignUpForm />},
    { path: PAGE_NOT_FOUND, element:<PageNotFound />},
    { path: ABOUT, element:<AboutPage />},
    { path: PROPERTYVIEW, element:<PropertyView />},
    { path: PROPERTIES, element:<Properties />},
    { path: BLOG, element:<BlogMain />},
    { path: BLOGVIEW, element:<SingleBlog />},
    { path: FORM, element:<VerificationForm />},
    { path: KNOWABOUT, element:<PropertyKnow />},
    { path: ROUGH, element:<ProfilePage />},
    { 
        path: PROTECTED,
        children:[
            {
                path :PROFILE ,
                element :<Profile />,
            },
        ],
    },
]);
