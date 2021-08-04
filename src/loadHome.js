// Module
import Casabonita from './CasaBonita02.jpg';
export default function loadHome(contentDiv) {
	console.log('I get called from loadHome.js!');
	/* ========================================================= */
	// 02 Create image
	const home = document.createElement('main');
	home.setAttribute('id', 'home');
  
  const heroImageDiv = document.createElement('div')
  heroImageDiv.classList.add('hero-image');

  const heroImage = new Image();
	heroImage.src = Casabonita;
	heroImage.classList.add('image-full');
  heroImageDiv.appendChild(heroImage)
  
  home.appendChild(heroImageDiv);
  home.innerHTML += `
     <div id="hero-text">
      <div class="container">
        <p>
          Now available for "call and collect” and casual dining, from our new home in
          Cavendish Street.
        </p>
      </div>
    </div>
    <div class="section" id="hours">
      <div class="container">
        <h2>Hours</h2>
        <p>Sunday: 8am - 8pm</p>
        <p>Monday: 6am - 6pm</p>
        <p>Tuesday: 6am - 6pm</p>
        <p>Wednesday: 6am - 6pm</p>
        <p>Thursday: 6am - 10pm</p>
        <p>Friday: 6am - 10pm</p>
        <p>Saturday: 8am - 10pm</p>
      </div>
    </div>
    <div class="section" id="location">
      <div class="container">
        <h2>Location</h2>
        <p>123 Forest Drive, Forestville, Maine</p>
      </div>
    </div>

    <footer>
      <div class="container">
        <p><strong>Casa Bonita</strong></p>
        <p>Copyright 2021</p>
      </div>
    </footer>
  `;

  contentDiv.appendChild(home);
	return contentDiv;
}
