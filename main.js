/*Import Country Name and Country Code*/

import country from "./countries.js";

country.map((items, i) => {
    let show = `Country code is: ${items.code}`
    console.log(show);
});
/*Terminal comand -npm start*/