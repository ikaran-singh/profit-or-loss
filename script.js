const inputData = document.querySelectorAll(".input-data");
const calculateBtn = document.querySelector("#calculate-btn");
const outputEle = document.querySelector("#output");

function calculateProfitOrLoss() {

    const totalBuyingPrice = Number(inputData[0].value) * Number(inputData[1].value);
    const totalCurrentPrice = Number(inputData[2].value) * Number(inputData[1].value);

    let res = 0;
    let percentage = 0;
    let message = '';
    let color = '';

    if (totalBuyingPrice > totalCurrentPrice) {
        res = totalBuyingPrice - totalCurrentPrice;
        percentage = (res / totalBuyingPrice) * 100;
        message = `Oops! You had a loss of ₹${res} and loss percentage is ${percentage}%`;
        color = 'red';
    } else if (totalBuyingPrice < totalCurrentPrice) {
        res = totalCurrentPrice - totalBuyingPrice;
        percentage = (res / totalBuyingPrice) * 100;
        message = `Yay! You made a profit of ₹${res} and profit percentage is ${percentage}%`;
        color = 'green';

    } else {
        message = "No pain No Gain, No Gain No Pain";
        color = 'blue';
    }

    outputEle.innerText = message;
    outputEle.style.color = color;

}

calculateBtn.addEventListener('click', calculateProfitOrLoss);