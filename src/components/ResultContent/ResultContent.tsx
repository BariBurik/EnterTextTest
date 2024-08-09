import { useAppSelector } from "@/hooks/redux";
import { FC } from "react";
import classes from './ResultContent.module.scss'
import ButtonAgain from "../UI/button_again/ButtonAgain";


const ResultContent: FC = () => {
    const {wpm} = useAppSelector(state => state.wpmReducer);
    const {accuracy} = useAppSelector(state => state.accuracyReducer);

    return ( 
        <div className={classes.result_container}>
            <div className={classes.text_container}>
                <p className={classes.result_text}>WPM: {wpm}</p>
                <p className={classes.result_text}>Accuracy: {accuracy}%</p>
            </div>
            <ButtonAgain/>
        </div>
     );
}

export default ResultContent;