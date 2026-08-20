const f1 = () => {
    console.log( "F1");
 };

 const f2 = () => {
    console.log( "F2");
 };

 const f3 = () => {
    console.log( "f3");
 };

 function main (){
   console.log("main 😊");
   setTimeout(f1, 0);
    setImmediate(f2);
    
    f3();
 console.log( "end 😂");
 }
 main ();



 //it has some status during the 