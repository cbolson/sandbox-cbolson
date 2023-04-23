function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <a href='https://www.cbolson.com/'>
          <img
            src='./assets/logo-cbolson.png'
            alt='cbolson logo'
            width='80'
            height='80'
          />
        </a>
      </div>
      <h1 className='header__title'>Sandbox</h1>
    </header>
  );
}

export default Header;
