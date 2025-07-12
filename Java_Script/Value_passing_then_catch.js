


let promises2 = new Promise((resole, reject) => {
    let sucess = false;
    if (sucess) {
        resole("Fulfilled");
    }
    else {
        reject("Rejected");
    }
});
    
promises1.then((message) => {
    console.log("First Msg:" + message);
    return 20;
})
promises1.then((message) => {
    console.log("Sec Msg:" + message);
    return 30;
})
    promises1.then((message) => {
    console.log("Third Msg:" + message);
    return 40;
    })
        promises1.then((message) => {
    console.log("Fourth Msg:" + message);
    return 50;
    })
    
    
    
    
    
    
    
    .catch((error) => {
    console.log("Error", error);
})
