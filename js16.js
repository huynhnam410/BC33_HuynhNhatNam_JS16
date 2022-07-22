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
    var div_color=document.getElementById('div_color')
    
    
    for (var i=0;i<=10;i++){
        if (i % 2===0){
            div_color.innerHTML="Div chẵn"
            div_color.style.background="red"
            // document.getElementById('div_color').innerHTML 
          
        } else if (i % 3===0) {
            div_color.innerHTML="Div lẻ"
            div_color.style.background="blue"
            // document.getElementById('div_color').innerHTML 
        }
}
}
