var inputvalue = document.getElementById('display');

function clearall(){
    inputvalue.value= '';
}

function getvalue(e){
  inputvalue.value += e
}

function answer(){
   var x = eval(inputvalue.value);
   inputvalue.value=x;
}