function isEven(num) {
  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function factorial(num) {
  var retorno = num;
  for(x = num - 1; x >= 1; x--) {
    retorno += num * x;
    num = x;
  }
  return retorno;
}
