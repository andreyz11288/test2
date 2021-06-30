import { Link } from 'react-router-dom'
import s from './Benefits.module.scss'
import './Benefits.scss'
import ContentsOneText from './ContentsOneText'
import ContentsTwoText from './ContentsTwoText'
import ContentsThreeText from './ContentsThreeText'
import { useState } from 'react'

export default function Benefits() {
  const [state, setstate] = useState('one')

  return (
    <section className={s.benefitsSection}>
      <h1>Bringing the benefits of multiple assays into one</h1>
      <p>
        Helix’s Exome+® assay has been carefully optimized to provide the
        benefits of lcWGS, whole exome sequencing, microarrays, and targeted
        panels — all in one assay.
      </p>
      <ul className={s.benefitsLink}>
        <li>
          <Link
            className="benefitsLinkLi"
            id="one"
            to=""
            onClick={() => {
              setstate('one')
              const one = document.getElementById('one')
              const two = document.getElementById('two')
              const three = document.getElementById('three')
              one.classList.add('benefitsLinkActive')
              two.classList.remove('benefitsLinkActive')
              three.classList.remove('benefitsLinkActive')
            }}
          >
            Targeted Panels
          </Link>
        </li>
        <li>
          <Link
            className="benefitsLinkLi"
            id="two"
            to=""
            onClick={() => {
              setstate('two')
              const one = document.getElementById('one')
              const two = document.getElementById('two')
              const three = document.getElementById('three')
              one.classList.remove('benefitsLinkActive')
              two.classList.add('benefitsLinkActive')
              three.classList.remove('benefitsLinkActive')
            }}
          >
            Whole Exome Sequencing
          </Link>
        </li>
        <li>
          <Link
            className="benefitsLinkLi"
            id="three"
            to=""
            onClick={() => {
              setstate('three')
              const one = document.getElementById('one')
              const two = document.getElementById('two')
              const three = document.getElementById('three')
              one.classList.remove('benefitsLinkActive')
              two.classList.remove('benefitsLinkActive')
              three.classList.add('benefitsLinkActive')
            }}
          >
            lcWGS and Microarrays
          </Link>
        </li>
      </ul>
      <div className={s.benefitsContents}>
        {state === 'one' && <ContentsOneText />}
        {state === 'two' && <ContentsTwoText />}
        {state === 'three' && <ContentsThreeText />}
      </div>
    </section>
  )
}
