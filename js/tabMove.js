"use stric";

/* ------------------------------ 탭버튼 스크롤 ------------------------------ */

const productDetailsTab = document.querySelectorAll(".product_tab-titles li");
const tabLocate = [];
const CLASSNAME_ACTIVE = "active";

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
    for (let tabname of productDetailsTab) {
      tabname.classList.remove(CLASSNAME_ACTIVE);
    }
    this.classList.add(CLASSNAME_ACTIVE);
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

/* ------------------------------ 리뷰 쓰기 ------------------------------ */

function writeReview() {
  const popUrl = "write-review.html";
  const popOption =
    "top=40,left=40,width=520,height=600,resizable=no,location=no";
  window.open(popUrl, "_new", popOption);
  console.log("hey");
}

/* ------------------------------ //리뷰 쓰기 ------------------------------ */

/* ------------------------------ 사진 등록 ------------------------------ */

/* ------------------------------ //사진 등록 ------------------------------ */
