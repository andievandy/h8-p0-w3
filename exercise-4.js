function dataHandling2(inputArr) {
    inputArr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    inputArr.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(inputArr);

    var tglLahirArr = inputArr[3].split('/');

    var bulanStr = "";
    switch(tglLahirArr[1]) {
        case "01":
            bulanStr = "Januari";
            break;
        case "02":
            bulanStr = "Februari";
            break;
        case "03":
            bulanStr = "Maret";
            break;
        case "04":
            bulanStr = "April";
            break;
        case "05":
            bulanStr = "Mei";
            break;
        case "06":
            bulanStr = "Juni";
            break;
        case "07":
            bulanStr = "Juli";
            break;
        case "08":
            bulanStr = "Agustus";
            break;
        case "09":
            bulanStr = "September";
            break;
        case "10":
            bulanStr = "Oktober";
            break;
        case "11":
            bulanStr = "November";
            break;
        case "12":
            bulanStr = "Desember";
            break;
    }
    console.log(bulanStr);

    tglLahirArrSorted = tglLahirArr.slice();
    console.log(tglLahirArrSorted.sort(function (a,b) {
        return Number(b) - Number(a);
    }))

    console.log(tglLahirArr.join('-'));

    console.log(inputArr[1].slice(0, 15));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */