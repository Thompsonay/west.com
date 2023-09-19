var dropWrap = document.getElementById('drop');
var dropClose = document.getElementById('dropClose');

dropWrap.onclick = function(){
   var dropdown = document.getElementById('dropdown');
   dropdown.style.display = "block";
};
dropClose.onclick = function(){
   var dropdown = document.getElementById('dropdown');
   dropdown.style.display = "none";
};
   
