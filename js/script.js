// import "../css/style.css";

import SoftScroll from "./modules/soft-scroll.js";
import initTabNav from "./modules/tab-nav.js";
import initAccordion from "./modules/accordion.js";
import initAnimationScroll from "./modules/animation-scroll.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const softScroll = new SoftScroll('[data-menu="suave"] a[href^="#"]');
softScroll.init();

initAnimationScroll();
initAccordion();
initTabNav();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
