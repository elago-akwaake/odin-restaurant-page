// Module
import './style.css';
import Casabonita from './CasaBonita02.jpg';

export default function loadContact(contentDiv) {
	console.log('I get called from loadContact.js!');
	/* ========================================================= */
	// 02 Create image
	const contact = document.createElement('main');
	contact.setAttribute('id', 'contact');
	
	const heroImageDiv = document.createElement('div');
	heroImageDiv.classList.add('hero-image');

	const heroImage = new Image();
	heroImage.src = Casabonita;
	heroImage.classList.add('image-full');
	heroImageDiv.appendChild(heroImage);

	contact.appendChild(heroImageDiv);
	contact.innerHTML += `
   <div id="hero-text">
				<div class="container">
					<p>
						Now available for "call and collect” and casual dining, from our new home in
						Cavendish Street.
					</p>
				</div>
			</div>
			<div class="section" id="contact-details">
				<div class="container">
					<h2>Contact</h2>
					<p>Tel: 065 038 2106</p>
					<p>Email: info@salushiexpress.co.za</p>
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

	contentDiv.appendChild(contact);
	return contentDiv;
}
