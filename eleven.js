
//1. prime number 
// prime number 2,3,5,7,11,13,17,19,23,29,31,37,41,43

let count =0;
let number = 31;
for(let i=1; i<=number; i++){
    if(number%i== 0){
        count++;
    }
}

if(count == 2){
    console.log("prime number " + number);
}
else{
    console.log ("not prime number "  + number);
}


//2. array ko print

let ar = [13,26,23,44,5,31,53,98,21,64];
console.log("size of array : " , ar.length);
console.log(ar[0])
console.log("******************************")
for(let i=0; i<ar.length; i++){
    console.log(ar[i]);
}

// 1+2+3+4+5+6+...+100
console.log("******************")
let sum =0;
for(let j=1; j<=10; j++){
    // sum = sum +j;
    sum +=j;
}

// 1^2 + 2^2  + 3^2 + 4^2 + 5^2 +... + 100^2
// 2^2  + 4^2  + 6^2 ... + 100^2
// 5! =>120 => 5*4*3*2*1
//array ko reverse [1,2,3,4,5] => [5,4,3,2,1]


// j = 1 , sum = 0 + 1 = 1 
// j = 2 , sum = 1 + 2 = 3 
// j = 3 , sum= 3+ 3 = 6 
// j = 4 , sum = 6+4 = 10 
// j = 5 , sum = 10+5 = 15
// j = 6 , sum = 15+6 = 21
// j= 7 , sum = 21+7 = 28
// j= 8 , sum = 28+8 = 36
// j= 9 , sum = 36+9 = 45
// j= 10, sum = 45+10 = 55
console.log(sum)

//3. array odd value print 
console.log("******************************")
for(let i=0; i<ar.length; i++){

    if(ar[i]%2 == 1){
        console.log(ar[i])
    }
}