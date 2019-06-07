'use strict';

const elem = document.querySelector('.main-carousel');
const flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true,
  groupCells: true
});

const buttonGroup = document.querySelector('.button-group');
const buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray(buttons);

buttonGroup.addEventListener('click', function(event) {
  // filter for button clicks
  if (!matchesSelector(event.target, '.button')) {
    return;
  }
  let index = buttons.indexOf(event.target);
  flkty.selectCell(index);
});

const progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});
