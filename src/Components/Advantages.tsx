import React from "react";

import s from "../Styles/Advantages.module.scss";

const Advantages: React.FC = () => {
  return (
    <section className={s.advantages}>
      <div className={s.wrapper}>
        <div className={s.title}>В чём наши преимущества</div>
        <div className={s.points}>
          <div className={s.point}>
            <div className={s.circle}>
              <div className={s.number}>1</div>
            </div>
            <h3 className={s.subtitle}>Удобство</h3>
            <p className={s.description}>
              Общайтесь с преподавателями напрямую в удобном для вас месседжере.
            </p>
          </div>
          <div className={s.point}>
            <div className={s.circle}>
              <div className={s.number}>2</div>
            </div>
            <h3 className={s.subtitle}>Бесплатная консультация</h3>
            <p className={s.description}>
              Получите личную консультацию от преподавателя в течение 30 минут
              совершенно бесплатно.
            </p>
          </div>
          <div className={s.point}>
            <div className={s.circle}>
              <div className={s.number}>3</div>
            </div>
            <h3 className={s.subtitle}>Фиксированные цены</h3>
            <p className={s.description}>
              Вы знаете, за что платите. У нас фиксированные цены на все услуги.
            </p>
          </div>
        </div>
        <button className={s.tryForFree}>
            Попробовать бесплатно
        </button>
      </div>
    </section>
  );
};

export default Advantages;
