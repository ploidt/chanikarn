jQuery(document).ready(function($) {
    $('#command').focusWithoutScrolling();
    $('#command').keyup(function(e) {
        if (e.keyCode == 13) {
            submit();
        }
    });
});

var submit = function() {
    var command = document.getElementById("command").value;
    document.getElementById("command").value = '';
    var outputel = document.getElementById("output");
    var div = document.createElement("div");
    div.innerHTML = "[chanikarn]: " + command;
    div.setAttribute('class','console-log');
    outputel.appendChild(div);
    if(command === '/exp'){
      var divExp = document.createElement("div");
      divExp.innerHTML = "[chanikarn]: --------------- Experience ---------------";
      divExp.setAttribute('class','console-log');
      outputel.appendChild(divExp);
      tableCreate();
    // }else if(command === '/edu'){
    //   var divEdu = document.createElement("div");
    //   divEdu.innerHTML = "[chanikarn]: " + command;
    //   outputel.appendChild(divEdu);
    }else{
      var divError = document.createElement("div");
      divError.innerHTML = "[chanikarn]: command not found";
      divError.setAttribute('class','console-log');
      outputel.appendChild(divError);
    }

};

$.fn.focusWithoutScrolling = function(){
  var x = window.scrollX, y = window.scrollY;
  this.focus();
  window.scrollTo(x, y);
};

function tableCreate() {
  var body = document.getElementById("output");
      tbl  = document.createElement('table');
  tbl.setAttribute('class','exp-table');

  var tr = tbl.insertRow();
  createCell(tr,'From');
  createCell(tr,'Until');
  createCell(tr,'Company');
  createCell(tr,'Position');
  var tr1 = tbl.insertRow();
  createCell(tr1,'May/2013');
  createCell(tr1,'PRESENT');
  createCell(tr1,'Freelance');
  createCell(tr1,'Web Developer');
  var tr2 = tbl.insertRow();
  createCell(tr2,'Dec/2014');
  createCell(tr2,'PRESENT');
  createCell(tr2,'อาหารคลีน Facebook Page');
  createCell(tr2,'Admin');
  var tr3 = tbl.insertRow();
  createCell(tr3,'May/2016');
  createCell(tr3,'July/2016');
  createCell(tr3,'Exzy Company Limited');
  createCell(tr3,'Software Engineer Intern');
  var tr4 = tbl.insertRow();
  createCell(tr4,'May/2015');
  createCell(tr4,'July/2015');
  createCell(tr4,'Gaylord Texan Resort');
  createCell(tr4,'Server');

  body.appendChild(tbl);
}

function createCell(tr,text) {
  var td = tr.insertCell();
  td.appendChild(document.createTextNode(text));
  td.style.border = '1px dashed #000';
}
