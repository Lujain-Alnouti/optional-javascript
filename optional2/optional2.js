document.write("O1 <br>");
function cube(x){
    return x*x*x;
}
var a=parseInt(prompt(" O1 enter number"));
document.write("The number : "+a+" The cube : "+cube(a));
document.write("<hr>");

/*------------------------------------------------------------------ */

document.write("O2 <br>");
function canIGetADrivingLicense(a){
    if(a>=20) document.write("yes you can");
    else{
        var x=20-a;
        document.write("please come back after "+x+" years to get one");
    }
}
var a=parseInt(prompt("O2 enter number"));
canIGetADrivingLicense(a);
document.write("<hr>");

/*------------------------------------------------------------------ */

document.write("O3 <br>");
function same_length(a,b){
    if(a.lenght==b.length) document.write("True");
    else document.write("False");
}
var x=prompt("O3 enter first str");
var y=prompt("O3 enter second str");
same_length(x,y);
document.write("<hr>");
/*------------------------------------------------------------------ */
document.write("O4 <br>");
function longerString(a,b,c,d){
    
    var l1,l2,l;
    if(a.lenght>=b.lenght) {
        l1=a;
    }
    else{
        l1=b;
    }

     if(c.lenght>=d.lenght) {
        l2=c;
        
    }
    else{
        l2=d;
    }

    if(l1.lenght>=l2.lenght){ l=l1;}
    else l=l2;
    
    return l;
}
var x=prompt("O4 enter first str");
var y=prompt("O4 enter second str");
var z=prompt("O4 enter third str");
var j=prompt("O4 enter forth str");
document.write("Strings : "+x+" / "+y+" / "+z+" / "+j);
document.write("<br> String : "+longerString(x,y,z,j));

document.write("<hr>");

/*------------------------------------------------------------------ */

document.write("O5 <br>");
function full_name(a,b){
    document.write(a+" "+b);
}
var x0=prompt("O5 enter first name");
var y0=prompt("O5 enter second name");
full_name(x0,y0);
document.write("<hr>");
