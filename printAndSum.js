function printAndSum (start, end){
    let sum = 0;
    let row = '';
    for (let i = start; i <= end ;i++){
        row += `${i} `;
        sum += i;
    }
    console.log(row);
    console.log(`Sum: ${sum}`);
}
printAndSum (-1, 60);