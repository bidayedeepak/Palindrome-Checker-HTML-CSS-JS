let user_input = document.querySelector('.user-input');
let check_btn = document.querySelector('.check-btn');
let message = document.querySelector('.message');

let input_value;
let checkPalindrome = () => {
    let reverseText = input_value.split("").reverse().join("");
    if(input_value == reverseText) {
        message.innerHTML = `Yes, <span style="color:#b156fe">'${input_value}'</span> is a palindrome!`;
        message.style.display = 'block';
    } else {
        message.innerHTML = `No, <span style="color:#b156fe">'${input_value}'</span> is not a palindrome!`;
        message.style.display = 'block';
    }
}

user_input.addEventListener('keyup', ()=>{
    input_value = user_input.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(input_value) {
        return check_btn.classList.add('active');
    }
    message.style.display = 'none';
    check_btn.classList.remove('active');
});

check_btn.addEventListener('click', checkPalindrome);