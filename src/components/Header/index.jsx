import { CartIcon } from './cartWidget';

export const Header = () => {  
  return (
    <header>
      <nav>
        <div className="container-logo">
          <img id="logo-head" src="../files/radiohead.png" alt="Logo Radiohead"/>
          <img id="logo-head" src="../files/radiohead-dark.png" alt="Logo Radiohead"/>
        </div>
        <div id="header__buttons">
          <CartIcon />
          <p/>
          <button id="switch__body" class="switch__body">
            <span><i className="fa-solid fa-sun"></i></span>
            <span><i className="fa-solid fa-moon"></i></span>
          </button>
        </div>
      </nav>
    </header>
  )
}