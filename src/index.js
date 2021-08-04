import './normalize.css';
import './style.css';
import loadHeader from './loadHeader.js';
import loadHome from './loadHome.js';
import loadMenu from './loadMenu.js';
import loadContact from './loadContact.js';

// 01 Grab the content div and load the initial page content
const contentDiv = document.querySelector('#content');
loadHeader(contentDiv);
loadHome(contentDiv);

// 02 Grab Navigation buttons Evenlistners
const navButtons = document.querySelectorAll('nav a');
console.dir(navButtons);
navButtons.forEach(button => {
    button.addEventListener('click', clickNav)
});

function deleteMain() {
	const main = document.querySelector('main');
	if (main) {
		const parentNode = main.parentNode;
		parentNode.removeChild(main);
	}
}

function clickNav(e) {
    let string = 'Clicked' + e.target.innerText;
    
    const current = document.querySelector('.current-page')
    current.classList.remove('current-page')

	console.log(string);
    e.target.classList.add('current-page');
    
    deleteMain()

    if (e.target.innerText === 'Menu') {
        loadMenu(contentDiv)    
    } else if (e.target.innerText === 'Contact') {
        loadContact(contentDiv)
    } else if (e.target.innerText === 'Home') {
        loadHome(contentDiv)
    }
    
}
