import home from '../legacy/index.html?raw';
import homeSix from '../legacy/index-6.html?raw';
import countdown from '../legacy/index-countdown.html?raw';
import select from '../legacy/index-select.html?raw';
import sliderText from '../legacy/index-slider-text.html?raw';
import slider from '../legacy/index-slider.html?raw';
import staticBackground from '../legacy/index-static-background.html?raw';
import contact from '../legacy/contact.html?raw';
import news from '../legacy/news.html?raw';
import newsSingle from '../legacy/news-single.html?raw';
import tickets from '../legacy/tickets.html?raw';
import ticketsTwo from '../legacy/tickets-2.html?raw';

const definitions = [
  { html: home, paths: ['/', '/index.html'] },
  { html: homeSix, paths: ['/index-6', '/index-6.html'] },
  { html: countdown, paths: ['/index-countdown', '/index-countdown.html'] },
  { html: select, paths: ['/index-select', '/index-select.html'] },
  { html: sliderText, paths: ['/index-slider-text', '/index-slider-text.html'] },
  { html: slider, paths: ['/index-slider', '/index-slider.html'] },
  { html: staticBackground, paths: ['/index-static-background', '/index-static-background.html'] },
  { html: contact, paths: ['/contact', '/contact.html'] },
  { html: news, paths: ['/news', '/news.html'] },
  { html: newsSingle, paths: ['/news-single', '/news-single.html'] },
  { html: tickets, paths: ['/tickets', '/tickets.html'] },
  { html: ticketsTwo, paths: ['/tickets-2', '/tickets-2.html'] },
];

export const pageRoutes = definitions.flatMap(({ html, paths }) =>
  paths.map((path) => ({ path, html }))
);
