/*변수 선언*/


var id = document.querySelector('#id');

var pw1 = document.querySelector('#pw1');
var pwMsg = document.querySelector('#alertTxt');
var pwImg1 = document.querySelector('#pw1_img1');

var pwMsgArea = document.querySelector('.int_pass');

var userName = document.querySelector('#name');

var email = document.querySelector('#email');

var mobile = document.querySelector('#mobile');

var error = document.querySelectorAll('.error_next_box');

var siginBtn = document.querySelector('#btnJoin');


/*이벤트 핸들러 연결*/


id.addEventListener("focusout", checkId);
pw1.addEventListener("focusout", checkPw);

userName.addEventListener("focusout", checkName);
email.addEventListener("focusout", isEmailCorrect);
mobile.addEventListener("focusout", checkPhoneNum);





/*콜백 함수*/


function checkId() {
    var idPattern = /[a-zA-Z0-9_-]{8,20}/;
    if(id.value === "") {
        error[0].innerHTML = "필수 정보입니다.";
        error[0].style.display = "block";
    } else if(!idPattern.test(id.value)) {
        error[0].innerHTML = "8~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
        error[0].style.display = "block";
    } else {
        error[0].innerHTML = "사용 가능한 아이디 입니다!";
        error[0].style.color = "#08A600";
        error[0].style.display = "block";
    }
}

function checkPw() {
    var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
    if(pw1.value === "") {
        error[1].innerHTML = "필수 정보입니다.";
        error[1].style.display = "block";
    } else if(!pwPattern.test(pw1.value)) {
        error[1].innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
        pwMsg.innerHTML = "사용불가";
        pwMsgArea.style.paddingRight = "93px";
        error[1].style.display = "block";
        
        pwMsg.style.display = "block";
        pwImg1.src = "not_use_icon.png";
    } else {
        error[1].style.display = "none";
        pwMsg.innerHTML = "안전";
        pwMsg.style.display = "block";
        pwMsg.style.color = "#03c75a";
        pwImg1.src = "good.png";
    }
}

function checkName() {
    var namePattern = /[a-zA-Z가-힣]/;
    if(userName.value === "") {
        error[2].innerHTML = "필수 정보입니다.";
        error[2].style.display = "block";
    } else if(!namePattern.test(userName.value) || userName.value.indexOf(" ") > -1) {
        error[2].innerHTML = "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
        error[2].style.display = "block";
    } else {
        error[2].style.display = "none";
    }
}

function isEmailCorrect() {
    var emailPattern = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;

    if(email.value === ""){ 
        error[3].style.display = "none"; 
    } else if(!emailPattern.test(email.value)) {
        error[3].style.display = "block";
    } else {
        error[3].style.display = "none"; 
    }

}

function checkPhoneNum() {
    var isPhoneNum = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/;

    if(mobile.value === "") {
        error[4].innerHTML = "필수 정보입니다.";
        error[4].style.display = "block";
    } else if(!isPhoneNum.test(mobile.value)) {
        error[4].innerHTML = "형식에 맞지 않는 번호입니다.";
        error[4].style.display = "block";
    } else {
        error[4].style.display = "none";
    }

    
}

// join(onclick btnJoin, function() {
// if( checkId(), checkPw(), checkName(), isEmailCorrect(), checkPhoneNum() === “”){
//     배열 선언
//     if(유효성 검사 함수 한개씩 === “”){
//          배열 = “안된 유효성 검사 이름”
//     } ^ 유효성 검사 다 해주기

//    alert(배열이름+가 비어있어요!)

// }


/* join(onclick, function() {
if( 유효성 검사 함수들 === “”){
    배열 선언
    if(유효성 검사 함수 한개씩 === “”){
         배열 = “안된 유효성 검사 이름”
    } ^ 유효성 검사 다 해주기

   alert(배열이름+가 비어있어요!)

}
*/