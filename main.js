let inputSatu = document.getElementById('inputSatu');
let inputDua = document.getElementById('inputDua');
let hasilAkhir = document.getElementById('hasilAkhir');

const penjumlahan = (inputSatu, inputDua) => {
    let jumlah = parseInt(inputSatu) + parseInt(inputDua);
    hasilAkhir.value = jumlah;
}

const pengurangan = (inputSatu, inputDua) => {
    let jumlah = parseInt(inputSatu) - parseInt(inputDua);
    hasilAkhir.value = jumlah;
}

const perkalian = (inputSatu, inputDua) => {
    let jumlah = parseInt(inputSatu) * parseInt(inputDua);
    return hasilAkhir.value = jumlah;
}

const pembagian = (inputSatu, inputDua) => {
    let jumlah = parseInt(inputSatu) / parseInt(inputDua);
    return hasilAkhir.value = jumlah;
}

const clearInputSatu = () =>{
    inputSatu.value = '';
}

const clearInputDua = () =>{
    inputDua.value = '';
}

const clearAllInput = () =>{
    inputSatu.value = '';
    inputDua.value = '';
    hasilAkhir.value = '';
}