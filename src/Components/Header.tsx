import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from "../Styles/Header.module.scss";
import logo from "../data/logo.png";

interface HeaderProps {
  contact?: string;
}

const Header: React.FC<HeaderProps> = ({ contact }) => {
  const navigate = useNavigate(); // Для перенаправления вручную

  return (
    <header className={s.header}>
      <div className={s.headerLine}>
        {/* Логотип перенаправляет на главную */}
        <img
          src={logo}
          alt="TutorLink"
          width="154px"
          height="57px"
          className={s.logo}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }} // Указываем, что это кликабельный элемент
        />
        <nav className={s.nav}>
          <ul className={s.buttons}>
            <li className={s.button}>
              <NavLink to="/" className={s.aboutUs}>
                О нас
              </NavLink>
            </li>
            <li className={s.button}>
              <NavLink to="/" className={s.contactUs}>
                Связаться с нами
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Кнопка "Войти" перенаправляет на /login */}
        <button className={s.login} onClick={() => navigate("/login")}>
          Войти
        </button>
      </div>
    </header>
  );
};

export default Header;
