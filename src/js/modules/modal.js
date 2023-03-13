// function openModal(modalSelector, modalTimerId) {
//     const modal = document.querySelector(modalSelector);

//     modal.classList.remove('hide');
//     modal.classList.add('show');
//     document.body.style.overflow = 'hidden';

//     console.log(modalTimerId);
//     if (modalTimerId) {
//         clearInterval(modalTimerId);
//     }

// }
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
}

const openModalJs = (modalSelector, modalTimerId) => {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }

};

function modal(triggerSelector, modalSelector, modalTimerId) {
    //modal
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            // openModal(modalSelector, modalTimerId);
            openModalJs(modalSelector, modalTimerId)
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModalJs(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }



    window.addEventListener('scroll', showModalByScroll);

    if (() => openModalJs(modalSelector, modalTimerId)) {
        window.removeEventListener('scroll', showModalByScroll);
    }

}
export default modal;
export { closeModal };
export { openModalJs };
