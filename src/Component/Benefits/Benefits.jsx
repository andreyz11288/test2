import { Link } from 'react-router-dom'
import s from './Benefits.module.scss'
import './Benefits.scss'
import ContentsOneText from './ContentsOneText'
import ContentsTwoText from './ContentsTwoText'
import ContentsThreeText from './ContentsThreeText'
import Future from "../Future/Future";
import Future2 from "../Future2/Future2";
import Future3 from "../Future3/Future3";
import { useState } from 'react'

export default function Benefits() {
  const [state, setstate] = useState('one')


  const one = document.getElementById('one')
  const two = document.getElementById('two')
  const three = document.getElementById('three')

  if (state === 'one' && one) {
    one.classList.add('benefitsLinkActive')
    two.classList.remove('benefitsLinkActive')
    three.classList.remove('benefitsLinkActive')
  }

  if (state === 'two' && two) {
    one.classList.remove('benefitsLinkActive')
    two.classList.add('benefitsLinkActive')
    three.classList.remove('benefitsLinkActive')
  }

  if (state === 'three' && three) {
    one.classList.remove('benefitsLinkActive')
    two.classList.remove('benefitsLinkActive')
    three.classList.add('benefitsLinkActive')
  }

  return (<main>
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
            className="benefitsLinkLi benefitsLinkActive"
            id="one"
            to=""
            onClick={() => {
              setstate('one')
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
    {state === 'one' && <Future />}
    {state === 'two' && <Future2 />}
    {state === 'three' && <Future3 />}
  </main>
  )
}
