function inverso(s){
  var a = s.split('');
  var b = [];

  for(x = a.length; x >= 0; x--) {
    b.push(a[x]);
  }

  var c = b.join("");

  console.log(c);
}
