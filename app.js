const mainKeycode = document.querySelector('#keycode');
const secondKeycode = document.querySelector('#eventWhich');
const eventKey = document.querySelector('#eventKey');
const eventCode = document.querySelector('#eventCode');


const keycode = () =>{     
    let keycode = event.keyCode;
    mainKeycode.innerHTML = keycode;
    secondKeycode.innerHTML = keycode;
    key();
    code();
}


const key = () =>{
    let key = event.key;
    eventKey.innerHTML = key;
}


const code = () =>{
    let code = event.code;
    eventCode.innerHTML = code;
    
}

