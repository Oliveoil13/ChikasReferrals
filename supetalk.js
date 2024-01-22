
//listen to if the form is submitted and then grab the email submitted and then send it to python 

function SearchCode(){
    event.preventDefault();
    let emailToSearch = document.querySelector("#searchEmail");
    document.getElementById('data').innerHTML = emailToSearch.value;
    emailToSearch.value = '';
}