document.write("optional #1 <br>");
var x=parseInt(prompt("optional #1 Enter first number"));
var y=parseInt(prompt("optional #1 Enter second number"));
if(x>y) document.write("Hello World");
else document.write("GoodBye");
document.write("<hr>");


document.write("optional #2 <br>");
var x1=parseInt(prompt("optional #2 Enter first number"));
var y1=parseInt(prompt("optional #2 Enter second number"));
var z1=parseInt(prompt("optional #2 Enter third number"));
var s=x1*y1*z1;
if(s<0) alert("- SIGN , ("+s+")");
else alert("+ SIGN , ("+s+")");
document.write(s);
document.write("<hr>");


document.write("optional #3 <br>");
var a=[];
for(var i=0;i<3;i++){
    a[i]=prompt("optional #3 enter index # "+ (i+1));
}
for(var i=a.length-1;i>=0;i--){
    document.write(a[i]+" , ");
}
document.write("<hr>");


document.write("optional #4 <br>");
var arr=[];
var max=-100;
for(let i=0;i<5;i++){
    arr[i]=parseInt(prompt("optional #4 enter index # "+ (i+1)));
    document.write(arr[i]," , ");
    if(arr[i]>max) max=arr[i];
}
document.write("Maximum Number "+max);
alert("Maximum Number "+max);
document.write("<hr>");
