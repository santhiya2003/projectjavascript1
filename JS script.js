function add(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c=a+b;
    document.getElementById("add").innerHTML = c;

}

 function sub(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c=a-b;
    document.getElementById("sub").innerHTML = c;
 }
 function mul(){
    var a= document.getElementById("n1").value;
    var b= document.getElementById("n2").value;
    var c=a*b;
    document.getElementById("mul").innerHTML=c;
}
 function div(){
    var a= document.getElementById("n1").value;
    var b= document.getElementById("n2").value;
    var c=a/b;
    document.getElementById("div").innerHTML=c;
}