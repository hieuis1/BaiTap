// bai 1

const salaryOneDay = 100.000;
let day = 9;
let salary = day * salaryOneDay;
console.log(salary)

// bai 2

let a = [1,2,3,4,6];
let sum = 0;
for( let i = 0 ; i< a.length ; i++){
   sum+= a[i];
}
sum /= a.length;
console.log(sum);



//bai 3

const USD = 23.500;
let Vnd = 2;
let change = Vnd * USD;
console.log(change);


//bai 4

let chieuDai = 10;
let chieuRong = 10;
let dientich = chieuDai * chieuRong;
let chuvi = (chieuDai+chieuRong ) * 2;
console.log(chuvi)
console.log(dientich)


//bai 5
let num = 25
let tong = Math.floor((num % 10) + (num/10))
console.log(tong)
