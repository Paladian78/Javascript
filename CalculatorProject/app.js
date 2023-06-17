window.onload = () => {
    const buttons = document.querySelectorAll('.number');
    const screen = document.querySelector('.screen');
    const equals = document.querySelector('#equal');
    const clear = document.querySelector('#clear');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if(screen.value == "Enter Value"){
                screen.value = ""
            }
            screen.value += e.target.innerHTML;
        })
    })

    equals.addEventListener('click', (e) => {
        if(!screen.value){
            screen.value = "Enter Value";
        }
        else {
            screen.value = eval(screen.value);
        }
    })

    clear.addEventListener('click', (e) => {
        screen.value = ""
    })
}