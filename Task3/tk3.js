const convertFah = () => {
    var celcius = parseFloat(document.querySelector("#celcius").value);

    var fahResult = (1.8 * celcius)+32;
    var a = fahResult.toFixed(2);

    document.querySelector("#celcius").value = celcius;
    document.querySelector("#fahrenheit").value = a;

}

const convertCel = () =>{
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);

    var celResult = (fahrenheit - 32)/1.8;
    var b = celResult.toFixed(2);

    document.querySelector("#celcius").value = b;
    document.querySelector("#fahrenheit").value = fahrenheit;
}

const reset = () =>{
    document.querySelector("#celcius").value = " ";
    document.querySelector("#fahrenheit").value = " ";

}