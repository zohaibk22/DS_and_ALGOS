const addUpTo = (num) => {
    let total = 0;
    for (let i = 0; i <= num; i++){
        total += i;
    }

    return total;
}

console.log(addUpTo(6))