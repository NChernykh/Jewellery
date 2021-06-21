const modal = document.querySelector('.login__form');
const modalMail = modal.querySelector('[name=email]');

const initForm = () => {

  let isStorageSupport = true;

  function addEntry() {
    let existingEntries = JSON.parse(localStorage.getItem('allEntries'));
    if (existingEntries === null) {
      existingEntries = [];
    }

    const entryMail = modalMail.value;
    const entry = {
      'mail': entryMail,
    };

    localStorage.setItem('entry', JSON.stringify(entry));
    existingEntries.push(entry);
    localStorage.setItem('allEntries', JSON.stringify(existingEntries));
  }

  modal.addEventListener('submit', function () {
    if (isStorageSupport) {
      addEntry();
    }
  });
};

export {initForm};
