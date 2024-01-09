function calcular() {
  var tn = window.document.getElementById('tn');
  var tab = window.document.getElementById('seltab');
  var res = window.document.getElementById('res');
  var n1 = parseInt(tn.value);
  var c = 1; // Declare c aqui fora do if/else
  
  if (tn.value.length == 0) {
    window.alert('[Erro 404]!!!!');
  } else {
      tab.innerText = ''
      if (n1 >= 0) {
        while (c <= 10) {
          var item = document.createElement('option'); // serve para criar a lista de opções
          item.text = `${n1} x ${c} = ${n1 * c}`; // item.text coloca os valores na lista 
          item.value = `tab${c}`
          tab.appendChild(item);
          c++;
        }
      } else {
        while (c <= 10) {
          var item = document.createElement('option');
          item.text = `${n1} x ${c} = ${n1 * c}`;
          item.value = `tab${c}`
          tab.appendChild(item)
          c++;
      }
    } 
  }
}
