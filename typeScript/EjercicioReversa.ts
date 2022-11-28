function reversa(str:string): string{
    return str.split('').reverse().join('')
    }
     
    console.log(reversa('practica'));
    console.log(reversa('1 2 3 4 5 6'));