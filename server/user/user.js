import stock from "../market/market.js";

let user = {
    cash: 10000,
    portfolio: {
        /*
        NOVA:{
            qnty:
            price:
            totalInvested: 
        }
        */
    },
    transaction: [
    //     {
    //     type: "",
    //     symbol: "",
    //     quantity: 0,
    //     price: ,
    //     total: 500,
    //     timestamp: Date.now()
    // }
    ]
};

function HoldingValue()
{

}

function displayUser()
{
    return user;
}

function UpdateValue(symbol){
    if(!user.portfolio[symbol]) return;
    if(!stock[symbol]) return;
    user.portfolio[symbol].price = stock[symbol].price;
}

setInterval(() => {
    for(const eachSymbol in user.portfolio)
    {
        UpdateValue(eachSymbol);
    }
}, 1000);


export default user;
export {HoldingValue, displayUser};

