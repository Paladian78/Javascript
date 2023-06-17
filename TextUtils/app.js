window.onload = () =>{
    
    const textbox = document.getElementById("textbox");
    textbox.addEventListener('keyup', textDetail);
    textDetail();

    function textDetail(){
        const content = textbox.value;
        let remText = content.replace(/\s/g, "")
        const arr = content.split(' ');
        const word = arr.filter(word => word !== '').length;

        const wordlen= document.getElementById("word");
        const letterlen= document.getElementById("letter");

        wordlen.innerText = "Word Count : " + word;
        letterlen.innerText = "Letter Count : "+ remText.length;
    }

    const clear = document.getElementById("clear");
    clear.addEventListener('click', (e) => {
        textbox.value = "";
        textDetail();
    })

    const reset = document.getElementById("reset");
    reset.addEventListener('click', (e) => {
        textbox.value = "Enter your text here";
        textDetail();
    })

    const uppercase = document.getElementById("uppercase");
    uppercase.addEventListener('click', (e) => {
        let val = textbox.value;
        textbox.value = val.toUpperCase();
    })

    const lowercase = document.getElementById("lowercase");
    lowercase.addEventListener('click', (e) => {
        let val = textbox.value;
        textbox.value = val.toLowerCase();
    })

    const capitalize = document.getElementById("capitalize");
    capitalize.addEventListener('click', (e) => {
        let val = textbox.value;
        var splitStr = val.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        textbox.value = splitStr.join(' ');
    })

    const copy = document.getElementById("copy");
    copy.addEventListener('click', (e) => {
        textbox.select();
        // textbox.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(textbox.value);
        alert("Copied to Clipboard");
    })

    const changecase = document.getElementById("changecase");
    changecase.addEventListener('click', (e) => {
        let val = textbox.value;
        var output = "";
        for (var i = 0; i < val.length; i++) {
            if(val[i].toUpperCase() === val[i].toLowerCase()){
                output += val[i];
            }
            else if(val[i] === val[i].toUpperCase()){
                output += val[i].toLowerCase();
            }
            else{
                output += val[i].toUpperCase();
            }
        }
        textbox.value = output;
    })

    const remspace = document.getElementById("remspace");
    remspace.addEventListener('click', (e) => {
        let val = textbox.value;
        var output = "";
        for (var i = 0; i < val.length; i++) {
            if(val[i] === " "){
                continue;
            }
            else{
                output += val[i];
            }
        }
        textbox.value = output;
    })

    const remvowels = document.getElementById("remvowels");
    remvowels.addEventListener('click', (e) => {
        let val = textbox.value;
        var output = "";
        for (var i = 0; i < val.length; i++) {
            if(val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u" || val[i] === "A" || val[i] === "E" || val[i] === "I" || val[i] === "O" || val[i] === "U"){
                continue;
            }
            else{
                output += val[i];
            }
        }
        textbox.value = output;
    })

    const remconsonants = document.getElementById("remconsonants");
    remconsonants.addEventListener('click', (e) => {
        let val = textbox.value;
        var output = "";
        for (var i = 0; i < val.length; i++) {
            if(val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u" || val[i] === "A" || val[i] === "E" || val[i] === "I" || val[i] === "O" || val[i] === "U"){
                output += val[i];
            }
            else{
                continue;
            }
        }
        textbox.value = output;
    })

    const revsentence = document.getElementById("revsentence");
    revsentence.addEventListener('click', (e) => {
        let val = textbox.value;
        var output = "";
        var arr = val.split(' ');
        for (var i = arr.length-1; i >= 0; i--) {
            output += arr[i] + " ";
        }
        textbox.value = output;
    })

    const revword = document.getElementById("revword");
    revword.addEventListener('click', (e) => {
        let val = textbox.value;
        var output = "";
        var arr = val.split(' ');
        for (var i = 0; i < arr.length; i++) {
            var word = arr[i];
            var rev = "";
            for (var j = word.length-1; j >= 0; j--) {
                rev += word[j];
            }
            output += rev + " ";
        }
        textbox.value = output;
    })

}