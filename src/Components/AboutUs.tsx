import React from "react";
import timeImg from "../data/time.png";
import convenienceImg from "../data/convenience.png";
import efficientImg from "../data/efficiency.png";
import s from "../Styles/AboutUs.module.scss";

const AboutUs: React.FC = () => {
  return (
    <section className={s.aboutUs}>
      <div className={s.wrapper}>
        <h2 className={s.title}>
          <div className={s.purple}>Мы </div> - сервис, который помогает как
          школьникам, так и студентам в сдаче экзаменов, зачётах и других работ!
        </h2>
        <h4 className={s.subtitle}>
          Это отличная возможность потратить время на что-то более важное
        </h4>
        <ul className={s.advantages}>
          <li className={s.advantage}>
            <img src={timeImg} alt="time" width="100px" height="100px" />
            <h3 className={s.advantageTitle}>Время</h3>
            <p className={s.description}>
              Выполнение работ выполняется в максимально короткие сроки
            </p>
          </li>
          <li className={s.advantage}>
            <img src={convenienceImg} alt="convenience" width="100px" height="100px" />
            <h3 className={s.advantageTitle}>Удобство</h3>
            <p className={s.description}>
              Каждый этап обсуждается лично с человеком, который будет выполнять
              вашу работу
            </p>
          </li>
          <li className={s.advantage}>
            <img src={efficientImg} alt="efficient" width="100px" height="100px" />
            <h3 className={s.advantageTitle}>Эффективность</h3>
            <p className={s.description}>
              Наша задача — сделать так, чтобы вы сдали работу на наивысший балл
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
