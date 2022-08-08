const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Who are you?`, name=>{
    console.log(`Hello ${name}, Welcome.`)
    readline.close();
})