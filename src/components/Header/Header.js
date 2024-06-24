import Logo from '../../img/Logo.svg';

import './Header.module.scss';

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" />
    </header>
  );
}

export default Header;
