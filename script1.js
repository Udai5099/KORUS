// Get the recruitment form elements
const recruitmentForm = document.querySelector('#recruitment-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const songInput = document.querySelector('#song');

// Create an array to store the saved data
let membersData = [];

// Add an event listener to the form submission
recruitmentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the user's input
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const song = songInput.value;

  // Create a JSON object to store the data
  const memberData = {
    name,
    email,
    phone,
    song
  };

  // Add the data to the array
  membersData.push(memberData);

  // Display the saved data on the webpage
  displayMembersData();

  // Reset the form
  recruitmentForm.reset();
});

// Function to display the saved data
function displayMembersData() {
  const membersList = document.querySelector('#members-list');
  membersList.innerHTML = '';

  membersData.forEach((member, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${member.name}, Email: ${member.email}, Phone: ${member.phone}, Song: ${member.song}`;
    membersList.appendChild(listItem);
  });
}