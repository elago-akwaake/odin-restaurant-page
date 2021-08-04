// Module 01 Load the initial page content
export default function loadHeader(contentDiv) {
	console.log('I get called from loadHeader.js!');

	const header = document.createElement('header');

	const containerDiv = document.createElement('div');
	containerDiv.classList.add('container', 'container-flex-header');
	containerDiv.innerHTML = `
		<div class="site-title">
			<h1>Casa Bonita</h1>
			<p class="h1-subtitle">The home of taco flavoured kisses</p>
		</div>
		<nav>
			<ul>
				<li><a href="#" class="current-page">Home</a></li>
				<li><a href="#">Menu</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
	`;
	header.appendChild(containerDiv);

	contentDiv.appendChild(header);
	
	return contentDiv;
}
