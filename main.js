const campoSenha = document.querySelector("#campo-senha");
const botoes = document.querySelectorAll(".parametro-senha__botao");
const tamanhoTexto = document.querySelector(".parametro-senha__texto");

let tamanho = 12;

function gerarSenha() {
    const caracteres =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

                let senha = "";

                    for (let i = 0; i < tamanho; i++) {
                            senha += caracteres.charAt(
                                        Math.floor(Math.random() * caracteres.length)
                                                );
                                                    }

                                                        campoSenha.value = senha;
                                                        }

                                                        botoes[0].addEventListener("click", () => {
                                                            if (tamanho > 4) {
                                                                    tamanho--;
                                                                            tamanhoTexto.textContent = tamanho;
                                                                                    gerarSenha();
                                                                                        }
                                                                                        });

                                                                                        botoes[1].addEventListener("click", () => {
                                                                                            if (tamanho < 30) {
                                                                                                    tamanho++;
                                                                                                            tamanhoTexto.textContent = tamanho;
                                                                                                                    gerarSenha();
                                                                                                                        }
                                                                                                                        });

                                                                                                                        document.getElementById("ano-atual").textContent =
                                                                                                                        new Date().getFullYear();

                                                                                                                        gerarSenha();