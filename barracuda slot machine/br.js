let dep,bet,balance;
let imgarr = ['./zolo.png','./ilyas.png','./paltor.png','./krasavchick.png','./lider.png','./hannsuck.png'];
const rb = document.querySelector('.redbutton');
const rychag = document.querySelector('.rychag');
let first = document.querySelector('#first');
let second = document.querySelector('#second');
let third = document.querySelector('#third');
let alertt = document.querySelector('.alert');

//spin
rychag.addEventListener('click', () => {
        // 
        rychag.style.cssText = 'transform: translateY(300px);';
        rb.style.cssText = 'top: 270px;';
        setTimeout(() => {
            rychag.style.cssText = 'transform: translateY(0px);';  
            rb.style.cssText = 'top: -20px; left:-10px;';
        },200);
       

        //
        document.querySelector('.winningz').value = '';
        bet = Number(document.querySelector('.bet').value);

        first.src = imgarr[Math.floor(Math.random() * imgarr.length)];
        second.src = imgarr[Math.floor(Math.random() * imgarr.length)];
        third.src = imgarr[Math.floor(Math.random() * imgarr.length)];
        
        if(first.src == second.src && second.src == third.src) {
            if(document.querySelector('.balance').value < bet) {
                alertt.innerHTML = 'Уменьшите ставку!';
                document.querySelector('.bet').value = '';  
            }
            else {
            let winningz = bet * 10;
            document.querySelector('.winningz').value = winningz;
            document.querySelector('.balance').value = Number(document.querySelector('.balance').value) + winningz;
            alertt.innerHTML = 'Вы победили!';
            }
        }
        else if(first.src == second.src && second.src != third.src) {
            if(document.querySelector('.balance').value < bet) {
                alertt.innerHTML = 'Уменьшите ставку!';
                document.querySelector('.bet').value = '';  
            }
         else {  
            let winningz = bet * 2;
            document.querySelector('.winningz').value = winningz;
            document.querySelector('.balance').value = Number(document.querySelector('.balance').value) + winningz;
            alertt.innerHTML = 'Два символа подряд! Х2!';
         }
        }
        else if(first.src == third.src && second.src != third.src && second.src != first.src) {
            if(document.querySelector('.balance').value < bet) {
                alertt.innerHTML = 'Уменьшите ставку!';
                document.querySelector('.bet').value = '';  
            }
            else {
            let winningz = bet * 3;
            document.querySelector('.winningz').value = winningz;
            document.querySelector('.balance').value = Number(document.querySelector('.balance').value) + winningz;
            alertt.innerHTML = '"Тиски"! Х3!';
            }
        }
        else {
            alertt.innerHTML = 'Постарайтесь еще!';
        }
        
        if(document.querySelector('.bet').value == '') {
            alertt.innerHTML = 'Поставьте ставку!';
        }

        //
        if(document.querySelector('.balance').value < bet) {
                 alertt.innerHTML = 'Уменьшите ставку!';
                 document.querySelector('.bet').value = ''; 
             }
        else {
            document.querySelector('.balance').value -= bet;
        }
        
        if(document.querySelector('.balance').value == 0) {
            document.querySelector('.alert').innerHTML = 'Вы банкрот!';
            document.querySelector('.bet').value = ''; 
        }
      
        
        //
        if(document.querySelector('.dep').value == '') {
            alertt.innerHTML = 'Внесите депозит!';
        }
})

//dep
function deposit (elem) {
     if(isNaN(elem.value)) {
        document.querySelector('.dep').value = ''; 
     }
     else if(Number(elem.value) > 1000) 
        document.querySelector('.depspan').innerHTML = 'Вы слишком нищий,у вас нету столько денег! Макс. сумма = 1000$ ';
}
document.querySelector('.confirm').addEventListener('click', () => {
    dep = Number(document.querySelector('.dep').value);
    document.querySelector('.depspan').innerHTML = `Ваш депозит: ${dep} $`;
    document.querySelector('.balance').value = dep;
})

//bet
function makebet (elem) {
    if(isNaN(elem.value)) {
        document.querySelector('.bet').value = ''; 
     }
}

//cashout
document.querySelector('.cashout').addEventListener('click', () => {
    document.querySelector('.dep').value = '';
    alert(`Выведено ${document.querySelector('.balance').value} $`)
})





