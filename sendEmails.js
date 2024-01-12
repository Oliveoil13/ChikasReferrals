function sendReferral(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        receiver_email : document.getElementById("receiver_email").value,
    }
    emailjs.send("service_tcfwpic","template_wy03itk",parms).then(alert("Email Sent!!"))
}