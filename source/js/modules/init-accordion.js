const trigger = document.querySelectorAll('.faq__subtitle');
const parentElem = document.querySelector('.faq');

const initAccordion = () => {
  const getItem = (elements, className) => {
    let element;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };

  trigger.forEach((item) => {
    if (item.classList.contains('faq__subtitle--nojs')) {
      item.classList.remove('faq__subtitle--nojs');
    }
  });

  const hideContent = () => {
    trigger.forEach((item) => {
      item.classList.remove('faq__subtitle--show');
    });
  };

  const showContent = (i = 0) => {
    trigger[i].classList.add('faq__subtitle--show');
  };

  hideContent();
  showContent();

  parentElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('faq__subtitle')) {
      trigger.forEach((item, i) => {
        const itemShow = getItem(trigger, 'faq__subtitle--show');
        if (target === item) {
          if (!itemShow) {
            showContent(i);
          } else {
            hideContent();
            if (itemShow !== item) {
              showContent(i);
            }
          }
        }
      });
    }
  });
};

export {initAccordion};
