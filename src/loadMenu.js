// Module 01 Load the initial page content
import './style.css';
import Casabonita from './CasaBonita02.jpg';

export default function loadMenu(contentDiv) {
	console.log('I get called from loadMenu.js!');
	/* ========================================================= */
	// 02 Create image
	const menu = document.createElement('main');
  menu.setAttribute('id', 'menu');
  
	const heroImageDiv = document.createElement('div')
  heroImageDiv.classList.add('hero-image');

  const heroImage = new Image();
	heroImage.src = Casabonita;
	heroImage.classList.add('image-full');
  heroImageDiv.appendChild(heroImage)
  
  menu.appendChild(heroImageDiv);
  menu.innerHTML += `
  <div id="hero-text">
				<div class="container">
					<p>
						Now available for "call and collect” and casual dining, from our new home in
						Cavendish Street.
					</p>
				</div>
			</div>
			<div class="section" id="thai">
				<div class="container">
					<div class="menu-section-headline">
						<h2 class="menu-section-title">THAI CUISINE</h2>
						<p class="menu-section-info">Salads, noodles, grills and more.</p>
					</div>

					<div class="menu-section-body">
						<div class="menu-subsection">
							<h3 class="menu-subsection-title">STARTERS</h3>
							<p class="menu-item">Miso Soup <span class="price">R46</span></p>
							<p class="menu-item">Jalapeño Poppers (prawn and cheese) <span class="price">R44</span></p>
							<p class="menu-item">Edamame <span class="price">R48</span></p>
							<p class="menu-item">
								Deep fried, crispy calamari (slightly spicy) <span class="price">R68</span>
							</p>
							<p class="menu-item">Tempura Prawns (3 piece) <span class="price">R58</span></p>
						</div>
						
						<div class="menu-subsection">
							<h3 class="menu-subsection-title">SPRING ROLLS</h3>
							<p class="class-item">
								Prawn, Cheese and Coriander Spring Rolls served with sweet chilli
								sauce <span class="price">R50</span>
							</p>
	
							<p class="class-item">
								Thai Chicken Spring Rolls served with sweet chilli sauce <span class="price">R48</span>
							</p>
						</div>
					</div>

					
					
				</div>
			</div>
			<div class="section" id="salads">
				<div class="container">
					<div class="menu-section-headline">
						<h2 class="menu-section-title">SALADS</h2>
					</div>
					
					<div class="menu-section-body">
						<div class="menu-subsection">
							<p class="menu-item">
								Wok seared Norwegian Salmon and a hint of teriyaki, served on a bed of
								baby leaves, cherry tomatoes and cucumber. Finished with sesame seeds
								and a wasabi mint mayo dressing on the side <span class="price">R105</span>
							</p>
							<p class="menu-item">Crabstick and Avo Salad <span class="price">R78</span></p>
						</div>
					</div>
				</div>
			</div>

			<footer>
				<div class="container">
					<p><strong>Casa Bonita</strong></p>
					<p>Copyright 2021</p>
				</div>
			</footer>
  `;

  contentDiv.appendChild(menu);
	return contentDiv;
}
