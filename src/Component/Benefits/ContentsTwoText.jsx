import s from './Benefits.module.scss'
import Oval2 from '../../Image/Oval2.png'
import { animated } from 'react-spring';
import { Transition } from '../Transition/Transition';

export default function ContentsTwoText() {

      const transitions = Transition();


  return transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
    <div className={s.benefitsContentsOne}>
      <div>
        <h2>Whole Exome <br/> Sequencing</h2>
        <p className={s.benefitsContentsOneText}>
          Panels are often used in clinical settings because they’re low cost
          and provide high quality coverage of specific, pre-defined genomic
          regions of interest. While useful in certain settings, such assays are
          limited by their narrow focus.
          <br />
          <br />
          With ≥ 99.5% call rate across ~600 genes relevant to many disease
          states, the Exome+ assay enables you to run multiple panel-grade
          analyses with a single sample.
        </p>
      </div>
      <img src={Oval2} alt="Oval2" />
          </div>
          </animated.div>))
  
}
