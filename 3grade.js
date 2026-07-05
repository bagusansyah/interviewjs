const name = "Bagus";
const nilai = 87;

function grade(Nilai) {
    
    if (Nilai < 0 || Nilai > 100) {
        return "Nilai tidak valid";
    } else if (Nilai >= 90) {
        return "A";
    } else if (Nilai >= 80) {
        return "B";
    } else if (Nilai >= 70) {
        return "C";
    } else if (Nilai >= 60) {
        return "D";
    }  else if (Nilai < 60) {
        return "E";
    }
}

function status(Nilai) {
    if (Nilai >= 70) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}

console.log(`Nama : ${name}\nNilai : ${nilai}\nGrade : ${grade(nilai)}\nStatus : ${status(nilai)}`);