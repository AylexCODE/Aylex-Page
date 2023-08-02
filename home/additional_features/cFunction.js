const messageSending = document.querySelector(".submitBtn");
const contactMe = document.getElementById("contact"),
    message = document.getElementById("message");
    
const sendMessage = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_8w6ijrh", "template_gj0i6sl", "#contact", "pM2BwZy6Juq5Ofm8F")
    .then(() => {
        message.textContent = "Message sent successfully.";
        
        setTimeout(() => {
            message.textContent = "Thank you! & Take care. ❤️";
        }, 5000)

        setTimeout(() => {
            message.textContent = " ";
        }, 7500)
        
        contactMe.reset ()
    }, () => {
        message.textContent = "Message not sent (service error)";
        
        setTimeout(() => {
            message.textContent = " ";
        }, 5000)
    })
}

contactMe.addEventListener("submit", sendMessage);
contactMe.addEventListener("submit", function(){
    message.textContent = "Sending Message please wait.";
})
