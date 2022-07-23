function cau1(){

//  var sum=0
//     for(var n=1;sum<10000;n++){
//         var sum=sum+n
        
//     }
// //    result.innerHTML = "số nguyên dương nhỏ nhất là:"
//     document.getElementById('result').innerHTML = sum
var i = 0
    var total = 0
    do {
        i++
        total += i
    } while (total<10000)
    document.getElementById('result1').innerHTML = ("số nguyên dương nhỏ nhất là :"+ i)

}

function cau2(){
    var numberX = document.getElementById('numberX').value * 1
    var numberN = document.getElementById('numberN').value * 1
    var S=0
    var n=0
    
    do {
        n++
       S+= Math.pow(numberX,n)
    } while ( n<numberN )

    document.getElementById('result2').innerHTML = S
}




function cau3(){
    var number = document.getElementById('number').value * 1
    var n = 1
    var factorial = 1
    do {
        n++
        factorial = n*factorial
    } while (n < number)

    document.getElementById('result3').innerHTML = factorial
}


function cau4(){
    // var main1=document.getElementById('main1')
    // var main2=document.getElementById('main2')
    // var main3=document.getElementById('main3')
    
    
    for (var i=0;i<=10;i++){
        
    if (i % 2 !== 0 && i == 1) {
      
      main1.innerHTML="Div lẻ"
      
      document.getElementById("main1").style.backgroundColor = "blue";
    } else if (i % 2!== 0 && i == 3) {
        main3.innerHTML="Div lẻ"
      document.getElementById("main3").style.backgroundColor = "blue";
    } else if (i % 2!== 0 && i == 5) {
        main5.innerHTML="Div lẻ"
      document.getElementById("main5").style.backgroundColor = "blue";
    } else if (i % 2!== 0 && i == 7) {
        main7.innerHTML="Div lẻ"
      document.getElementById("main7").style.backgroundColor = "blue";
    } else if (i % 2!== 0 && i == 9) {
        main9.innerHTML="Div lẻ"
      document.getElementById("main9").style.backgroundColor = "blue";
    } else if (i % 2 === 0 && i == 2) {
        main2.innerHTML="Div chẵn"
      document.getElementById("main2").style.backgroundColor = "red";
    } else if (i % 2 === 0 && i == 4) {
        main4.innerHTML="Div chẵn"
      document.getElementById("main4").style.backgroundColor = "red";
    } else if (i % 2 === 0 && i == 6) {
        main6.innerHTML="Div chẵn"
      document.getElementById("main6").style.backgroundColor = "red";
    } else if (i % 2 === 0 && i == 8) {
        main8.innerHTML="Div chẵn"
      document.getElementById("main8").style.backgroundColor = "red";
    } else {
        main10.innerHTML="Div chẵn"
      document.getElementById("main10").style.backgroundColor = "red";
    }
        // if (i % 2===0 && i==1){
        //     main1.innerHTML="Div chẵn"
        //     main1.style.background="red"
        //     // document.getElementById('main').innerHTML 
          
        // } else if (i % 2!==0) {
        //     main2.innerHTML="Div lẻ"
        //     main2.style.background="blue"
        //     // document.getElementById('main').innerHTML 
        // }

        // if (i % 2===0){
        //     main2.innerHTML="Div chẵn"
        //     main2.style.background="red"
        //     // document.getElementById('main').innerHTML 
          
        // } else if (i % 2!==0) {
        //     main2.innerHTML="Div lẻ"
        //     main2.style.background="blue"
        //     // document.getElementById('main').innerHTML 
        // }

        // if (i % 2===0){
        //     main3.innerHTML="Div chẵn"
        //     main3.style.background="red"
        //     // document.getElementById('main').innerHTML 
          
        // } else if (i % 2!==0) {
        //     main3.innerHTML="Div lẻ"
        //     main3.style.background="blue"
        //     // document.getElementById('main').innerHTML 
        // }
}
}
