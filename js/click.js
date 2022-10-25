const addClass = (elemento) =>
  document.querySelector(elemento).classList.toggle("active");

const click = (e) => {
  console.log(e.target);
  if (e.target.matches(".toggle") || e.target.matches(".toggle ion-icon"))
    addClass(".main-nav");

  if (e.target.matches(".toggle") || e.target.matches(".toggle ion-icon"))
    addClass("main");
  
  if (e.target.matches(".profile") || e.target.matches(".profile ion-icon") )
  addClass(".profile__menu-container");

  if (e.target.matches(".form__link")) addClass(".container__form");
};

export { click };
