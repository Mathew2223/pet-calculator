const arr = document.querySelectorAll('[class^="btn-"]');
arr.forEach((item) => {
    item.addEventListener('click', () => {
        console.log('Hi!', item.textContent)
})
})