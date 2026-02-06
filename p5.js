var sum = 0
for (i=0 ; i<5 ; i++) {
    //sum = sum + Number(prompt("please enter a " + (i+1) + " number : "))
    var number = Number(prompt("please enter a " + (i+1) + " number : "))
    sum = sum + number
}
alert(sum / 5)