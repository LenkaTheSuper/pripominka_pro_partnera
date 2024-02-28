const dnes = dayjs();
document.body.innerHTML += `<p>dnes je: ${dnes.format('MM.DD.YYYY')}</p>`;

const denD = dayjs("2024-4-23")
document.body.innerHTML += `<p>naše roční výročí je: ${denD.format('MM.DD.YYYY')}</p>`

document.body.innerHTML += `<h3>UŽ JSME SPOLU ROK??</h3>`

if (dnes.isAfter(denD)) {
    document.body.innerHTML += `<p>ANO !!! <3 </p>`
} else {
    document.body.innerHTML += `<p>Ještě ne :( </p>`
}