import React from 'react'
import {useTranslation} from "react-i18next"
import i18next from 'i18next'
import { Button } from '@mui/material'



export default function Header() {
    
    const [t,i18n] = useTranslation("global") // t es el texto traducido y i18n nos permite generar botones para cambiar el lenguaje. hay que paarle el nombr del fichero dond estan las truaduciones
    return (
        <div>
            <h1>{t("header.hello-world")}</h1>
            <br></br>
            <Button variant= "contained" onClick={() => i18n.changeLanguage("es")}>ES</Button>
            <Button variant= "contained" onClick={() => i18n.changeLanguage("en")}>EN</Button>
        </div>

    );

}