const burgerBtn = document.querySelector('.burger-btn');
const showMobMenu = document.querySelector('.mob-menu');
const showBackdrop = document.querySelector('.backdrop');
const backdrop = document.querySelector('.backdrop');
burgerBtn.onclick = () => {
  showMobMenu.style.transform = 'translateX(-0%)';
  showBackdrop.style.opacity = '1';
  showBackdrop.style.visibility = 'visible';
};
backdrop.onclick = () => {
  showMobMenu.style.transform = 'translateX(100%)';
  showBackdrop.style.opacity = '0';
  showBackdrop.style.visibility = 'hidden';
};