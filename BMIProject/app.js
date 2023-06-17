window.onload = () => {
    const calculate = document.querySelector('#calculate');

    calculate.addEventListener('click', calculateBMI)

    function calculateBMI(){
        const height = document.querySelector('#height').value;
        const weight = document.querySelector('#weight').value;
        const result = document.querySelector('#result');

        if(!height || height<0 || isNaN(height)){
            result.innerHTML = "Please provide a valid height";
            return;
        }
        else if(!weight || weight<0 || isNaN(weight)){
            result.innerHTML = "Please provide a valid weight";
            return; 
        }

        const bmi = (weight / (height * height) *10000).toFixed(2);
        if(bmi<18.5){
            result.innerHTML = "Under weight : " +bmi;
        }
        else if(bmi>25){
            result.innerHTML = "Over weight : " +bmi;
        }
        else{
            result.innerHTML = "Normal : " +bmi;
        }
    }
}