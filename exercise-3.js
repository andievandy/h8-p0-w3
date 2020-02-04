
function dataHandling(inputArr) {
    for(var i = 0; i < inputArr.length; i++) {
        console.log('Nomor ID: ' + inputArr[i][0]);
        console.log('Nama Lengkap: ' + inputArr[i][1]);
        console.log('TTL: ' + inputArr[i][2] + ' ' + inputArr[i][3]);
        console.log('Hobi: ' + inputArr[i][4]);
        console.log();
    }
}

//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input);