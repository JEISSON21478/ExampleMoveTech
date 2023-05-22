import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
         Officia labore officia aliqua eiusmod anim nostrud velit minim labore Lorem occaecat.<br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Do Lorem elit quis cupidatat exercitation ad ipsum dolor est eiusmod incididunt est sunt.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
    </div>
  </section>
);

export default CardDeal;