import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {slides.map((slide) => {
          return <div key={slide.id}>{slide.text}</div>;
        })}
      </div>
      <nav className={styles.nav}>
        <button>Anterior</button>
        <button>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
