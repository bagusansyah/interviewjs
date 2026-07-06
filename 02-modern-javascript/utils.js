function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'Rp.',
    });
    return formatter.format(amount);
}

function formatName(name) {
    return name.toUpperCase();
}

export { formatCurrency, formatName };