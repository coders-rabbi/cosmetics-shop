//use locat storage to manage cart data
// const addToDb = (id) => {
//     const quantity = localStorage.getItem(id);
//     if (quantity) {
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(id, newQuantity);
//     }
//     else {
//         localStorage.setItem(id, 1);
//     }
// }


const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    else{

    }

    //add quantity 
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
export { addToDb }