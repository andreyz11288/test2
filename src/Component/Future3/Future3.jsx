import s from "../Future/Future.module.scss";
import img3 from "../../Image/3.png";

function Future3(props) {
    return (<section className={s.futureSection}>
       
        <div className={s.futureContainer}>
            <img className={s.img} src={img3} alt='img3' />
            <div className={s.futureContainerText}>
                <p>
                    The Exome+ assay provides the flexibility needed to build a comprehensive panel that can be expanded over time. With ~20,000 genes sequenced in each sample, every gene becomes a candidate for inclusion. And, while we have ensured the highest call rates across those genes that are most likely to belong to a panel, the Exome+ assay delivers high call rates for all genes beyond this core set.</p>
            </div>
        </div>
    </section>
    );
}

export default Future3;