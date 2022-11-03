/*Import Country Name and Country Code*/

import country from "./countries.js";

country.map((items, i) => {
    let show = `Country name is: ${items.code}`
    console.log(show);
});