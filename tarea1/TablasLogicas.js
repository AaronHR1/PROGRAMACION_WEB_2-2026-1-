let valores1=[0,0,1,1];
let valores2=[0,1,0,1];

var a;
var b;

console.log("COMPUERTA AND");
for(let i=0;i<4;i++){
    a=valores1[i];
    b=valores2[i];
    
    console.log("" + a + "  " + b + "  " + (a*b));
    
}

console.log("COMPUERTA OR");
for(let i=0;i<4;i++){
    a=valores1[i];
    b=valores2[i];
    
    if(a==0 && b==0){
        console.log("" + a + "  " + b + "  0" );
    }else{
        console.log("" + a + "  " + b + "  1" );
    }
}

