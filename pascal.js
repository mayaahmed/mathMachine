
var output= document.getElementById('outputDiv');

run();

function run(){ 
    var n = parseInt (document.input.input.value);
	if (isNaN (n))
	   document.write("Error reading input.");
       if(n>0){
        pascalTriangle(n);}else{
           document.write("Error! Type an integer greater than zero");}
} //  end of function run





 function pascalTriangle(n){
  
  var size=0;
  var pascalArray = new Array(n);
  var string ="";

  for(i=0; i<n; i++) {
    size = i+1;
    pascalArray[i]= new Array(size);}
  pascalArray[0][0]=1;
 

  if(n>1){
    pascalArray[1][0]=1;
    pascalArray[1][1]=1;
    for(i=2; i<n; i++){
      for(j=1; j<i; j++)
	pascalArray[i][j] =  pascalArray[i-1][j-1]+ pascalArray[i-1][j];
      pascalArray[i][0]=1;
      pascalArray[i][i]=1;
    } }

for(i=0;i<n;i++){
  for(j=0;j<pascalArray[i].length;j++){
    string=string+pascalArray[i][j]+" ";
    output.innerHTML= string;
   
    console.log(output.innerHTML);
}
string=string+ "<br/>";
output.innerHTML= string;
}
} // end of function pascalTriangle


