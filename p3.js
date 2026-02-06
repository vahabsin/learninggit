var Usernumber = Number(prompt("Enter a number : " , 20))
var sum = 0

for (i=0 ; (Usernumber / 10) != 0 ; i++) {
    sum = sum + (Usernumber % 10)
   Usernumber = Math.floor(Usernumber / 10)
}
alert(sum)