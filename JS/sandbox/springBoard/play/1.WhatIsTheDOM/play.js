const imgs = document.querySelectorAll('img');

const src = imgs[0].getAttribute('src');

for (let img of imgs) {
    img.setAttribute('src', src);
}
