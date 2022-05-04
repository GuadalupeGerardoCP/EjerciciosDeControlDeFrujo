var menu = prompt("Ingresa el numero de la figura que deseas calcular su area y perimetro:\n 1. Cuadrado \n 2. Rectangulo \n 3. Circulo \n 4. Triangulo");

switch (menu) {
    case "1":
        let lado = prompt("Ingresa el valor de un lado del cuadrado:");
        let perimetro = lado*4;
        let area = lado*lado;
        console.log("El perimetro del cuadrado de lado ", lado, " es de: ", perimetro);
        console.log("El area del cuadrado de lado ", lado, " es de: ", area);
        break;
    case "2":
        let largo = prompt("Ingresa el valor del largo del rectangulo:");
        let ancho = prompt("Ingresa el valor del ancho del rectangulo:");
        let perimetroRec = (largo*2) + (ancho*2);
        let areaRec = largo*ancho;
        console.log("El perimetro del rectangulo de largo ", largo, " y ancho ", ancho, " es de: ", perimetroRec);
        console.log("El area del rectangulo de largo ", largo, " y ancho ",ancho , " es de: ", areaRec);
        break;
    case "3":
        const pi = 3.1416;
        let radio = prompt("Ingrese el valor del radio del circulo: ");
        let perimetroCi = 2*pi*radio;
        let areaCi = pi*radio*radio;
        console.log("El perimetro del circulo de radio ", radio, " es de: ", perimetroCi);
        console.log("El area del circulo de radio ", radio, " es de: ", areaCi);
        break;
    case "4":
        let base = prompt("Ingrese el valor de la base del triangulo:");
        base = Number(base);
        let altura = prompt("Ingrese el valor de la altura del triangulo:");
        let lado1 = prompt("Ingrese el valor de uno de los lados del triangulo diferente de la base:");
        lado1 = Number(lado1);
        let lado2 = prompt("Ingrese el valor del otro lado del triangulo diferente de la base:");
        lado2 = Number(lado2);
        let perimetroTri = lado1 + lado2 + base;
        let areaTri = (base*altura)/2;
        console.log("El perimetro del triangulo de lados ", lado1, " ,", lado2, " y base ", base, " es de: ", perimetroTri);
        console.log("El area del triangulo con base ", base, " y altura" ,altura," es de: ", areaTri);
        break;
    default:
        console.log("El valor ingresado no es valido. :(");
}