let compra = parseInt(prompt("Que desea comprar? \n 1. Alfajor $80 \n 2. Gaseosa $100 \n 3. Sandwich de J&Q $150 \n 4. Caramelos $50 \n 0. FINALIZAR COMPRA"));
let total = 0;
let alfajor = 80;
let gaseosa = 100;
let sandwich = 150;
let caramelos = 50;

while(compra != "0"){  
    switch (compra){
        case 1 :
            total = total + alfajor;
        break;
        case 2 :
            total = total + gaseosa;
        break;
        case 3 :
            total = total + sandwich;
        break;
        case 4 :
            total = total + caramelos;
        break;
        default :
            alert("No elegiste algún producto de la lista");
        break;
    }
    compra = parseInt(prompt("Que desea comprar? \n 1. Alfajor $80 \n 2. Gaseosa $100 \n 3. Sandwich de J&Q $150 \n 4. Caramelos $50 \n 0. FINALIZAR COMPRA"));
}
alert("Tenes que pagar: $" + total);
alert("!Gracias! Vuelva pronto");