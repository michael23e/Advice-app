
    let adviceCounter = 1;


function getAdvice() {

    const apiEndpoint = "	https://api.adviceslip.com/advice";

    fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {

        const advice = data.slip.advice;
        console.log(advice)

        document.getElementById('advice-num').textContent = `${adviceCounter}`;
        document.getElementById("advice-container").textContent = advice;
        
        adviceCounter++;

    })
    .catch(error => {
        console.log('Error fetching advice:', error);
        document.getElementById("error-text").textContent = "Sorry, Something went wrong, Pls try again later"
    })
}