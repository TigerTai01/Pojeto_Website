const wrapper = document.querySelector('.wrapper');
const linkcadastro = document.querySelector('.link-cadastro');
const linklogin = document.querySelector('.link-login');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

linkcadastro.onclick = () => {
    wrapper.classList.add('active');
};

linklogin.onclick = () => {
    wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
};