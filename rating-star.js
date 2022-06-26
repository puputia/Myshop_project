"use stric";

const ratingStar = document.querySelectorAll(".rating");

for (let stars of ratingStar) {
  const numberOfRating = stars.innerHTML;
  stars.style.width = `${numberOfRating * 20}%`;
}
