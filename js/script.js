<script>

var link = document.querySelector(".modal-address-button");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback-close");
var login = popup.querySelector("[name=feedback_name]");
var email = popup.querySelector("[name=feedback_email]");
var form = popup.querySelector("form");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

if (!login.value || !email.value) {}
if () {}
</script>
