const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul");
const imp = document.querySelector(".imp");

btn.addEventListener("click", () => {
  const che = document.createElement("input");

  const li = document.createElement("li");
  li.textContent = imp.value;
  li.classList.add("li");
  ul.append(li);
  imp.value = "";
  const del = document.createElement("button");
  del.textContent = "x";
  che.type = "checkbox";
  che.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  li.prepend(che);
  li.append(del);
  del.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});
