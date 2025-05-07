function sumar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    }
    return a + b;
}

function restar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    }
    return a - b;
}

function multiplicar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    }
    return a * b;
}

function dividir(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    }
    if (b === 0) {
        throw new Error("División por cero no permitida");
    }
    return a / b;
}

// Ejemplo de uso interactivo
function calculadora() {
    const operacion = prompt("Elige una operación: sumar, restar, multiplicar, dividir");
    const num1 = parseFloat(prompt("Introduce el primer número:"));
    const num2 = parseFloat(prompt("Introduce el segundo número:"));

    try {
        let resultado;
        switch (operacion) {
            case "sumar":
                resultado = sumar(num1, num2);
                break;
            case "restar":
                resultado = restar(num1, num2);
                break;
            case "multiplicar":
                resultado = multiplicar(num1, num2);
                break;
            case "dividir":
                resultado = dividir(num1, num2);
                break;
            default:
                throw new Error("Operación no válida");
        }
        console.log(`El resultado de ${operacion} es: ${resultado}`);
    } catch (error) {
        console.error(error.message);
    }
}

// Llamar a la calculadora
calculadora();