const trigger = document.querySelectorAll('.accordion__trigger');
const toggle = document.querySelectorAll('.accordion__toggle');
const parentElem = document.querySelector('.accordion');

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

  const removeClass = (element, className) => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  };

  trigger.forEach((item) => {
    removeClass(item, 'accordion__trigger--nojs');
  });

  toggle.forEach((item) => {
    removeClass(item, 'accordion__toggle--nojs');
  });

  if (parentElem) {
    parentElem.addEventListener('click', (event) => {
      const target = event.target;
      if (target && target.classList.contains('accordion__trigger')) {

        const hideContent = () => {
          trigger.forEach((item) => {
            item.classList.remove('accordion__trigger--show');
          });
        };

        const showContent = (i = 0) => {
          trigger[i].classList.add('accordion__trigger--show');
        };

        hideContent();
        showContent();

        trigger.forEach((item, i) => {
          const itemShow = getItem(trigger, 'accordion__trigger--show');
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

      if (target && target.classList.contains('accordion__toggle')) {
        toggle.forEach((item) => {
          const itemToggle = getItem(toggle, 'accordion__toggle');
          if (target === item) {
            if (itemToggle) {
              item.classList.toggle('accordion__toggle--show');
            }
          }
        });
      }
    });
  }
};

export {initAccordion};
