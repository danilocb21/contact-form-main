function showError(errorElement, errorMessage) {
  document.querySelector("." + errorElement).classList.add("display-error");
  document.querySelector("." + errorElement).innerHTML = errorMessage;
}

function clearError() {
  let errors = document.querySelectorAll(".error");
  for (let error of errors) {
    error.classList.remove("display-error");
  }
  errors = document.querySelectorAll("input");
  for (let error of errors) {
    error.classList.remove("display-error");
  }
  errors = document.querySelectorAll("textarea");
  for (let error of errors) {
    error.classList.remove("display-error");
  }
}

function isValid(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

let form = document.forms["contact-form"];
form.addEventListener("submit", function (event) {
  clearError();
  let isFormCorrect = true;

  if (form["first-name"].value === "") {
    showError("first-name-error", "This field is required");
    form["first-name"].classList.add("display-error");
    isFormCorrect = false;
    event.preventDefault();
  }
  if (form["last-name"].value === "") {
    showError("last-name-error", "This field is required");
    form["last-name"].classList.add("display-error");
    isFormCorrect = false;
    event.preventDefault();
  }
  if (form.email.value === "") {
    showError("email-error", "This field is required");
    form["email"].classList.add("display-error");
    isFormCorrect = false;
    event.preventDefault();
  } else if (!isValid(form.email.value)) {
    showError("email-error", "Please enter a valid email address");
    form["email"].classList.add("display-error");
    isFormCorrect = false;
    event.preventDefault();
  }
  if (form.querytype.value == "") {
    showError("radiobox-error", "Please select a query type");
    isFormCorrect = false;
    event.preventDefault();
  }
  if (form.message.value == "") {
    showError("message-error", "This field is required");
    form["message"].classList.add("display-error");
    isFormCorrect = false;
    event.preventDefault();
  }
  if (!form.checkbox.checked) {
    showError(
      "checkbox-error",
      "To submit this form, please consent to being contacted"
    );
    isFormCorrect = false;
    event.preventDefault();
  }

  if (isFormCorrect) {
    document.querySelector(".success").classList.add("display-success");
    event.preventDefault();
  }
});

document.querySelectorAll(".radiobox input[type='radio']").forEach((radio) => {
  radio.addEventListener("change", (event) => {
    document.querySelectorAll(".radiobox").forEach((radiobox) => {
      radiobox.classList.remove("active");
    });

    const radiobox = event.target.closest(".radiobox");
    if (radiobox) {
      radiobox.classList.add("active");
    }
  });
});
