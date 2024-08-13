'use strict';

const links = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

const highlightLink = function () {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.screenX,
  };

  highlight.style.height = `${coords.height}px`;
  highlight.style.width = `${coords.width}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
};

links.forEach(a => a.addEventListener('mouseenter', highlightLink));
