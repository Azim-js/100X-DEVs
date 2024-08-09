function asciiToBytes(asciiString){
    const arr =[];
    for(let i=0;i<asciiString.length;i++){
        const char = asciiString[i]; // "l".charCodeAt(0)
        arr.push(char.charCodeAt(0));
    }
    return new Uint8Array(arr);
}

const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray)

const str = "Hello";
const code = str.charCodeAt(0); // Get the code of the character at index 0
console.log(code); // Output will be 72, which is the ASCII code for 'H'

const byteArr= new Uint8Array([72, 101, 108, 108, 111]);
console.log(byteArr); // Uint8Array(5) [72, 101, 108, 108, 111]
