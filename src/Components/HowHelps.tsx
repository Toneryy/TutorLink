import React from "react";

import s from "../Styles/HowHelps.module.scss";
import phones from "../data/phones.png";

const HowHelps: React.FC = () => {
  return (
    <section className={s.howHelps}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.imageBlock}>
            <img src={phones} alt="how we work" width="460px" height="340px" />
          </div>
          <div className={s.textBlock}>
            <h3 className={s.title}>Как мы помогает нашим клиентам?</h3>
            <p className={s.description}>
              Наш подход в работе – доставлять клиентам качество и ценность. Все
              наши преподаватели имеют более, чем 5-летний опыт работы. Мы любим
              свое дело!
            </p>
            <button className={s.moreInfo}>
                Узнать больше о нас
            </button>
          </div>
        </div>
        <div className={s.separator}></div>
      </div>
    </section>
  );
};

export default HowHelps;
