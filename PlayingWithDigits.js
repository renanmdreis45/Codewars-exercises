function digPow(n, p){
  let k = -1;
  let aux = n;

  let digs = [];

  while(aux > 1) {
    digs.push(parseInt(aux%10));
    aux = aux/10;
  }

  let quant_digs = digs.length;

  p += quant_digs - 1;

  let sum = 0;

  digs.map((dig) => {
    sum += dig**p;
    p -= 1;
  })

  if(sum%n === 0) k = parseInt(sum/n);

  return k;
}
