import React from "react";
import s from "../Styles/Stats.module.scss";
import Itmo from "../data/universities/itmo.png";
import Hse from "../data/universities/hse.png";
import Herzen from "../data/universities/herzen.png";
import Ranhigs from "../data/universities/ranhigs.png";
import Politech from "../data/universities/politech.png";

const Stats: React.FC = () => {
    return(
        <section className={s.stats}>
            <div className={s.wrapper}>
                <div className={s.statsLine}>
                    <div className={s.item}>
                        <h2 className={s.number}>52</h2>
                        <p className={s.description}>Преподавателей, которые знают, как 
                            помочь со сдачей вашей работы.
                        </p>
                    </div>
                    <div className={s.item}>
                        <h2 className={s.number}>1549</h2>
                        <p className={s.description}>Студентов по всей России уже получили 
                            консультацию и помощь в решении 
                            учебных работ.
                        </p>
                    </div>
                    <div className={s.item}>
                        <h2 className={s.number}>93%</h2>
                        <p className={s.description}>Студентов получили наивысший балл за 
                            работу.
                        </p>
                    </div>
                </div>
                <div className={s.universities}>
                    <h3 className={s.title}>
                        Мы ценим каждого клиента
                    </h3>
                    <h5 className={s.subtitle}>
                        Наши преподаватели из самых крупных университетов страны!
                    </h5>
                    <div className={s.uniList}>
                        <img className={s.image} src={Itmo} alt="Itmo logo" width="140px" height="140px" />
                        <img className={s.image} src={Hse} alt="HSE logo" width="140px" height="140px" />
                        <img className={s.image} src={Herzen} alt="Herzen logo" width="140px" height="140px" />
                        <img className={s.image} src={Ranhigs} alt="Ranhigs logo" width="140px" height="140px" />
                        <img className={s.image} src={Politech} alt="Politech logo" width="140px" height="140px" />
                    </div>
                </div>
                <div className={s.separator}></div>
            </div>
        </section>
    );
};

export default Stats;