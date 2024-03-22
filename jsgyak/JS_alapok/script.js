window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    esemenykezeles1();
    esemenykezeles2();
    esemenykezeles3();
});

function elemekElerese1() {
    let TART =  $("#f1").html()
    console.log(TART)
}
function elemekElerese2() {
    const ELEM = $("#ide")
    ELEM.html("Jó reggelt!");
}
function elemekElerese3() {
    const CLASSKIIR = document.getElementsByName(".ide")
    CLASSKIIR[0].innerHTML = `<p> Jó reggelt! </p>`;
}
function elemekElerese4() {
    const LISTAELEM = $(".lista").html()
    let txt = ""
    txt += `<ul>`
    for (let index = 0; index < 5; index++) {
        let randomSzam = Math.random()*20+10
        txt += `<li>(Math.floor[randomSzam])</li>`
    }
    txt += `</ul>`
    LISTAELEM.html[txt];
}
function esemenykezeles1() {
    
}
function esemenykezeles2() {
    
}
function esemenykezeles3() {
    
}