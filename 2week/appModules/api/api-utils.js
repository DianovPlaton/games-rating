async function getData (url){
    try {
        const response = await fetch(url)
        return response.json();
    }catch(error){
        console.log(error)
    }
};
function getRandomGame(array){
    const num = Math.floor(Math.random()*array.length);
    const game = array[num];
    return game;
}
module.exports = {getData, getRandomGame};