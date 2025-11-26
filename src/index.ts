import * as utils from "./utils";

(async () => {
    const words = await utils.fetchRandomWords(5);
    console.log(words);
})();