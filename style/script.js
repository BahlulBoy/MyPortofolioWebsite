// scroll nav function
const navItem = document.querySelectorAll('.nav-item a')
navItem.forEach(function (link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = link.getAttribute('href')
        document.querySelector(targetId).classList.add('show');
        document.querySelector(targetId).scrollIntoView({
            behavior : 'smooth',
            inline : 'start'
        })
    })
})
// scroll nav function

const content = document.querySelectorAll('section');
window.addEventListener('scroll', checkContent);

checkContent();

function checkContent(params) {
  const triggerBottom = window.innerHeight / 5 * 4;
  console.log(triggerBottom);
  content.forEach(b => {
    const contentItem = b.getBoundingClientRect().top
    if (contentItem < triggerBottom) {
        b.classList.add('show');
    }
  })
};