let saldo = 500000;

function cekSaldo() {
    return console.log(`Saldo sekarang : ${saldo}`);
}

function tarikUang(jumlah) {
    if (jumlah <= 0) {
        return console.log(`Jumlah tarik uang tidak valid.`);
    } else if (jumlah > saldo) {
        return console.log("Saldo tidak cukup.");
    } else {
        saldo -= jumlah;
        return console.log(`Berhasil tarik uang.\n\nSisa saldo : ${saldo}.`);
    }
}

function setorUang(jumlah) {
    if (jumlah <= 0) {
        return console.log(`Jumlah setor uang tidak valid.`);
    } else {
        saldo += jumlah;
        return console.log(`Berhasil setor.\n\nSaldo : ${saldo}.`);
    }
}

cekSaldo();
tarikUang(50000);
setorUang(10000);
cekSaldo();
tarikUang(-650000);
setorUang(-10000);
tarikUang(650000);
setorUang(0);