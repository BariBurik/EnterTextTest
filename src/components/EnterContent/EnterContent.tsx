import Textarea from '@/components/Textarea/Textarea';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnterContent = () => {

    const [timer, setTimer] = useState(30);
    const navigate = useNavigate();

    // Таймер, который обновляется каждую секунду
    const changeTime = () => {
        setInterval(() => {
        setTimer(prevValue => prevValue - 1);
        }, 1000);
    }

    // По истечению времени, переадресуем пользователя на страницу с результатами
    useEffect(() => {
        if (timer === 0) {
            navigate('/results');
        }
    }, [timer]);

    return (
        <Textarea changeTime={changeTime} timer={timer}/>
    )
};

export default EnterContent;