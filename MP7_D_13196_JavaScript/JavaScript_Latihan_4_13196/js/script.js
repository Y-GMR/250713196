function fn_ValForm() {
    var sMsg = "";
    var info = "";
    var pilihan = "";
    var emailCheck = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (document.getElementById("nama").value == "") {
        sMsg += "\nAnda belum mengisikan nama!";
    }
    if (document.getElementById("email").value == "") {
        sMsg += "\nAnda belum mengisikan email!";
    }
    if (document.getElementById("umur").value == "") {
        sMsg += "\nAnda belum mengisikan umur!";
    }

    if (document.getElementById("umur").value <= 25) {
        info += "Peserta Mahasiswa";
    } else {
        info += "Peserta Umum";
    }

    if (document.getElementById("kategori").value == "") {
        sMsg += "\nAnda belum mengisikan kategori!";
    } else if (document.getElementById("kategori").value == "W") {
        pilihan += "Workshop";
    } else if (document.getElementById("kategori").value == "S") {
        pilihan += "Seminar";
    } else {
        pilihan += "Lomba Coding";
    }

    if (!emailCheck.test(document.getElementById("email").value)) {
        sMsg += "\nEmail invalid!";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        alert("Terima kasih "+document.getElementById("nama").value+"! Anda terdaftar di acara "+pilihan+" "+info);
        return true;
    }
}