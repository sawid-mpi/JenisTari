window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const background = object('5rnHsNCpwxX');
const title = object('5gwtkFOhqxe');
const leftElements = [object('6ZRi2MGTPZv'), object('6FxRB9UxY5A'), object('6YCQ4hffRTQ')];
const rightElements = [object('6JtFBaVAUtk'), object('5oMJPWXoVqx'), object('5UgNwp4Qusn')];
const floatingElements = [object('64cOvi0bHON'), object('6M3fkCwmUM1')];

// Title animation
addToTimeline(() => {
  title.style.opacity = 0;
  title.style.scale = '0';
  title.animate([
    { opacity: 0, scale: '0' },
    { opacity: 1, scale: '1.2', offset: 0.8 },
    { opacity: 1, scale: '1' }
  ], { duration: 1000, delay: 500, fill: 'forwards', easing: 'ease-out' });
});

// Left-side elements slide-in animation
leftElements.forEach((element, index) => {
  addToTimeline(() => {
    element.style.opacity = 0;
    element.animate([
      { opacity: 0, translate: '-50px 0' },
      { opacity: 1, translate: '0 0' }
    ], { duration: 1000, delay: 600 + index * 200, fill: 'forwards', easing: 'ease-out' });
  });
});

// Right-side elements slide-in animation
rightElements.forEach((element, index) => {
  addToTimeline(() => {
    element.style.opacity = 0;
    element.animate([
      { opacity: 0, translate: '50px 0' },
      { opacity: 1, translate: '0 0' }
    ], { duration: 1000, delay: 600 + index * 200, fill: 'forwards', easing: 'ease-out' });
  });
});

// Floating elements animation
floatingElements.forEach((element, index) => {
  addToTimeline(() => {
    element.style.opacity = 0;
    element.animate([
      { opacity: 0, translate: '0 50px', scale: '0.9' },
      { opacity: 1, translate: '0 0', scale: '1.1', offset: 0.5 },
      { opacity: 1, translate: '0 0', scale: '1' }
    ], { duration: 1200, delay: 800 + index * 300, fill: 'forwards', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' });
  });
});
}

window.Script2 = function()
{
  const background = object('6K04SCS0pjS');
const title = object('6oDy0SB36ZZ');
const leftElements = [object('5gQNKfZ0Bvk'), object('5lQafDvbfUL'), object('6Q1qi2afJz8')];
const rightElements = [object('5xVegjmtZvl'), object('5pZWU3ndin9'), object('5erIEknOpix')];
const floatingElements = [object('6h9PSL7zqWr'), object('6chHVDoxU4n')];

// Title animation
addToTimeline(() => {
  title.style.opacity = 0;
  title.style.scale = '0';
  title.animate([
    { opacity: 0, scale: '0' },
    { opacity: 1, scale: '1.2', offset: 0.8 },
    { opacity: 1, scale: '1' }
  ], { duration: 1000, delay: 500, fill: 'forwards', easing: 'ease-out' });
});

// Left-side elements slide-in animation
leftElements.forEach((element, index) => {
  addToTimeline(() => {
    element.style.opacity = 0;
    element.animate([
      { opacity: 0, translate: '-50px 0' },
      { opacity: 1, translate: '0 0' }
    ], { duration: 1000, delay: 600 + index * 200, fill: 'forwards', easing: 'ease-out' });
  });
});

// Right-side elements slide-in animation
rightElements.forEach((element, index) => {
  addToTimeline(() => {
    element.style.opacity = 0;
    element.animate([
      { opacity: 0, translate: '50px 0' },
      { opacity: 1, translate: '0 0' }
    ], { duration: 1000, delay: 600 + index * 200, fill: 'forwards', easing: 'ease-out' });
  });
});

// Floating elements animation
floatingElements.forEach((element, index) => {
  addToTimeline(() => {
    element.style.opacity = 0;
    element.animate([
      { opacity: 0, translate: '0 50px', scale: '0.9' },
      { opacity: 1, translate: '0 0', scale: '1.1', offset: 0.5 },
      { opacity: 1, translate: '0 0', scale: '1' }
    ], { duration: 1200, delay: 800 + index * 300, fill: 'forwards', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' });
  });
});
}

};
