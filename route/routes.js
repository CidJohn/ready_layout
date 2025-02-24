import Home from "../page/Home/Home.js";
import About from "../page/About/About.js";
import Contact from "../page/Contact/Contact.js";

export const routes = {
  "/": (container) => Home(container),
  "/about": (container) => About(container),
  "/contact": (container) => Contact(container),
};
