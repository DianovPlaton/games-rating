function updateRating(array, id, rating) {
    const index = array.findIndex((item) => item.id === id);
    array[index].rating += rating;
    return array;
  };
module.exports = updateRating;