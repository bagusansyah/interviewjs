const firstNum = 55;
const secondNum = 0;

function kalkulator(firstNum, secondNum) {
    const tambah = firstNum + secondNum;
    const kurang = firstNum - secondNum;
    const kali = firstNum * secondNum;
    if(secondNum === 0){
        const bagi = "Tidak bisa dibagi dengan 0";
        return {tambah,kurang,kali,bagi};
    }else{
        const bagi = firstNum / secondNum;
        return {tambah,kurang,kali,bagi};
    }
}

console.log(kalkulator(firstNum, secondNum));