import { Link } from 'react-router-dom'
import s from './Benefits.module.scss'
import './Benefits.scss'
import ContentsOneText from './ContentsOneText'
import ContentsTwoText from './ContentsTwoText'
import ContentsThreeText from './ContentsThreeText'
import Future from '../Future/Future'
import Future2 from '../Future2/Future2'
import Future3 from '../Future3/Future3'
import Slider from '../Slider/Slider'
import { useState } from 'react'
import copy from "../../Image/copy.svg";

export default function Benefits() {
  const [state, setstate] = useState('one')
  const [tabs, setTabs] = useState('tabs')

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

  const tabs1 = document.getElementById('tabsLink1')
  const tabs2 = document.getElementById('tabsLink2')
  const tabs3 = document.getElementById('tabsLink3')
  console.log(tabs);

  if (tabs === 'tabs' && tabs1) {
    tabs1.classList.add('activeTabs')
    tabs2.classList.remove('activeTabs')
    tabs3.classList.remove('activeTabs')
  }

  if (tabs === 'tabs2' && tabs2 ) {
    tabs1.classList.remove('activeTabs')
    tabs2.classList.add('activeTabs')
    tabs3.classList.remove('activeTabs')
  }

  if (tabs === 'tabs3' && tabs3) {
    tabs1.classList.remove('activeTabs')
    tabs2.classList.remove('activeTabs')
    tabs3.classList.add('activeTabs')
  }

  return (
    <main>
      <section className={s.benefitsSection}>
        <h1>Bringing the benefits of multiple assays into one</h1>
        <p>
          Helix’s Exome+® assay has been carefully optimized to provide the
          benefits of lcWGS, whole exome sequencing, microarrays, and targeted
          panels — all in one assay.
        </p>
        <div className={s.mobileNone}>
          <Slider />
        </div>
        <div className={s.desktopNone}>
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
        </div>
      </section>
      <div className="container">
        <h2>A future proofed assay</h2>
            <p>There are several advantages to running panels in the presence of a whole exome, including flexible test design, flexible re-testing, and increased functionality.</p>
        <div className='containerTabs1 '>
          <div id='tabsLink1' className='tabsLink1 activeTabs' onClick={() => { setTabs('tabs') }} > <h2>Flexible test design</h2>
          <img src={copy} alt='copy'/></div>
           <div  className='contentTabs1 '><Future /></div>
        </div>
        <div className='containerTabs2'>
          <div id='tabsLink2' className='tabsLink2' onClick={() => {setTabs('tabs2')}}><h2>Sequence once, query often</h2>
          <img src={copy} alt='copy' /></div>
         <div  className='contentTabs2'> <Future2 /></div>
        </div>
        <div className='containerTabs3'>
          <div id='tabsLink3' className='tabsLink3' onClick={() => { setTabs('tabs3') }}><h2>Comprehensive PGx</h2>
          <img src={copy} alt='copy' /></div>
         <div  className='contentTabs3'> <Future3 /></div>
        </div>

  </div>
      {/* {state === 'one' && <Future />}
      {state === 'two' && <Future2 />}
      {state === 'three' && <Future3 />} */}
    </main>
  )
}
