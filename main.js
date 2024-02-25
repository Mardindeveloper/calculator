let mathOperatorsArray = ['+', '/', '*', '.'];
let powFlag = false;
let displayResultElement = document.getElementById('displayResult');
let contentAdvance = document.getElementsByClassName('content-advance');
let buttonOpen = document.getElementById('showBoxButton');
let buttonClose = document.getElementById('closeBoxButton');

function showContent() {
    var computedStyle = window.getComputedStyle(contentAdvance[0]);

    if (computedStyle.display === 'block') {
        contentAdvance[0].style.display = 'none';
        buttonOpen.style.display = 'block';
        buttonClose.style.display = 'none';
    } else {
        contentAdvance[0].style.display = 'block';
        buttonOpen.style.display = 'none';
        buttonClose.style.display = 'block';
    }
    // contentAdvance[0].style.display = (contentAdvance[0].style.display === 'block') ? 'none' : 'block'; 
    // buttonOpen.style.display = (buttonOpen.style.display === 'none') ? 'block' : 'none'; 
    // buttonClose.style.display = (buttonClose.style.display === 'block') ? 'none' : 'block'; 
}

buttonOpen.addEventListener('click', showContent);
buttonClose.addEventListener('click', showContent);

function addToCalculator(value) {
    if (displayResultElement.value === '' && mathOperatorsArray.includes(value)) {
        alert('لطفا اول عددی صحیح بنویسید!')
    } else {
        displayResultElement.value += value;
    }

    if (powFlag === true) {
        let numbers = displayResultElement.value.split('^');
        displayResultElement.value = Math.pow(numbers[0], numbers[1]);
        powFlag = false;
    }
}

function clearResult() {
    displayResultElement.value = '';
}

function finalMath() {
    displayResultElement.value = eval(displayResultElement.value);
}

function mathCalculator(value) {
    let number = displayResultElement.value;
    if (value === 'pow') {
        powFlag = true;
        displayResultElement.value += '^';
    } else if(value === 'powTwo'){
        displayResultElement.value = Math.pow(number, 2);
    }  else if(value === 'powThree'){
        displayResultElement.value = Math.pow(number, 3);
    } else {
        displayResultElement.value = Math[value](number);
    }
}

function calculatePercentage() {
    let expression = displayResultElement.value;
    let result = eval(expression) / 100;
    displayResultElement.value = result;
}

function backSpace() {
    let result = displayResultElement.value.slice(0, -1);
    displayResultElement.value = result;
}
