// buka tutup menu
function toggleMenu(){
    var headerMenu =  document.getElementById('main-menu');

    if(headerMenu.className == 'show') {
        // jika menu terbuka, tutup menu
        headerMenu.className = 'hide';
    }else {
        // jika menu tertutup, buka menu
        headerMenu.className = 'show';
    }
}

// Submit event form

// // get event form element
// var eventForm = document.getElementById('event_form');

// // detect when form is submitted
// eventForm.addEventListener("submit", function(e){
//     e.preventDefault();

//     // get email value
//     var email = document.getElementById('email_address').value;

//     // get full name value
//     var fullname = document.getElementById('full-name').value;

//     // get birth date value
//     var birthdate = document.getElementById('birth_date').value;

//     // get gender value
//     var gender = document.getElementById('gender').value;

//     // get ToS
//     var tos = document.getElementById('tos').value;

//     var message = '';
//     var formValid = false;

//     // check if all forms is filled
//     if(email == '' || fullname == '' || birthdate == '' || gender == '' || tos == ''){
//         // check if certain form is unfilled
//         message = 'Please fill all forms!';
//         formValid = false;
//     }else {
//         // check if all forms if filled


//         //check email form
//         if(email.length <= 5) {
//             // check if email less than 5 characters
//             message = 'Please fill the email form correctly!';
//             formValid = false;
//         }else {
//             // if email more than 5 character
//             if(email.includes('@')){
//                 // if email includes @ character
//                 formValid = true;
//             }else {
//                 // if email not includes @ character
//                 message = 'Email value must contain @ character';
//                 formValid = false;
//             }
//         }

//         // check full name form
//         if(fullname.length <= 5){
//             // check if full name is less than 5 characters
//             message = 'Please fill the full name form correctly';
//             formValid = false;
//         }else {
//             //check if full name more than 5 characters
//             if(formValid == true){
//                 formValid = true;
//             }
//         }

//         // check birth date
//         if(new Date(birthdate).getTime() <= new Date().getTime()){
//             // check if birth date less than current date
//             if(formValid == true){
//                 formValid = true;
//             }
//         }else {
//             // check if birth date more than current date (invalid)
//             formValid = false;
//             message = 'Please fill the correct birth date!';
//         }

//         // check agree value
//         if(tos == 'agree'){
//             if(formValid == true){
//                 formValid = true;
//             }
//         }else {
//             formValid = false;
//             message = 'Please click agree before you submit the data';
//         }

//         if(formValid){
//             // if all forms is valid
//             message = 'Successfully submit data!';
//         }
//     }

//     alert(message);
// });

// detect if user click agree
var agreeButton = document.getElementById('agree_area');

// detect if user click disagree
var disagreeButton = document.getElementById('disagree_area');

// detect when user click the agree area
// agreeButton.addEventListener("click", function(e){
//     e.preventDefault();

//     // get agree area value
//     var agreeValue = agreeButton.getAttribute('data-value');
    
//     // assign agree value into ToS hidden form
//     var tos = document.getElementById('tos');
//     tos.value = agreeValue;

//     agreeButton.classList.add('tos-agree');
//     disagreeButton.classList.remove('tos-disagree');
// });

// // detect when user click the agree area
// disagreeButton.addEventListener("click", function(e){
//     e.preventDefault();

//     // get agree area value
//     var disagreeValue = disagreeButton.getAttribute('data-value');
    
//     // assign agree value into ToS hidden form
//     var tos = document.getElementById('tos');
//     tos.value = disagreeValue;

//     agreeButton.classList.remove('tos-agree');
//     disagreeButton.classList.add('tos-disagree');
// });

// membuat sidebar
$('.sidebar-toggle').click(function(){
    if($('.sidebar-toggle').hasClass('active-sidebar')){
        // tutup sidebar
        $('.sidebar-toggle').removeClass('active-sidebar');
        $('.main-sidebar').animate({
            left: '-20rem',
        }, 300);

        $('.sidebar-toggle').animate({
            left: '0rem',
        }, 300);
    }else {
        // buka sidebar
        $('.sidebar-toggle').addClass('active-sidebar');
        $('.main-sidebar').animate({
            left: '0rem',
        }, 300);

        $('.sidebar-toggle').animate({
            left: '20rem',
        }, 300);
    }
});