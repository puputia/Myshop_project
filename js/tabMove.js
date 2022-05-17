"use stric";

/* ------------------------------ 탭버튼 스크롤 ------------------------------ */

const productDetailsTab = document.querySelectorAll(".product_tab-titles li");
const tabLocate = [];
tabLocate[0] = document.getElementById("details").offsetTop;
tabLocate[1] = document.getElementById("review").offsetTop;
tabLocate[2] = document.getElementById("qna").offsetTop;

productDetailsTab.forEach((tab) => {
  tab.addEventListener("click", function (event) {
    event.preventDefault();

    const indexNum = Array.from(productDetailsTab).indexOf(this);
    window.scrollTo({
      top: tabLocate[indexNum],
      behavior: "smooth",
    });
  });
});

/* ------------------------------ //탭버튼 스크롤 ------------------------------ */

/* ------------------------------ 리뷰더보기 ------------------------------ */

const readMoreBtn = document.querySelectorAll(".read-more-btn");

function openReviewText(event) {
  event.preventDefault();
  const reviewText = this.parentNode.parentNode.querySelector("p");
  const openText = "리뷰 내용 더보기 >>";
  const closeText = "리뷰 접기";
  console.log();
  if (reviewText.className === "open") {
    reviewText.classList.remove("open");
    this.innerText = openText;
  } else {
    reviewText.classList.add("open");
    this.innerText = closeText;
  }
}

readMoreBtn.forEach((btn) => {
  btn.addEventListener("click", openReviewText);
});

/* ------------------------------ //리뷰더보기 ------------------------------ */

/* const photoList = document.querySelectorAll(".photo-box ul li");
const nowPhoto = document.querySelector(".now-photo img");
const imageSliderBtn = document.querySelectorAll(".imageSliderBtn");
let photoIndexNum = 0;

function changeNowImage() {
  const thisAttr = this.querySelector("img").getAttribute("src");
  nowPhoto.setAttribute("src", thisAttr);

  photoIndexNum = Array.from(photoList).indexOf(this);
}

function slideImage() {
  const direction = Array.from(imageSliderBtn).indexOf(this);

  if (direction === 0) {
    if (photoIndexNum === 0) photoIndexNum = photoList.length;
    photoIndexNum--;
    console.log(photoIndexNum);

    const thisAttr = photoList[photoIndexNum]
      .querySelector("img")
      .getAttribute("src");
    nowPhoto.setAttribute("src", thisAttr);
  } else {
    photoIndexNum++;
    if (photoIndexNum === photoList.length) photoIndexNum = 0;

    const thisAttr = photoList[photoIndexNum]
      .querySelector("img")
      .getAttribute("src");
    nowPhoto.setAttribute("src", thisAttr);
  }
}

imageSliderBtn.forEach((btn) => {
  btn.addEventListener("click", slideImage);
});

photoList.forEach((photo) => {
  photo.addEventListener("click", changeNowImage);
});
 */
