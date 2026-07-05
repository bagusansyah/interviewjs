export const product = [{
    name: "Laptop",
    harga: 10000000,
    qty: 1
}, {
    name: "Mouse",
    harga: 500000,
    qty: 2
}, {
    name: "Keyboard",
    harga: 1000000,
    qty: 1
}];

function lihatKeranjang() {
    for (let i = 0; i < product.length; i++) {
        console.log(`Nama Produk: ${product[i].name}`);
        console.log(`Harga Produk: ${product[i].harga}`);
        console.log(`Jumlah Produk: ${product[i].qty}`);
    }
}

function tambahProduk(nama, harga, qty) {
    product.push({
        name: nama,
        harga: harga,
        qty: qty
    })
}

function hapusProduk(nama) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].name === nama) {
            product.splice(i, 1);
            return;
        }
    }
}

function subTotal() {
    let total = 0;
    for (let i = 0; i < product.length; i++) {
        total += product[i].harga * product[i].qty;
    }
    return total;
}

function hitungPajak() {
    const total = subTotal ();
    const pajak = total * 0.11;
    return pajak;
}

function hitungDiskon() {
    const total = subTotal();
    if (total > 500000) {
        const diskon = total * 0.10;
        return diskon;
    } else {
        return 0;
    }
}

function hitungTotal() {
    const subtotal = subTotal();
    const pajak = hitungPajak();
    const diskon = hitungDiskon();
    const total = subtotal + pajak - diskon;
    return total;
}