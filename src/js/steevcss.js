var code = document.querySelectorAll("code");

// code embed
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
});

// TODO JavaScript Input value return
// Current way.. 
// -------------------------------------
// get input by getting the input object
// catch oninput event inside a function
// Handle it inside the function
// -------------------------------------