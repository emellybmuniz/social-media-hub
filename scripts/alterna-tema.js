const alternaTemaBotao = document.getElementById("btn-tema");
const corpoDoDocumento = document.body;
const temaSalvo = localStorage.getItem("tema");


alternaTemaBotao.addEventListener("click", function() {
    corpoDoDocumento.classList.toggle("tema-escuro");

    if (corpoDoDocumento.classList.contains("tema-escuro")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
});

if (temaSalvo === "escuro") {
    corpoDoDocumento.classList.add("tema-escuro");

}