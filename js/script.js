import "../css/style.css";

import SoftScroll from "./modules/soft-scroll.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/accordion.js";
import initAnimationScroll from "./modules/animation-scroll.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const softScroll = new SoftScroll('[data-menu="suave"] a[href^="#"]');
softScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initAnimationScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();

fetchAnimais("../../animaisapi.json", ".numeros-grid");
