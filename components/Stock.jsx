import React from "react"

export default function Stock({stock}) {
            
        
/* Challenge

    The variables below are currently hardcoded with data. Your task is to convert them to dynamically-generated values by doing the following: 
    
        1. The values of the first four variables — stockName, currentPrice, prevClosingPrice, and 
           logo — should be the corresponding values being passed into the component via the prop called stock. (The numbers for currentPrice and prevClosingPrice should be converted to strings.)  
           
        2. The other four variables — numericalChange, rateChange, arrow, and colorClass — 
           should be determined based on the two price values as follows: 
           
                 Variable		  Value 				  
			╷-------------------╷---------------------------------------------------------------╷
		  	|  numericalChange  | The difference between currentPrice and prevClosingPrice.     |  
			|-------------------|---------------------------------------------------------------|
			|  rateChange       | A number convereted to a string representing the % the price  |
            |                   | has risen or fallen, relative to its prevClosingPrice.        |   
			|-------------------|---------------------------------------------------------------|
			|  colorClass       | "green" if the stock has gained value                         |
            |                   | "red" if the stock has lost value                             |
            |                   | undefined if the stock has maintained value                   |
			|-------------------|---------------------------------------------------------------|
			|  arrow            | "⬆" if the stock has gained value                            |
            |                   | "⬇" if the stock has lost value                              |
            |                   | "▬" if the stock has maintained value                         |	
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯	

        3. numericalChange and rateChange should both be numbers represented to the 
           hundredths decimal place, which should be rounded. For example, 5 -> 5.00, 0 -> 0.00, 52.1 -> 52.10, and 84.119 -> 84.12. See examples.md for more examples.  
           
        4. The variables can set up in a more efficient way than the one below. You may change the 
           way they're set up however you want, as long as the final results rendered onto the screen are the desired ones. Try to make your code as concise and DRY (Don't Repeat Yourself) as possible, while maintaining readability.
           
        Note: Don't overthink the part about the numbers being converted into strings. This will probably happen automatically in the course of solving this challenge, depending on how you approach it. 
*/               
    
   
    
    
    
    const stockName = "STOK"
    
    const logo = "./images/question-solid.svg"

    const currentPrice = "221.32"
    
    const prevClosingPrice = "218.45"
        
    const numericalChange = "2.87"
    
    const rateChange = "1.31"
    
    const colorClass = "green" 
    
    const arrow = "⬆"
    
    const priceChange = (stock.currentPrice - stock.prevClosingPrice).toFixed(2)
    
    // console.log(numericalChange)

    return (
        <div className="stock-container">
                <div className={priceChange === 0 ? '' : priceChange > 0 ? 'green' : 'red'}>
                   <p>{priceChange === 0 ? '▬' : priceChange > 0 ? '⬆' : '⬇'}{priceChange}</p>
                    <p>{((stock.currentPrice - stock.prevClosingPrice) / 100).toFixed(2) + '%'}</p>
                </div>
                <div>
                    <img className="logo" src={stock.logo} />
                </div>
                <div> 
                    <p>{stock.stockName}</p> 
                </div>
                <div>
                    <p>${stock.currentPrice}</p>
                    <p>Current Price</p>
                </div>
                <div>
                    <p>Previous Close: ${stock.prevClosingPrice}</p>
                </div>       
        </div>   
    )
}