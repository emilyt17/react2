const products = [
    { 
        id: 1,
        name: 'Botas Altas - SUSY',
        decription: 'Botas de cuero - Temaporada Otoño Invierno.',
        price: 250,
        image: "../images/Botasaltas.jpg"

    },
];
const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(products);
    },2000)
})
function getProduct (){
    return myPromise;

}

export {
    getProduct,
}