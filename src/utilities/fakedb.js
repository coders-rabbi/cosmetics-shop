//use locat storage to manage cart data
const addToDb = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        console.log('Already added to cart')
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        console.log('new item added to cart')
        localStorage.setItem(id, 1);
    }
}

export { addToDb }