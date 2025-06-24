  function fazerLogin(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    // Lista de usuários válidos
    const usuarios = [
        { nome: "Leonardo", senha: "2025" },
        { nome: "Eder", senha: "2025" },
        { nome: "Matheus", senha: "2025" },
    ];

    // Verifica se o usuário e senha estão corretos
    const usuarioValido = usuarios.some(function (u) {
        return u.nome === usuario && u.senha === senha;
    });

    if (usuarioValido) {
        sessionStorage.setItem("usuarioLogado", "true");
        window.location.href = "ARENAPLus/canais.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}