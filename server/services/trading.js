import stock from "../market/market.js";
import user from "../user/user.js"
/*
let stock = {
    NOVA: {
        price : 100,
        symbol : "NOVA",
        company : "Nova Technologies",
        history : [100],
        movement : 2
    }
};
*/

/*
let user = {
cash: 10000,
portfolio: {
    NOVA:{
        qnty:
        price:
        totalInvested:
    }
}
};
*/



//--------------------------------------------------------
function buyStock(requestedStock)
{
    let output = {
        success: false,
        message: ""
    }

    const symbol = requestedStock.stock;
    const selectedStock = stock[symbol];

    if(!selectedStock){
        output.message = "Incorrect Symbol Was Entered";
        return JSON.stringify(output);
    }
    const totalPrice = requestedStock.quantity * selectedStock.price

    if(user.cash = totalPrice){
        output.message = "Not Enough Cash";
        return JSON.stringify(output);
    }

    return GetStock(symbol, totalPrice, requestedStock.quantity);

}
function GetStock(symbolStock, priceStock, qntyStock)
{
    let output = {
        success: false,
        
        message: ""
    }

    console.log("All conditions meet");
    //calculate cost
    //sub cash
    user.cash = user.cash - priceStock;

    //reduce market qnty NOT INCLUDING

    //update portfolio
    let isPresent = false;

    //it already exitst?
    if(user.portfolio[symbolStock]){
        user.portfolio[symbolStock].totalInvested += priceStock;
        user.portfolio[symbolStock].qnty += qntyStock;

    }else{
        user.portfolio[symbolStock] = {
            qnty: qntyStock,
            totalInvested: priceStock
        };
    }

    //it does not exist


    //return success
    output.success = true;
    output.message = 'Successfully Transaction was Complete'

    user.transaction.push({
        type:"Buy",
        symbol: symbolStock,
        quantity: qntyStock,
        price: stock[symbolStock].price,
        total: stock[symbolStock].price * qntyStock,
        timestamp: Date.now()

    });


    console.log(output);
    console.log(user);


    return output;
}
//--------------------------------------------------------
function sellStock(requestedStock)
{
    let output = {
        success: false,
        message: ""
    }

    let symbol = requestedStock.stock;
    let selectedStock = stock[symbol];

    //select stock
    if(!selectedStock){
        output.message = "Incorrect Symbol Was Entered";
        return output;
    }

    //ensure that user owns that stock
    if(!Object.hasOwn(user.portfolio, symbol))
    {
        output.message = "User Does not own This Stock"
        return output;
    }

    //ensure that user has enough qnty of that stock
    if(requestedStock.quantity = user.portfolio[symbol].qnty){
        output.message = "Not Enough of The Given Stock Items"
        return output;
    }

    //take input of STOCK and QNTY
    return removeStock(symbol, requestedStock.quantity);
}
function removeStock(symbolStock, qntyStock)
{

    let output = {
        success: false,
        message: ""
    }

    //remove that many stocks from user's portfolio
    if(qntyStock < user.portfolio[symbolStock].qnty){
        user.portfolio[symbolStock].qnty -= qntyStock;
        user.portfolio[symbolStock].totalInvested -= stock[symbolStock].price * qntyStock;
    }
    else if(qntyStock === user.portfolio[symbolStock].qnty){
        user.portfolio[symbolStock].qnty = 0;
        user.portfolio[symbolStock].totalInvested -= stock[symbolStock].price * qntyStock;
        delete user.portfolio[symbolStock];
    }
    else{
        output.success = false;
        output.message = 'No Stocks Present In Portfolio'
        console.log(output);
        console.log(user);
        return output;
    }

    //add amount to users
    user.cash += stock[symbolStock].price * qntyStock;

    output.success = true;
    output.message = 'Successfully Transaction was Complete'

    user.transaction.push({
        type:"Sell",
        symbol: symbolStock,
        quantity: qntyStock,
        price: stock[symbolStock].price,
        total: stock[symbolStock].price * qntyStock,
        timestamp: Date.now()

    });

    console.log(output);
    console.log(user);
    return output;
}


export {buyStock, sellStock};
