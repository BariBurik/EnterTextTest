import { useAppSelector } from "@/hooks/redux";
import { FC } from "react";
import classes from './ButtonAgain.module.scss'
import { useNavigate } from "react-router-dom";


const ButtonAgain: FC = () => {
    const navigate = useNavigate();
    const handleNav = () => {
        navigate('/');
    }

    return ( 
        <button onClick={handleNav} className={classes.again_btn}>⟳</button>
     );
}

export default ButtonAgain;