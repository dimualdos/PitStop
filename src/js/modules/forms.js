'use strict';
//import { closeModal, openModal } from './modal';

const dataTimeDiv = document.querySelector(`[data-time="time"]`);
let today = new Date();
let year = today.getFullYear();

dataTimeDiv.textContent = `© ${year} PitStop. 105187, Москва, Борисовская 37а`;


const formSelector = (formSelector) => {
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'Oтправка',
        //loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        // const fields = item.querySelectorAll('[data-validate]');
        send(item);

    });

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: data
        });

        return await res.json();
    };

    function send(form) {


        form.addEventListener('submit', (e) => {

            e.preventDefault();

            //let statusMessage = document.createElement('img');
            let statusMessage = document.createElement('div');
            //statusMessage.src = message.loading;
            statusMessage.textContent = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('send.php', formData)
                .then(data => {

                    statusMessage.textContent = message.success;
                    //showThanksModal(message.success);
                    setTimeout(() => statusMessage.remove(), 5000);
                }).catch((data) => {

                    statusMessage.textContent = message.failure;
                    setTimeout(() => statusMessage.remove(), 5000);
                    //showThanksModal(message.failure);
                }).finally(() => {
                    setTimeout(() => form.reset(), 5000);
                });
        });
    }

};
export default formSelector;


// работа модалок


// const photos = document.querySelectorAll('img');

// let btnRight = document.querySelector('.right');

// let btnLeft = document.querySelector('.left');

// let imgIndex = 0;
// let i = 0;
// setInterval(() => {
//     photos[imgIndex].className = '';
//     imgIndex++;

//     if (imgIndex >= photos.length) {
//         imgIndex = 0;
//     }
//     photos[imgIndex].className = 'visible';
// }, 2000);

/*btnRight.onclick = function(){
    photos[imgIndex].className = '';
    imgIndex++;

    if(imgIndex >= photos.length){
        imgIndex = 0;
    }
    photos[imgIndex].className = 'visible';
}

btnLeft.onclick = function(){
    photos[imgIndex].className = '';
    imgIndex = imgIndex - 1;

    if(imgIndex < 0){
        imgIndex = photos.length - 1;
    }
    photos[imgIndex].className = 'visible';
}
*/


