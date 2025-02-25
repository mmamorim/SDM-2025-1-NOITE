
function rg() {
    return Math.random().toString().slice(3, 12)
}

function cpf() {
    const rnd = (n) => Math.round(Math.random() * n);
    const mod = (base, div) => Math.round(base - Math.floor(base / div) * div)
    const n = Array(9).fill('').map(() => rnd(9));

    let d1 = n.reduce((total, number, index) => (total + (number * (10 - index))), 0)
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;

    let d2 = (d1 * 2) + n.reduce((total, number, index) => (total + (number * (11 - index))), 0)
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;

    return `${n.join('')}${d1}${d2}`
}