import s from './Header.module.scss'
import logo from '../../Image/logo.png'
import cart from '../../Image/cart-icon.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={s.headerSection}>
      <section className={s.header}>
        <div className={s.announcement}>
          <p>
            We’ve updated our policies. {''}
            <a className={s.headerAnnouncementLink} href="/" target="_blank">
              Learn more
            </a>
          </p>
        </div>
        <nav className={s.headerNav}>
          <div className={s.headerNavDiv}>
            <a href="/">
              <img src={logo} className={s.headerLogo} alt="logo" height="25" />
            </a>
            <ul className={s.headerLink}>
              <li>
                <Link className={s.headerNavLink} to="/">
                  Population Health
                </Link>
              </li>
              <li>
                <Link className={s.headerNavLink} to="/">
                  DNA Test
                </Link>
              </li>
              <li>
                <Link className={s.headerNavLink} to="/">
                  Register Kit
                </Link>
              </li>
              <li>
                <Link className={s.headerNavLink} to="/">
                  Sing In
                </Link>
              </li>
              <li>
                <Link className={s.headerNavLink} to="/">
                  <img src={cart} alt="cart" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </header>
  )
}
