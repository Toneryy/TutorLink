import React from "react";
import s from "../Styles/Header.module.scss"

interface HeaderProps {
    contact?: string;
}

const Header: React.FC = ({ contact }: HeaderProps) => {
    return(
        <header className={s.header}>
            
        </header>
    );
};

export default Header;