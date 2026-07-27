let stock = {
    NOVA: {
        price: 100,
        symbol: "NOVA",
        company: "Nova Technologies",
        history: [100],
        movement: 2
    },
    APEX: {
        price: 75,
        symbol: "APEX",
        company: "Apex Industries",
        history: [75],
        movement: -1
    },
    ZENX: {
        price: 220,
        symbol: "ZENX",
        company: "ZenX Pharmaceuticals",
        history: [220],
        movement: 3
    },
    ORBX: {
        price: 48,
        symbol: "ORBX",
        company: "Orbit Logistics",
        history: [48],
        movement: 1
    },
    BLZE: {
        price: 150,
        symbol: "BLZE",
        company: "Blaze Energy",
        history: [150],
        movement: -2
    },
    AQUA: {
        price: 92,
        symbol: "AQUA",
        company: "Aqua Dynamics",
        history: [92],
        movement: 2
    }
};

const MAX = 100;

function setNewValue(symbol)
{
    const max = stock[symbol].movement;
    const min = -1 * stock[symbol].movement;
    
    const change = parseFloat((Math.random() * (max - min) + min).toFixed(2));
    let priceChange = (change / 100) * stock[symbol].price;

    stock[symbol].price += priceChange;

    //console.log(change);
    

    stock[symbol].price = Number(stock[symbol].price.toFixed(2));

    if(stock[symbol].price < 1){
        stock[symbol].price = 1;
    }

    stock[symbol].history.push(stock[symbol].price);
    //console.log(stock[symbol].history);

    if(stock[symbol].history.length === MAX+1){
        stock[symbol].history.splice(0, 1);
    }
}


setInterval(() => {
    for(const eachSymbol in stock)
    {
        setNewValue(eachSymbol);
    }
}, 1000);

export default stock;