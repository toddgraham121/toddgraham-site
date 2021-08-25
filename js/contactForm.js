$("#contactForm").on("submit", function (form) {
  $("#contactModal").modal("show");
  $("#contactForm")[0].reset();
  form.preventDefault();
});
