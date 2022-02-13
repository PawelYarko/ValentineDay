const form = document.querySelector('.form');
const textInput = document.querySelector('.input-text');
const btnSubmit = document.querySelector('.btn-submit');
const questionList = document.querySelector('.list-of-questions');
const label = document.querySelector('.label');
const labelStart = document.querySelector('.label-start');
// const questionLink = document.querySelector('.question-link');

//Links
const questionLink1 = questionList.children[0].firstChild;
const questionLink2 = questionList.children[1].firstChild;
const questionLink3 = questionList.children[2].firstChild;
const questionLink4 = questionList.children[3].firstChild;
const questionLink5 = questionList.children[4].firstChild;


const q3Img = document.querySelector('.q3-img-class');
const btnClose = document.querySelector('.btn-close');
const svgLove = document.querySelector('.love-svg');
const counter = document.querySelector('.counter');
const textQ5 = document.querySelector('.text-q5');
const finalQ = document.querySelector('.final-q');

let counterOfClick = 0;

btnClose.addEventListener('click' , onBtnCloseClick);
svgLove.addEventListener('click', onHeartClick);
form.addEventListener('submit', onFormSubmit);



function onFormSubmit(e){
    e.preventDefault();
    if(textInput.value.toLowerCase() === 'любовь' || textInput.value.toLowerCase() === 'love'){         //1
        window.alert('Все правильно, скорее кликай на "Первое задание"')
        questionList.children[0].classList.remove("unvisible");
        label.classList.add("unvisible");
        labelStart.classList.add("unvisible");
        textInput.value = "";
    }else if(textInput.value.toLowerCase() === 'teatralna' || textInput.value.toLowerCase() === 'театральна'){                                                 
        window.alert('Все правильно, скорее кликай на "Второе задание"')                    //2  
        questionList.children[1].classList.remove("unvisible");
        questionFirst.classList.add("unvisible");
        textInput.value = "";
    }else if(textInput.value.toLowerCase() === 'аленка' || textInput.value.toLowerCase() === 'милка' ||textInput.value.toLowerCase() === 'милениум'){                                            
        window.alert('Все правильно, скорее кликай на "Третье задание"')                  //3
        questionList.children[2].classList.remove("unvisible");
        questionSecond.classList.add("unvisible");
        textInput.value = "";
    }else if(textInput.value === '2020'){                                              //4
        document.querySelector('.q-n-3-text').textContent = 'Правильно';
        btnClose.classList.toggle("unvisible");
        q3Img.attributes.src.value = "./img/q3(2)-img.jpg";
        textInput.value = "";
    }else if(textInput.value === '117' || textInput.value === '120' || textInput.value.toLowerCase() === 'расстояние только в голове' || textInput.value.toLowerCase() === 'нет никакого расстояния' || textInput.value.toLowerCase() === 'минимальное'){                                              //5
        window.alert('Все правильно, скорее кликай на "Пятое задание"')
        questionList.children[4].classList.remove("unvisible");
        questionFourth.classList.add("unvisible");
        textInput.value = "";
    }else
    window.alert('Не правильно, попробуй еще раз');
    textInput.value = "";
}

// HEART

function onHeartClick(){
    counterOfClick +=1;
    // counter.textContent = counterOfClick;
    if(counterOfClick === 1){
        textQ5.textContent = 'Поздравляю ';
    }else if(counterOfClick === 3){
        textQ5.textContent += 'тебя ';
    }else if(counterOfClick === 6){
        textQ5.textContent += 'с ';       
    }else if(counterOfClick === 9){
        textQ5.textContent += 'днем ';       
    }else if(counterOfClick === 12){
        textQ5.textContent += 'Святого ';        
    }else if(counterOfClick === 15){
        textQ5.textContent += 'Валентина! ';        
    }else if(counterOfClick === 18){
        textQ5.textContent += 'Хочу ';        
    }else if(counterOfClick === 21){
        textQ5.textContent += 'пожелать ';        
    }else if(counterOfClick === 24){
        textQ5.textContent += 'нам ';        
    }else if(counterOfClick === 27){
        textQ5.textContent += 'безграничной ';        
    }else if(counterOfClick === 30){
        textQ5.textContent += 'и ';        
    }else if(counterOfClick === 33){
        textQ5.textContent += 'крепкой ';        
    }else if(counterOfClick === 36){
        textQ5.textContent += 'любви! ';        
    }else if(counterOfClick === 39){
        textQ5.textContent += 'Я очень ';        
    }else if(counterOfClick === 42){
        textQ5.textContent += 'по тебе соскучился. ';        
    }else if(counterOfClick === 45){
        textQ5.textContent += 'Надеюсь тебе ';        
    }else if(counterOfClick === 48){
        textQ5.textContent += 'понравилось моё ';        
    }else if(counterOfClick === 50){
        textQ5.textContent += 'Поздравление.';        
    }else if(counterOfClick === 55){
        finalQ.textContent = 'Я Люблю Тебя, моя Принцесска!';     
    }
}


//BTN CLOSE
function onBtnCloseClick(){
    questionList.children[3].classList.remove("unvisible");
    questionThird.classList.add("unvisible");    
}


//QUESTION 1 
const questionFirst = document.querySelector('.q-n-1');

questionLink1.addEventListener('click', onQuestionOneClick);

function onQuestionOneClick(e){
    e.preventDefault();
    questionFirst.classList.toggle("unvisible");
}

//QUESTION 2

const questionSecond = document.querySelector('.q-n-2');

questionLink2.addEventListener('click', onQuestionSecondClick);

function onQuestionSecondClick(e){
    e.preventDefault();
    questionSecond.classList.toggle("unvisible");
}

// QUESTION 3

const questionThird = document.querySelector('.q-n-3');

questionLink3.addEventListener('click', onQuestionThirdClick);

function onQuestionThirdClick(e){
    e.preventDefault();
    questionThird.classList.toggle("unvisible");
}

// QUESTION 4

const questionFourth = document.querySelector('.q-n-4');

questionLink4.addEventListener('click', onQuestionFourthClick);

function onQuestionFourthClick(e){
    e.preventDefault();
    questionFourth.classList.toggle("unvisible");
}

// QUESTION 5

const questionFifth = document.querySelector('.q-n-5');

questionLink5.addEventListener('click', onQuestionFifthClick);

function onQuestionFifthClick(e){
    e.preventDefault();
    questionFifth.classList.toggle("unvisible");
}