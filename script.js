// Función para imprimir
function printSection(id) {
    var element = document.getElementById(id);
    var popupWin = window.open('', '_blank', 'width=600,height=600');
    popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + element.innerHTML + '</body></html>');
    popupWin.document.close();
  }