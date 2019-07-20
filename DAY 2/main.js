    var num1 = [1,2,",3",",4",",5",",6",",7",",8",",9",",10"];
    var numODD = "";
    var numEVEN = "";
    var comma = " ";
    for(var i =0; i <=num1.length -1; i++){
        if(i %2 === 0 ){
        numODD += num1[i] + "";
        
        }
        else{ (i%3 === 0)
        numEVEN +=  num1[i] +"" ;
        }
        
        
      }
      console.log(numODD);
      console.log(numEVEN);

    


// Used Method Reference from stackoverflow below
//       var lst = [1,2,3,4,5];
//       var output = "";
    
//     for(var i =0; i <= lst.length; i++){
//         if(i %2 === 0 ){
//         output += lst[i] + " ";
//     }
// }
//     console.log(output);
    