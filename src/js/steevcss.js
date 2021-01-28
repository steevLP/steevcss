var code = document.querySelectorAll("code");

code.forEach(c => {
    let code = c.innerHTML.toString();
    var output = "";
    for(let i = 0; i < code.length; i++){
        switch(code.charAt(i)){
            default: output += code.charAt(i); break;
            case ">": output += "&gt;"; break;
            case "<": output += "&lt;"; break;
            case "&": output += "&amp;"; break;
            case "\"": output += "&quot;"; break;
        }
    }
    c.innerHTML = output;
})