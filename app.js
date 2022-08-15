// primary button
document.getElementById('primary-button').addEventListener('click', function () {
  const primaryButton = document.getElementById('primary-button');
  document.body.style.backgroundColor = '#0d6efd';
  primaryButton.style.backgroundColor = 'white';
  primaryButton.style.color = '#0d6efd';
  document.body.style.color = 'dark';
});


// secondary button
document.getElementById('secondary-button').addEventListener('click', function () {
  const secondaryButton = document.getElementById('secondary-button');
  document.body.style.backgroundColor = '#6c757d';
  secondaryButton.style.border = '2px solid white';
  secondaryButton.style.color = 'white';
  document.body.style.color = 'orange';
});

// success button
document.getElementById('success-button').addEventListener('click', function () {
  const successButton = document.getElementById('success-button');
  document.body.style.backgroundColor = '#198754';
  successButton.style.border = ' 2px solid white';
  successButton.style.color = 'white';
  document.body.style.color = 'white';

});

// danger button
document.getElementById('danger-button').addEventListener('click', function () {
  const dangerButton = document.getElementById('danger-button');
  document.body.style.backgroundColor = '#dc3545';
  dangerButton.style.border = ' 2px solid white';
  dangerButton.style.color = 'white';
  document.body.style.color = 'white';
});

// warning button

document.getElementById('warning-button').addEventListener('click', function () {
  const warningButton = document.getElementById('warning-button');
  document.body.style.backgroundColor = '#ffc107';
  warningButton.style.border = ' 2px solid white';
  warningButton.style.color = 'white';
  document.body.style.color = 'red';
});


// info button

document.getElementById('info-button').addEventListener('click', function () {
  const infoButton = document.getElementById('info-button');
  document.body.style.backgroundColor = '#0dcaf0';
  infoButton.style.border = ' 2px solid white';
  infoButton.style.color = 'white';
  document.body.style.color = 'white';
});


// light button

document.getElementById('light-button').addEventListener('click', function () {
  const lightButton = document.getElementById('light-button');
  document.body.style.backgroundColor = '#f8f9fa';
  lightButton.style.border = ' 2px solid black';
  lightButton.style.color = 'black';
  document.body.style.color = 'black';
});
// dark button

document.getElementById('dark-button').addEventListener('click', function () {
  const darkButton = document.getElementById('dark-button');
  document.body.style.backgroundColor = '#212529';
  darkButton.style.border = ' 2px solid white';
  darkButton.style.color = 'white';
  document.body.style.color = 'white';
});




// friend section
// yes button
document.getElementById('yes-btn').addEventListener('click', function () {
  const friendText = document.getElementById('friend-text');
  friendText.innerText = 'WOW ! REALLY?';
})
document.getElementById('yes-btn').addEventListener('mouseleave', function () {
  const friendText = document.getElementById('friend-text');
  friendText.innerText = 'Ok , Send me Friend Request';
});

// ofc button
// image section
document.getElementById('ofc-btn').addEventListener('click', function () {
  const friendSection = document.getElementById('textSection');
  const img = document.createElement("img");
  img.src = "images/friends.jpg";
  friendSection.appendChild(img);
  friendSection.classList.add('shadow')
  friendSection.classList.add('p-3');
  friendSection.classList.add('pb-5');
  friendSection.classList.add('rounded-5');
  img.classList.add('rounded-5');
  img.classList.add('mt-4');
});


// github delete button
document.getElementById('delete-text').addEventListener('keyup', function (event) {
  const text = event.target.value;
  const deleteButton = document.getElementById('delete-confirm');
  if (text == 'shourovr82/javascript-module-25.5-practice') {
    deleteButton.removeAttribute('disabled');

  }
  else {
    deleteButton.setAttribute('disabled', true);
  }
})
document.getElementById('delete-confirm').addEventListener('click', function () {
  const dangerZone = document.getElementById('danger-zone');
  dangerZone.innerText = 'Repository Successfully Deleted';
  const inputdltText = document.getElementById('delete-text')
  inputdltText.value = '';
  const repoDeleteBtn = document.getElementById('delete-confirm');
  repoDeleteBtn.innerText = 'Deleted !   close the Modal';
  repoDeleteBtn.setAttribute('disabled', true);
});

// github background change

document.getElementById('srv-bg').addEventListener('click', function () {
  const srv = document.getElementById('srv-bg');
  srv.style.backgroundColor = 'red';
  srv.style.color = 'white';
  srv.style.borderRadius = '20px';
})


// body
document.body.addEventListener('dblclick', function () {
  document.body.style.background = 'white';
})