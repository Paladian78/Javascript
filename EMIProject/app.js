window.onload = () =>{
    const calc = document.querySelector('#calculate');
    calc.addEventListener('click', EMICalc);
    // EMICalc();
    const loan = document.getElementById("loan");
    const rate = document.getElementById("rate");
    const time = document.getElementById("time");

    const s1 = document.getElementById("s1");
    const s2 = document.getElementById("s2");
    const s3 = document.getElementById("s3");

    loan.addEventListener('change', EMICalc);
    time.addEventListener('change', EMICalc);
    rate.addEventListener('change', EMICalc);

    function EMICalc(){

        if(!loan.value || loan.value<=0){
            s1.innerText= "Please provide value for loan ammount"
            s2.innerText= "";
            s3.innerText= "";
            return;
        }
        else if(!rate.value || rate.value<=0){
            s1.innerText= "Please provide value for interest rate"
            s2.innerText= "";
            s3.innerText= "";
            return;
        }
        else if(!time.value || time.value<=0){
            s1.innerText= "Please provide value for tenure"
            s2.innerText= "";
            s3.innerText= "";
            return;
        }

        const mi = rate.value/100/12;
        const emi = loan.value * mi *Math.pow(1+mi, time.value)/ (Math.pow(1+mi, time.value)-1);

        const ta = emi * time.value
        const ti = ta - loan.value

        s1.innerText= "EMI : " +emi.toFixed(2);
        s2.innerText= "Total Ammount : " +ta.toFixed(2);
        s3.innerText= "Total Interest : " + ti.toFixed(2);

    }
}