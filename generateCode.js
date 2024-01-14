
const characters = "QWERTYUPASDFGHJKLZXCVBNM";
const digits = "0123456789";

function MakeCode(){
    let code = "";
    let randomL = "";
    let randomN = "";
    let firstV = "";
    let secondV = "";
    let flip = Math.floor(Math.random() * 2);
  

    for(let i = 0;i < 3; i++){
        randomL = characters.charAt(Math.floor(Math.random() * characters.length));
        randomN = digits.charAt(Math.floor(Math.random() * digits.length));
        if(flip == 0){
            firstV = randomL;
            secondV = randomN;
        }else{
            firstV = randomN;
            secondV = randomL;
        }
        code += firstV + secondV;
    }
    
    document.getElementById("code").innerHTML = code;
}