import express from 'express';
import stock from './market/market.js'
import user from './user/user.js'
import {buyStock, sellStock} from './services/trading.js'
//import output from './services/trading.js'

const buyFile = 'C:/Users/toayu/Kode/Web/Projects/MarketSimulator/client/buy/buy.html';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('WELCOME TO MY stock APP!');
    
});
app.get('/stock', (req, res) => {
    res.send(stock);
    
});

app.get('/user', (req, res) => {
    res.send(user);
    
});

app.get('/trade', (req, res) => {
    res.sendFile(buyFile);
    //res.send(output);

});
app.post('/trade', (req, res) =>{
    const request = req.body;
    let result;
    if(request.action === "buy")
    {
        result = buyStock(request);
    }else if(request.action === "sell"){
        result = sellStock(request);
    }
    else{
        return res.status(400).json({
            error: "Invalid action"
        });
    }
    
    //console.log(buyRequested);
    res.json(result);
    
});

app.get('/portfolio', (req, res) =>{
    res.send(user.portfolio);
});

app.get('/history', (req, res) =>{
    res.send(user.transaction);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})