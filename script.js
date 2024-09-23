const icon = document.querySelector('.descr-icon');
const card = document.querySelector('.card');
console.log(icon)
icon.addEventListener('click', (e)=> {
    e.stopPropagation(); 
    card.classList.toggle('active')
    if(!e.currentTarget) {
        console.log('work')
    }
});
document.addEventListener('click', (e)=>{
    if(!icon.contains(e.target) && !card.contains(e.target)) {
        card.classList.remove('active');
    }
})
