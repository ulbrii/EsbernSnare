// Band Members Array
const bandMembers = [
	{
		name: 'lukejones',
		id: 'ljon'
	},
	{
		name: 'adamjones',
		id: 'ajon'
	},
	{
		name: 'josephbrockman',
		id: 'jbrock'
	},
	{
		name: 'josiahcrumrine',
		id: 'jcrum'
	},
	{
		name: 'ericdryfka',
		id: 'edryf'
	}
];

// Adding photo change on 'hover' effect via event listener to all band member photos
for (let member of bandMembers) {
	let memberPhoto = document.querySelector(`#${member.id}`);
	memberPhoto.addEventListener('mouseover', () =>
		memberPhoto.setAttribute('src', `/public/images/${member.name}-action-rounded.png`)
	);
	memberPhoto.addEventListener('mouseout', () =>
		memberPhoto.setAttribute('src', `/public/images/${member.name}-rounded.png`)
	);
}


// Adding social footer to all modals.
const modalFooter = document.querySelectorAll('.modal-footer');

for(let footer of modalFooter) {
	const modalSocial = document.createElement('section');
	modalSocial.classList.add('modal-social', 'me-auto');
	modalSocial.innerHTML = `
	<div class="justify-content-center container">
		<a href="https://www.instagram.com/esbernsnare" target="_blank">
		<i class="fa-brands fa-instagram fa-xl"></i>
		</a>
		<a href="https://www.facebook.com/esbernsnaremusic" target="_blank">
		<i class="fa-brands fa-facebook fa-xl"></i>
		</a>
		<a href="mailto:esbernsnareband@gmail.com">
		<i class="fa-solid fa-envelope fa-xl"></i>
		</a>
		<a href="https://esbernsnare.bandcamp.com/" target="_blank">
		<i class="fa-brands fa-bandcamp fa-xl"></i>
		</a>
		<a href="https://open.spotify.com/artist/1VbRx9HJz7ZVbkp6TVy3eq" target="_blank">
		<i class="fa-brands fa-spotify fa-xl"></i>
		</a>
	</div>
	`;
	footer.insertAdjacentElement('afterbegin', modalSocial);
}
