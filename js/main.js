'use strict';
const forms = document.querySelectorAll('form');
const dataTimeDiv = document.querySelector(`[data-time="time"]`);
let today = new Date();
let year = today.getFullYear();

dataTimeDiv.textContent = `© ${year} PitStop. 105187, Москва, Борисовская 37а`;


const message = {
    loading: 'Oтправка',
    //loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

forms.forEach(item => {
    bindPostData(item);
});

const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

function bindPostData(form) {
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

        postData('../send.php', json)
            .then(data => {
                //console.log(data);
                statusMessage.textContent = message.success;
                //showThanksModal(message.success);
                setTimeout(() => statusMessage.remove(), 5000);
            }).catch(() => {
                statusMessage.textContent = message.failure;
                setTimeout(() => statusMessage.remove(), 5000);
                // showThanksModal(message.failure);
            }).finally(() => {

                setTimeout(() => form.reset(), 15000);
            });
    });
}

// работа модалок
// function showThanksModal(message) {
//     const prevModalDialog = document.querySelector('.modal__dialog');

//     prevModalDialog.classList.add('hide');
//     openModal();

//     const thanksModal = document.createElement('div');
//     thanksModal.classList.add('modal__dialog');
//     thanksModal.innerHTML = `
//         <div class="modal__content">
//             <div class="modal__close" data-close>×</div>
//             <div class="modal__title">${message}</div>
//         </div>
//     `;
//     document.querySelector('.modal').append(thanksModal);
//     setTimeout(() => {
//         thanksModal.remove();
//         prevModalDialog.classList.add('show');
//         prevModalDialog.classList.remove('hide');
//         closeModal();
//     }, 4000);
// }

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



