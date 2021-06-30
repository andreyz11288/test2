import s from "../Future/Future.module.scss";
import img3 from "../../Image/3.png";

function Future3(props) {
    return (<section className={s.futureSection}>
        <h2>A future proofed assay</h2>
        <p>There are several advantages to running panels in the presence of a whole exome, including flexible test design, flexible re-testing, and increased functionality.</p>
        <div className={s.futureContainer}>
            <div className={s.futureContainerText}>
                <h3>Flexible test design</h3>
                <p>
                    The Exome+ assay provides the flexibility needed to build a comprehensive panel that can be expanded over time. With ~20,000 genes sequenced in each sample, every gene becomes a candidate for inclusion. And, while we have ensured the highest call rates across those genes that are most likely to belong to a panel, the Exome+ assay delivers high call rates for all genes beyond this core set.</p>
            </div>
            <img src={img3} alt='img3' />
        </div>
    </section>
    );
}

export default Future3;