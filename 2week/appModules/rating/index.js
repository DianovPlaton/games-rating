const {PATH_TO_RATING_FILE, WEIGHT} = require("./config");
const makeRatingFile = require("./rating-file");
const ratingCalculator = require("./calculate");
const updateRating = require("./update-rating");
module.exports = {
    PATH_TO_RATING_FILE,
    WEIGHT,
    updateRating,
    ratingCalculator,
    makeRatingFile
}