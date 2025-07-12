



let promise1 = new Promise((resole, reject) => {
    let sucess = true;
    if (sucess) {
        resole("I am then message");
    }
    else {
        reject("Rejected");
    }

    
});