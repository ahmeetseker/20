var sonuc = document.getElementById("sonuc")

if (localStorage.getItem("count")) {
    sonuc.value = localStorage.getItem("count")
} else {
    localStorage.setItem("count", 0)
}

function arttir() {
    sonuc.value=Number(sonuc.value)+1;
    localStorage.setItem("count", sonuc.value)
}


function azalt() {
    sonuc.value=Number(sonuc.value)-1;
    localStorage.setItem("count", sonuc.value)
}


function sifirla() {
    sonuc.value=0
    localStorage.setItem("count", sonuc.value)
}




