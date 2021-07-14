let checkBoxTab=[];
let allCheckboxs = document.querySelector(".form__checkbox--container").children;

for(element of allCheckboxs){checkBoxTab.push(element)}
checkBoxTab.forEach(element=>{
  let checkBox = element.children[0].children[0];
  element.addEventListener("click",()=>{
    if(checkBox.checked === true){ 
      checkBox.checked = false;
      element.classList.remove("checked");}
    else{
     checkBox.checked = true;
     element.classList.add("checked");
     }
  });
});


const policy = document.getElementsByName("Policy")[0];
const policyDiv = document.querySelector(".contact-form__policy span")
policyDiv.addEventListener("click",()=>{
  policy.checked === true ? policy.checked = false : policy.checked = true;
});

$( "form" ).submit(function() {
          email_wzor = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(($(".form__input--email").val()=='')){
            $('.form__input--email').addClass("error");
          }    
          else{
            $('.form__input--email').removeClass("error");
          }       
          if(($(".form__input--name").val()=='')){
            $('.form__input--name').addClass("error");
          }
          else{
            $('.form__input--name').removeClass("error");
          }   
          if(document.querySelector(".form__input--policy").checked === false){
            $('.contact-form__policy').addClass("error");
          }
          else{
            $('.contact-form__policy').removeClass("error");
          }    
          if(($(".form__input--email").val()=='')||($(".form__input--name").val()=='') || (document.querySelector(".form__input--policy").checked === false)){
            $('.user-message-text').text("Please check the required fields");
              return false;
          }
          else{
            $('.user-message-text').addClass("succes")
            $('.user-message-text').text("Thank You! Mail sent succesfull");
            return true;
          }   
          
  });

