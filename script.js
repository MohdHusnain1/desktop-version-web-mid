// document.querySelector('.menu-btn').addEventListener('click', function () {
//   document.querySelector('.mobile-nav').classList.remove('hidden');
// });

// document.querySelector('.close-btn').addEventListener('click', function () {
//   document.querySelector('.mobile-nav').classList.add('hidden');
// });

// const speakers = [
//   {
//     name: 'John Doe',
//     description:
//       'A renowned guitarist known for blending classical and modern styles.',
//   },
//   {
//     name: 'Jane Smith',
//     description: 'A vocalist with a powerful voice that touches hearts.',
//   },
//   {
//     name: 'DJ Remix',
//     description: 'Famous for mixing beats that get the crowd dancing.',
//   },
// ];

// window.onload = function () {
//   const speakersList = document.getElementById('speakers-list');
//   speakers.forEach((speaker) => {
//     const speakerDiv = document.createElement('div');
//     speakerDiv.classList.add('speaker');
//     speakerDiv.innerHTML = `<h3>${speaker.name}</h3><p>${speaker.description}</p>`;
//     speakersList.appendChild(speakerDiv);
//   });
// };



function toggleSpeakers() {
    const extraSpeakers = document.getElementById('extraSpeakers');
    const toggleButton = document.getElementById('toggleButton');

    if (extraSpeakers.style.display === 'none') {
        // Show additional speakers and change button text to "Less"
        extraSpeakers.style.display = 'block';
        toggleButton.innerText = 'Less';
    } else {
        // Hide additional speakers and change button text back to "More"
        extraSpeakers.style.display = 'none';
        toggleButton.innerText = 'More';
    }
}