const countdown = () => {
    // Get user birthday data
    const userDay = Number(document.querySelector('.btn-day').value);
    const userMonth = Number(document.querySelector('.btn-month').value);
    const userYear = Number(document.querySelector('.btn-year').value);
    
    // Formate the user birthday
    const userBirthday = `${userYear}/${userMonth}/${userDay} 00:00:00`;
    // const formatDate = userBirthday.replaceAll('-','/');
    // console.log(formatDate);

    const countdownDate = new Date(userBirthday).getTime();
    const currentDate = new Date().getTime();
    const diff = countdownDate - currentDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textDay = Math.floor(diff / day);
    const textHour = Math.floor((diff % day) / hour);
    const textMinute = Math.floor((diff % hour) / minute);
    const textSecond = Math.floor((diff % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.min').innerText = textMinute;
    document.querySelector('.sec').innerText = textSecond;
}

const button = document.querySelector('.start-btn');
button.addEventListener('click', () => {

    const day = Number(document.querySelector('.btn-day').value);
    const month = Number(document.querySelector('.btn-month').value);
    const year = Number(document.querySelector('.btn-year').value); 

    const error = document.querySelector('.error');

    if (day > 31 || month > 12 || year < 2021) {
        error.style.opacity = '1';    
        error.style.marginTop = '10px';
        return 1;
    }

    const divModal = document.querySelector('.modal-wrapper');
    divModal.style.display = 'none';
    setInterval(countdown, 1000);
})