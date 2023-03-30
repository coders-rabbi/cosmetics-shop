const getTotalPrice = produts =>{
    // let  parsePrice = parseInt('balance')
    const reducer = (previous, current) => previous + current.balance;
    const total = produts.reduce(reducer, 0);
    return total;

}
export {getTotalPrice};