import React from "react";

import s from "../Styles/Intro.module.scss";

const Intro: React.FC = () => {
  return (
    <section className={s.intro}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <h1 className={s.title}>Сдача работ</h1>
          <h3 className={s.subtitle}>
            Не знаете как сдать зачёт/сдать ЕГЭ/ОГЭ? Наш сервис поможет вам
            сдать всё на лучший результат!
          </h3>
          <button className={s.order}>Оставить заявку</button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
