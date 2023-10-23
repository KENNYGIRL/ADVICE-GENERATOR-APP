const adviceNo = document.querySelector('.adviceno');
const adviceText = document.querySelector('.advicetext');
const adviceButton = document.querySelector('#advicebutton');
const errorDisplay = document.querySelector('.error');



const adviceUrl = 'https://api.adviceslip.com/advice';



async function adviceGenerator () {
    try {
        let request = await fetch(adviceUrl);
        let response = await request.json();
        adviceNo.innerText = response.slip.id;
        adviceText.innerText = response.slip.advice;
    } catch (error) {
        errorDisplay.style.display = 'block';
        clearError();
    }
}

adviceGenerator();

function clearError() {
    setTimeout(() => {
        errorDisplay.style.display = 'none';
    }, 2000);
}

adviceButton.addEventListener('click', () => {
    adviceGenerator();
});


