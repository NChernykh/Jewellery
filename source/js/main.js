import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initForm} from './modules/init-form';
import {initBurger} from './modules/init-burger';
import {initSwiper} from './modules/init-swiper';
import {initAccordion} from './modules/init-accordion';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initForm();
initBurger();
initSwiper();
initAccordion();
