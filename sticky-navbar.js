const nav = document.getElementById('nav')

document.addEventListener('scroll', (event) => {
    if (document.documentElement.scrollTop >= document.documentElement.clientHeight + 100) {
        nav.classList.add('navbar-sticky')
    } else {
        nav.classList.remove('navbar-sticky')
    }
})
