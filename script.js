$(document).ready(function () {
  $("#alanImagePart1").click(function () {
    const imgsrc = $("#alanImagePart1").attr("src");

    if (imgsrc === "1a.jpg") {
      $("#alanImagePart1").attr("src", "1b.jpg");
    } else {
      $("#alanImagePart1").attr("src", "1a.jpg");
    }
  });
  $("#alanImagePart2").click(function () {
    const imgsrc = $("#alanImagePart2").attr("src");
    if (imgsrc === "2a.jpg") {
      $("#alanImagePart2").attr("src", "2b.jpg");
    } else {
      $("#alanImagePart2").attr("src", "2a.jpg");
    }
  });
  $("#alanImagePart3").click(function () {
    const imgsrc = $("#alanImagePart3").attr("src");
    if (imgsrc === "3a.jpg") {
      $("#alanImagePart3").attr("src", "3b.jpg");
    } else {
      $("#alanImagePart3").attr("src", "3a.jpg");
    }
  });
});
