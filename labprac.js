/*var num="23617";
let arr=[];
for(let s of num){
    arr.push(parseInt(s))
}
console.log(arr);

const sum =arr.reduce((prev,current) => { 
    return prev+current})

console.log(sum);*/

var num="23617";
let arr=[];
for(let s of num){
    arr.push(parseInt(s))
}
console.log(arr);
sum=0;
const result=arr.map((a){

    if (a%2==0){
        sum=sum+1;
    }
    return sum;
})
console.log(result);



