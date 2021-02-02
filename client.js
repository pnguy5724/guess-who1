console.log('logging in JS');

// $(document).ready(onReady);

function onReady() {
  console.log('setting up the function');
  personInformation(people);
}

function personInformation(people) {
  //render employee information to DOM
  $('#pictureContainer').append(`
  <div id ="personContainer">Person's Name:</div>

  `);
}
