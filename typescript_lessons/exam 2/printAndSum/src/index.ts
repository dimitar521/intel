function sumNums(startNum: number, endNum: number): void {
    let all = 0;
    let result = "";
    for ( let i = startNum; i <= endNum; i++) {
        result += i + " ";
        all += i;
    }
    console.log(result);
    console.log(`Sum: ${all}`);
}
sumNums(5, 10);
sumNums(0, 26);
sumNums(50, 60);