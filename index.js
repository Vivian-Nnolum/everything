const rates ={
    USD: 1500,
    GBP:1800,
    GHS:100
};
function convert(){
    const amountInput=document.getElementById('num_put');
    const currencyselect=document.getElementById('currency');
    const outputDiv=document.getElementById('output');
    
    const num_put = parseFloat(amountInput.value);
    const currency=currencyselect.value
    
    if(isNaN(num_put) || num_put <=0 ){
        outputDiv.textContent= 'Please enter a valid amount';
        return;
    }
    else{
        const nairaAmount = num_put * rates[currency];
        outputDiv.textContent= `${nairaAmount.toLocaleString()} NGN`
    }
        
}

document.getElementById('num_put').addEventListener('keyup', function(event){
    if (event.key ==='enter'){
        convert();
    }
})
