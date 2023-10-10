const form = document.getElementById("registrationForm");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.querySelector('input[name="gender"]:checked');
const submitButton = document.getElementById("submit_button");
const resetButton = document.getElementById("reset_button");

resetButton.addEventListener("click", function () {
  form.reset();

  document.querySelectorAll(".error").forEach(function (error) {
    error.textContent = "";
  });

  document.getElementById("submittedInfo").style.display = "none";
});

// Bắt sự kiện submit của form
form.addEventListener("submit", function (e) {
  let valid = true;

  // Kiểm tra họ và tên
  if (fullName.value.trim() === "") {
    document.getElementById("name_error").textContent =
      "Họ và Tên không được để trống";
    valid = false;
  } else {
    document.getElementById("name_error").textContent = "";
  }

  // Kiểm tra email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById("email_error").textContent = "Email không hợp lệ";
    valid = false;
  } else {
    document.getElementById("email_error").textContent = "";
  }

  // Kiểm tra số điện thoại
  const phonePattern = /^[0-9]+$/;
  if (!phonePattern.test(phone.value)) {
    document.getElementById("phone_error").textContent =
      "Số Điện Thoại chỉ được chứa số";
    valid = false;
  } else {
    document.getElementById("phone_error").textContent = "";
  }

  // Kiểm tra giới tính
  if (!male.checked && !female.checked && !other.checked) {
    document.getElementById("gender_error").textContent =
      "Vui lòng chọn giới tính";
    valid = false;
  } else {
    document.getElementById("gender_error").textContent = "";
  }

  // Nếu valid = false, ngăn chặn sự kiện submit
  if (!valid) {
    e.preventDefault();
  }
  if (valid) {
    e.preventDefault();
    const genderInputs = document.getElementsByName("gender");
    let gender = "";

    for (const input of genderInputs) {
      if (input.checked) {
        gender = input.value;
        break; // Dừng khi tìm thấy radio đã chọn
      }
    }
    document.getElementById("submittedInfo").style.display = "block";
    document.getElementById("FullName").textContent =
      "Họ và Tên: " + fullName.value;
    document.getElementById("Email").textContent = "Email: " + email.value;
    document.getElementById("Phone").textContent =
      "Số Điện Thoại: " + phone.value;
    document.getElementById("Gender").textContent =
      "Giới Tính: " + gender;
    console.log(gender);
  }
});
