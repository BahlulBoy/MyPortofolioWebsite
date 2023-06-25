// scroll nav function
var navItem = document.querySelectorAll('.nav-action a')
navItem.forEach(function (link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = link.getAttribute('href')
        document.querySelector(targetId).scrollIntoView({
            behavior : 'smooth'
        })
    })
})
// scroll nav function