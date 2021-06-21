import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalAdd = document.querySelector('.modal--add');
const modalAddBtns = document.querySelectorAll('[data-modal="add"]');
const modalLogin = document.querySelector('.modal--login');
const modalLoginBtns = document.querySelectorAll('[data-modal="login"]');
const inputFocus = document.querySelector('[data-mail]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalAdd && modalAddBtns.length) {
    setupModal(modalAdd, false, modalAddBtns, false, false);
  }

  if (modalLogin && modalLoginBtns.length) {
    setupModal(modalLogin, false, modalLoginBtns, false, false, false, inputFocus);
  }
};

export {initModals};
