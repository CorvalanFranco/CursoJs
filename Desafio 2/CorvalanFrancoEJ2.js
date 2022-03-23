// Comprando 2 productos tenes un %10 de descuento y mas de 2 un %20 en el total de la compra

let compra = parseInt(prompt("Que desea comprar? \n 1. Remera $1000 \n 2. zapatillas $15000 \n 3. short $1200 \n 4. camisa $1500 \n 0. FINALIZAR COMPRA"));
let total = 0, remera = 1000, zapatillas = 15000, short = 1200, camisa = 1500;
let ContadorItems = "0";
const descuento = descuentoT => total * descuentoT;
while(compra != "0"){  
    switch (compra){
        case 1 :
            total = total + remera;
        break;
        case 2 :
            total = total + zapatillas;     
        break;
        case 3 :
            total = total + short;
        break;
        case 4 :
            total = total + camisa;
        break;
        default :
            alert("No elegiste algún producto de la lista");
        break;
    }
    if(compra == 1 || compra == 2 || compra == 3 || compra == 4){
        compra = parseInt(prompt("Que desea comprar? \n 1. Remera $1000 \n 2. zapatillas $15000 \n 3. short $1200 \n 4. camisa $1500 \n 0. FINALIZAR COMPRA \n Articulos: " + ++ContadorItems + "\n pagas " + total ));
    }else{
        compra = parseInt(prompt("Que desea comprar? \n 1. Remera $1000 \n 2. zapatillas $15000 \n 3. short $1200 \n 4. camisa $1500 \n 0. FINALIZAR COMPRA \n Articulos: " + ContadorItems + "\n pagas " + total));
    }
    
}
if(ContadorItems == 2){
    alert("Tenes un descuento del %10 \n pagas: $" + (total - descuento(0.10)));
}else if(ContadorItems >= 3){
    alert("Tenes un descuento del %20 \n pagas: $" + (total - descuento(0.20)));
}
alert("!Gracias! Vuelva pronto");