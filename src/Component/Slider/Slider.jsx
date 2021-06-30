import ContentsOneText from '../Benefits/ContentsOneText'
import ContentsTwoText from '../Benefits/ContentsTwoText'
import ContentsThreeText from '../Benefits/ContentsThreeText'
import './Slider.scss'

export default function Slider() {
  return (
    <div className="all">
      <input defaultChecked type="radio" name="respond" id="desktop" />
      <article id="slider">
        <input defaultChecked type="radio" name="slider" id="switch1" />
        <input type="radio" name="slider" id="switch2" />
        <input type="radio" name="slider" id="switch3" />
        <div id="slides">
          <div id="overflow">
            <div className="image">
              <article>
                <ContentsOneText />
              </article>
              <article>
                <ContentsTwoText />
              </article>
              <article>
                <ContentsThreeText />
              </article>
            </div>
          </div>
        </div>
        <div id="active">
          <label htmlFor="switch1"></label>
          <label htmlFor="switch2"></label>
          <label htmlFor="switch3"></label>
        </div>
      </article>
    </div>
  )
}
