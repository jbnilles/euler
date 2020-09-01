export default function Euler () {

}

Euler.prototype.getSum = function () {
  let sum = 0;
  for(let i = 0; i < 1000; i++){
    if(i%3 == 0){
      sum += i;
    }
    else if (i%5 == 0){
      sum += i;
    }
    
  }
  return sum;
}
Euler.prototype.getFibonacci = function () {
  let result = [1, 2];
  let x = 0;
  for(let i = 2; x < 50; i++){
    x = result[i - 1] + result[i - 2];
    if(x < 50){
      result.push(x);
    }
  }
  let sum = 0;
  for(let i = 0 ; i < result.length; i++ )
  {
    if(2 % result[i] === 0 )
    {
      result[i] += sum;
    }
  }
  return sum;
}

