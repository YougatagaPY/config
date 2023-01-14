const budgets = document.querySelectorAll("h2");
const tables = document.querySelectorAll("table");

for (let i = 0; i < budgets.length; i++) {
  budgets[i].addEventListener("click", function() {
    const budget = this.textContent;
    for (let j = 0; j < tables.length; j++) {
      if (budget === "Budget 500-600 Euro" && tables[j].id === "config-500") {
        tables[j].style.display = "table";
      } else if (budget === "Budget 1000 Euro" && tables[j].id === "config-1000") {
        tables[j].style.display = "table";
      } else {
        tables[j].style.display = "none";
      }
    }
  });
}
