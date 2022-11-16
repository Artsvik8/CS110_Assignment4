const char = '+';

let printPluses = (n) => {
    for (let i = 1; i <= n ; i++) {
        console.log(' '.repeat(n - i) + '+'.repeat(i));
    }
}

printPluses(9)