function ratingCalculator(weight, obj){
    const rating = obj.gameplay*weight.gameplay+obj.design*weight.design+obj.idea*weight.idea;
    return rating;
}
module.exports = ratingCalculator;