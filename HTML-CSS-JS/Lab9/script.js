// Ex1
function isHexColor(value) {
    // Regular expression to match a valid hexadecimal color value
    var hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
    return hexColorRegex.test(value);
}
function checkHex() {
    var valueCheck = document.getElementById("valueCheck");
    var result = isHexColor(valueCheck.value);
    var res = document.getElementById("res");
    res.innerHTML = result;
}

// Ex2
function isFirstCharacterUpperCase(str) {
    var regex = /^[A-Z]/;
    return regex.test(str);
}

function checkisFirstCharacterUpperCase() {
    var stringCheck = document.getElementById("stringCheck");
    var result = isFirstCharacterUpperCase(stringCheck.value);
    var res = document.getElementById("res2");
    res.innerHTML = result;
}

//Ex3
function isEmail(email) {
    //Regular expression to match a valid email
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}

function checkisEmail() {
    var emailCheck = document.getElementById("emailCheck");
    var result = isEmail(emailCheck.value);
    var res = document.getElementById("res3");
    res.innerHTML = result;
}

//Ex4

function processString(inputString) {
    // Step 1: Remove whitespace from the start and end positions
    inputString = inputString.trim();

    // Step 2: Convert 2 or more spaces to 1
    inputString = inputString.replace(/ {2,}/g, ' ');

    // Step 3: Exclude new lines with a leading space
    inputString = inputString.replace(/\n /g, '\n');

    return inputString;
}

function validString() {
    var stringCheck = document.getElementById("stringValid");
    var result = processString(stringCheck.value);
    var res = document.getElementById("res4");
    res.innerHTML = result;
}

//Ex5

document.getElementById("highlightLink").addEventListener("mouseover", function() {
  // Lấy phần tử đoạn văn bản và nội dung HTML của nó
  var paragraph = document.getElementById("paragraph");
  var paragraphHtml = paragraph.innerHTML;

  // Sử dụng biểu thức chính quy để tìm và bọc các từ in đậm trong thẻ span có lớp 'highlight'
  paragraphHtml = paragraphHtml.replace(/<b>(.*?)<\/b>/g, '<span class="highlight"><b>$1</b></span>');

  // Cập nhật nội dung đoạn văn bản với các từ nổi bật
  paragraph.innerHTML = paragraphHtml;
});

document.getElementById("highlightLink").addEventListener("mouseout", function() {
  // Khôi phục nội dung HTML ban đầu khi chuột rời khỏi liên kết
  var paragraph = document.getElementById("paragraph");
  paragraph.innerHTML = "Đây là một đoạn văn bản <b>mẫu</b> với các từ <b>in đậm</b> mà bạn có thể <b>nổi bật</b>.";
});
