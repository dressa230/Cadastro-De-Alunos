// Selecionando elementos
const btn = document.getElementById("btnAdicionar");
const tabelaBody = document.getElementById("tabela-body");

// Evento principal
btn.addEventListener("click", adicionarAluno);

// Função principal
function adicionarAluno() {
    const nome = document.getElementById("nome").value.trim();
    const n1 = document.getElementById("nota1").value;
    const n2 = document.getElementById("nota2").value;
     const n3 = document.getElementById("nota3").value;


    // Validação
    if (!nome || n1 === "" || n2 === ""|| n3 ==="") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const nota1 = parseFloat(n1);
    const nota2 = parseFloat(n2);
    const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);

    const situacao = media >= 6 ? "Aprovado" : "Reprovado";

    // Criar linha da tabela
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${nota3}</td>
        <td>${media}</td>
        <td>${situacao}</td>
    `;

    // Adicionar cor conforme situação
    tr.classList.add(situacao.toLowerCase());

    tabelaBody.appendChild(tr);

    // Limpar campos
    document.getElementById("form").reset();
}