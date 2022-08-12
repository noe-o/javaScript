//Toma el valor de la cuota que ingresa el usuario y calcula el incremento del 5% cada mes, durante 12 meses.
let a = parseInt(prompt("Ingrese el valor de cuota inicial"))

for (let i = 1; i <= 12; i++) {
    alert("El valor de la cuota " + i + " es: " + a);
    a=parseFloat(a*1.05)
}