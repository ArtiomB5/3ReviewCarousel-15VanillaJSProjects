"use strict";

var user1 = {
  userPhoto: "url('../img/userPhotos/SusanSmith_thispersondoesnotexist.com.jpg')",
  userName: "susan smith",
  profession: "web developer",
  review: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
};
var user2 = {
  userPhoto: "url('../img/userPhotos/AnnaJohnson_thispersondoesnotexist.com.jpg')",
  userName: "anna johnson",
  profession: "web designer",
  review: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
};
var user3 = {
  userPhoto: "url('../img/userPhotos/PeterJones_thispersondoesnotexist.com.jpg')",
  userName: "peter jones",
  profession: "intern",
  review: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
};
var user4 = {
  userPhoto: "url('../img/userPhotos/BillAnderson_thispersondoesnotexist.com.jpg')",
  userName: "bill anderson",
  profession: "the boss",
  review: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
};
var users = [user1, user2, user3, user4];
var currentUser = 0;
/**
 * Возвращает случайный индекс массива
 *
 * @param {number} arrayLength длина массива
 * @return {number} случайный индекс массива.
 */

function randomArrayElementIndexGenerator(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}
/**
 * Устанавливает случайного пользователя, либо следующего, либо предыдущего
 */


function setUser(param) {
  var userIndex = 0;
  var userObject = users[0];

  if (typeof param === "number") {
    userIndex = param;
    userObject = users[userIndex];
    currentUser = userIndex;
  } else {
    userIndex = randomArrayElementIndexGenerator(users.length);
    userObject = users[userIndex];
    currentUser = userIndex;
  }

  document.getElementById('photo').style.backgroundImage = userObject.userPhoto;
  document.getElementById('name').innerHTML = userObject.userName;
  document.getElementById('profession').innerHTML = userObject.profession;
  document.getElementById('review-text').innerHTML = userObject.review;
}
/**
 * "переключает" отзыв пользотеля
 *
 * @param {object} event длина массива
 */


function usersNavigation(event) {
  var eventName = event.target.textContent;
  console.log(event.target.textContent);

  if (eventName == 'navigate_next') {
    if (currentUser < users.length - 1) {
      currentUser++;
      setUser(currentUser);
    } else if (currentUser == users.length - 1) {
      currentUser = 0;
      setUser(currentUser);
    }
  }

  if (eventName == 'navigate_before') {
    if (currentUser > 0) {
      currentUser--;
      setUser(currentUser);
    } else if (currentUser == 0) {
      currentUser = users.length - 1;
      setUser(currentUser);
    }
  }
}

document.addEventListener('DOMContentLoaded', setUser);
var randomUser = document.getElementById('button-surprise');
randomUser.addEventListener('click', setUser);
var navigationButtons = document.querySelectorAll('.navigate-button');
navigationButtons.forEach(function (button) {
  button.addEventListener('click', usersNavigation);
});