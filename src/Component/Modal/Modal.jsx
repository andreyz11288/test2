import s from './Modal.module.scss'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const Modal = () => {
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (
        e.target.tagName !== 'INPUT' &&
        e.target.tagName !== 'LABEL' &&
        e.target.tagName !== 'SPAN'
      ) {
        const qq = document.querySelector('#checkMenu')
        if (qq.checked) {
          qq.checked = false
        }
      }
    })
    return document.removeEventListener('click', (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL') {
        var qq = document.querySelector('#checkMenu')
        if (qq.checked) {
          qq.checked = false
        }
      }
    })
  }, [])

  return (
    <>
      <div className={s.wrapper}>
        <input type="checkbox" id="checkMenu" className={s.checkMenu} />
        <label className={s.labelCheck} htmlFor="checkMenu">
          {/* <span className={s.spanCheck}>Menu</span> */}
        </label>
        <div className={s.burgerLineFirst}></div>
        <div className={s.burgerLineSecond}></div>
        <div className={s.burgerLineThird}></div>
        <div className={s.burgerLineFourth}></div>
        <nav className={s.mainMenu}>
          <NavLink to="/" className={s.link} activeClassName={s.navLinkactive}>
            Population Health
          </NavLink>
          <NavLink to="/" className={s.link} activeClassName={s.navLinkactive}>
            DNA Test
          </NavLink>
          <NavLink to="/" className={s.link} activeClassName={s.navLinkactive}>
            Register Kit
          </NavLink>
          <NavLink to="/" className={s.link} activeClassName={s.navLinkactive}>
            Sing In
          </NavLink>
          <div className={s.link}></div>
        </nav>
      </div>
    </>
  )
}
export default Modal
