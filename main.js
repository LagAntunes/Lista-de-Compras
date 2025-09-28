// Elementos do formulário
const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

// Remove o comportamento padrão do formulário
form.onsubmit = (event) => {
  event.preventDefault();
};

// Atualiza o estado do botão
input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    button.classList.remove("disabled");
  } else {
    button.classList.add("disabled");
  }
});

// Adiciona um item à lista
button.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  list.classList.add("active");

  const li = document.createElement("li");
  li.innerHTML = `
      <div class="checkbox">
        <input type="checkbox" />
      </div>
      <p class="paragraph">${input.value}</p>
      <button type="button" id="delete"></button>
    `;
  list.appendChild(li);
  input.value = "";
  button.classList.add("disabled");
});

// Remove um item da lista e exibe uma mensagem de confirmação
list.addEventListener("click", (event) => {
  if (event.target.id === "delete") {
    event.target.parentElement.remove();

    const message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = `
      <p class="label">O item "${event.target.parentElement.children[1].textContent}" foi removido da lista</p>
    `;
    list.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 3000);
    if (list.querySelectorAll("li").length < 1) {
      list.classList.remove("active");
    }
  }
});
