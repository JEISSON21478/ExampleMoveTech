import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedBackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Quis aliqua esse in non Lorem duis dolor do ipsum exercitation tempor. <br className="sm:block hidden" /> 
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
Ex aute do nostrud aliquip adipisicing aliquip nisi ad ea nisi commodo exercitation.
        </p>
      </div>
    </div>

  </section>
);

export default Testimonials;