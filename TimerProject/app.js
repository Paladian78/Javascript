window.onload = () => {
    document.getElementById('start').addEventListener('click', startTimer);
    console.log('loaded');
    
}

function startTimer() {
    const time = document.getElementById('time').value;
    const date = document.getElementById('date').value;

    const endtime = new Date(date + ' ' + time);

    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    const interval = setInterval(() => calculateTime(endtime), 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    })

    reset.addEventListener('click', () => {
        clearInterval(interval);
        document.getElementById('days').innerText = 0;
        document.getElementById('hours').innerText = 0;
        document.getElementById('minutes').innerText = 0;
        document.getElementById('seconds').innerText = 0;
    })
}

function calculateTime(endtime) {
    const now = new Date();

    if(endtime > now) {
        const distance = endtime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }
    else {
        document.getElementById('days').innerText = 0;
        document.getElementById('hours').innerText = 0;
        document.getElementById('minutes').innerText = 0;
        document.getElementById('seconds').innerText = 0;
    }
}

