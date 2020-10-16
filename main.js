(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    //retrieive data from numbers that are clicked
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    equal.addEventListener('click', function(e){
        if(screen.value ===''){
            screen.value = 'Please enter a value'
        }else{
            let answer = eval(screen.value);
            screen.value = answer
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = '';
    })

    document.addEventListener('DOMContentLoaded',() =>{
        const themeStylesheet = document.getElementById('theme');
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            if(themeStylesheet.href.includes('light')){
                themeStylesheet.href = 'dark-style.css';
                themeToggle.innerText = 'Switch to light mode'
            }else{
                themeStylesheet.href = 'light-style.css';
                themeToggle.innerText = 'Switch to daylight mode'
            }
            localStorage.setItem('theme', themeStylesheet.href)
        })
    })
   
})()