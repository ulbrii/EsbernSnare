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