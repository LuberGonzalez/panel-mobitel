const activeLink = () => {
  const lists = document.querySelectorAll(".mainn-menu-item");
  lists.forEach((list) => {
    list.classList.remove("hovered");
    this.classList.add("hovered");
  });

  console.log("first");

  lists.forEach((list) => {
    list.addEventListener("mouseover", activeLink);
  });
};



export { activeLink };
