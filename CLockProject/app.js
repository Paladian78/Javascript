window.onload = () => {
    console.log("Loading on runtime");
    function runClock() {
        const date = new Date();
        // console.log(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        // console.log(hours);
        // console.log(minutes);
        // console.log(seconds);
        hours = hours<10 ? "0"+hours : hours;
        minutes = minutes<10 ? "0"+minutes : minutes;
        seconds = seconds<10 ? "0"+seconds : seconds;

        document.querySelector('#hour').innerText = hours;
        document.querySelector('#min').innerText = minutes;
        document.querySelector('#sec').innerText = seconds;
    
        setTimeout(runClock, 1000);
    }
    
    runClock();
}