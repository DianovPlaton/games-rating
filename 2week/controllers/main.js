const staticFile = require("../appModules/http-utils/static-file");
const {getData, endpoints} = require("../appModules/api");
const {PATH_TO_RATING_FILE, makeRatingFile} = require("../appModules/rating")
async function mainRouteController(res, publicURL, ext){
    const data = await getData(endpoints.games);
    await makeRatingFile(PATH_TO_RATING_FILE, data)
    res.statusCode = 200;
    staticFile(res, publicURL, ext)
};
module.exports = mainRouteController;