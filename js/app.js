// define local variables
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
// Build the nav
const buildNav = function(){
    //The createDocumentFragment() method creates an imaginary Node object, with all the properties and methods of the Node object.
    const fragment = document.createDocumentFragment();
    sections.forEach(function(section){
        const ID = section.id;
        const secName = section.dataset.nav;
        let item = document.createElement('li');
        const link = document.createElement('a');
        link.classList.add('menu__link');
        link.href = `#${ID}`;
        link.innerText = `${secName}`
        item.appendChild(link);
        fragment.appendChild(item)
    });
    navList.appendChild(fragment)
}
// call the function that build the nav
buildNav();
// function to check if element in viewport
function isInViewport (element){
let sectionPosition = element.getBoundingClientRect();
return (sectionPosition.top >= 0);
};
// function to active the current section
function Active(){
for(section of sections){
    if(isInViewport(section)){
        if(section.classList.contains('your-active-class')){
            section.classList.remove('your-active-class')
        }else{section.classList.add('your-active-class')}
    }
}  
}
// listen to page scroll and apply Active() function
document.addEventListener('scroll', Active);
