
import {useTranslation} from "react-i18next"
const OnlyUser = () => {
    const [t,i18n] = useTranslation("global")


    return(
        <div>
             { t("onlyUser.text")}
        </div>
    )
}


export default OnlyUser