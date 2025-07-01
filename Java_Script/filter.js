let arr=[12,89,56,4,9,0,12,3,5,7,58];
 let ans=arr.filter((number) => {
    if(number%2==0){
        return true;

    }
    else{
        return false;
    }

});
console.log(ans);