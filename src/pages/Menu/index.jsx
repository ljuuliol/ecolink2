import './Menu.css';
export const Menu = () => {
    return(
        <header className="main-header-class" id="main-header">
        <div className="logo">
          <a href={"/Home"}>
            <img src="src/assets/LogoEcolink-semFundo.png" alt="logo" className="logo_img" />
          </a>
        </div>
        <nav className="navbar">
          <a href={"/Descartar"}>Descartar</a>
          <a href={"/Sobre"}>Sobre Nós</a>
          <a href={"/Cadastro"}>Cadastro</a>
          <a href={"/Login"}>Login</a>
        </nav>
      </header>
    )
}