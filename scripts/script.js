import SmoothScroll from "./modules/smooth-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import BasicForm from "./modules/form";
import initAnimeNumbers from "./modules/anime-numbers.js";

const smoothScroll = new SmoothScroll("a[href^='#']").init();
AOS.init();
const basicForm = new BasicForm("[data-form]");
initAnimeNumbers();