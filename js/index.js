import { click } from "./click.js";
import { activeLink } from "./efects.js"


document.addEventListener("DOMContentLoaded",  () => {
    activeLink();
})

document.addEventListener("click" , (e) => {
    click(e);
})