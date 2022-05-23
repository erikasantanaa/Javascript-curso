
const ul = document.querySelector('[data-js="ul"]');

const social = ['youtube', 'twitter', 'instagram', 'facebook'];

let HTMLTemplate = ''

social.forEach( social => {
    HTMLTemplate += `<li style="color: deeppink;">${social}</li>`
});

ul.innerHTML = HTMLTemplate;