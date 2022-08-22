const Header = () => {  
  return (
    <header>
      <nav>
        <div class="container-logo">
          <img id="logo-head" src="../files/radiohead.png" alt="Logo Radiohead"/>
          <img id="logo-head" src="../files/radiohead-dark.png" alt="Logo Radiohead"/>
        </div>
        <div id="header__buttons">
          <img id="cart" src="../files/shopping-cart.png" alt="cart"/>
          <img id="cart-dark" src="../files/shopping-cart-dark.png" alt="cart"/>
          <p></p>
          <button id="switch__body" class="switch__body">
            <span><i class="fa-solid fa-sun"></i></span>
            <span><i class="fa-solid fa-moon"></i></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

  /* HTML
  <header>
    <nav>
      <div class="container-logo">
        <a href="../../index.html"><img src="../files/radiohead.png" alt="Logo Radiohead " id="logo-head"></a>
        <a href="../../index.html"><img src="../files/radiohead-dark.png" alt="Logo Radiohead dark " id="logo-head-dark"></a>
      </div>
  
      <div id="header__buttons">
        <img id="cart" src="../files/shopping-cart.png" alt="cart">
        <img id="cart-dark" src="../files/shopping-cart-dark.png" alt="cart">
        <p></p>
        <button class="switch__body" id="switch__body">
          <span><i class="fa-solid fa-sun"></i></span>
          <span><i class="fa-solid fa-moon"></i></span>
        </button>
      </div>
    </nav>
  </header>
  */



  /* CSS
  .container-menu {
  margin-top: 24.5px;
  background-color: $primary-color;
  height: 213px;
  body.dark & {
    background-color: $primary-dark-color;
  }
}

.div-menu {
  display: flex;
  justify-content: center;
  a:hover {
    color: $light-color;
    background-color: $dark-color;
  }
}

.menu {
  background-color:rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color:$light-color;
  font-size: 1.8vh;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 1.5vh;
  border-width: 0.3vh;
  border-color: rgb(253, 247, 247);
  border-style: solid;
  width: 26vh;
  height: 3.3vh;
  transition: background-color 0.5s;
  font-size: 1.7vh;
}

@media screen and (max-width: 1200px) {
  #logo-head {
    height: 90px;
  }

  #arrow {
    display: none;
  }

  .container-menu {
    height: 253px;
  }
}

@media screen and (max-width: 768px) {
  .div-menu {
    flex-direction: column;
    align-items: center;
  }
  
  .menu {
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 2vh;
    width: 100%;
    height: 3.5vh;
    font-size: 1.7vh;
  }
  .container-menu {
    height: 31vh;
  }
}
  */

export default navBar;