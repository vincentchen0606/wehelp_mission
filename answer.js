// function toggleAnswer(id) {
//   var answer = document.getElementById(id);
//   if (answer.style.display === "none") {
//     answer.style.display = "block";
//   } else {
//     answer.style.display = "none";
//   }
// }
//
// window.onload = function () {
//   const collapsibleSections = document.querySelectorAll("title1");
//   collapsibleSections.forEach(function (title1) {
//     const collapseContent = title1.querySelector(".collapse-content");

//     function toggleCollapse(event) {
//       //   event.stopPropagation(); // 阻止事件冒泡
//       collapseContent.classList.toggle("open");
//     }

//     iconButton.addEventListener("click", toggleCollapse);
//   });
// };
window.onload = function () {
  const collapsibleSections = document.querySelectorAll(".title1");
  collapsibleSections.forEach(function (section) {
    const collapseContent = section.nextElementSibling;

    function toggleCollapse() {
      collapseContent.classList.toggle("open");
    }

    section.addEventListener("click", toggleCollapse);
  });
};
