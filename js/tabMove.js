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
