import React from "react";

import s from "../Styles/HowWorks.module.scss";
import applicationImg from "../data/application.png";
import managerImg from "../data/manager.png";
import taskImg from "../data/task.png";

const HowWorks: React.FC = () => {
    return (
        <section className={s.HowWorks}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Как мы работаем</h2>
                <div className={s.steps}>
                    {/* Первый шаг */}
                    <div className={s.step}>
                        <img src={applicationImg} alt="Заявка" className={s.icon} width="100px" height="100px" />
                        <div className={s.content}>
                            <h3 className={s.subtitle}>Заявку</h3>
                            <p className={s.description}>
                                Вы заполняете форму с описанием вашей задачи. Оставляете ваши контактные данные.
                            </p>
                        </div>
                    </div>

                    {/* Второй шаг */}
                    <div className={`${s.step} ${s.stepReverse}`}>
                    <img src={managerImg} alt="Менеджер" className={s.icon} width="100px" height="100px" />
                        <div className={s.content}>
                            <h3 className={s.subtitle}>Менеджер</h3>
                            <p className={s.description}>
                                С вами связывается менеджер и уточняет все детали вашего заказа.
                            </p>
                        </div>
                    </div>

                    {/* Третий шаг */}
                    <div className={s.step}>
                        <img src={taskImg} alt="Готовая задача" className={s.icon} width="100px" height="100px" />
                        <div className={s.content}>
                            <h3 className={s.subtitle}>Готовая задача</h3>
                            <p className={s.description}>
                                В течение оговоренного срока вы получаете готовую работу.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={s.separator}></div>
            </div>
        </section>
    );
};

export default HowWorks;
