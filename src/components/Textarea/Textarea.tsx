import { FC, useEffect, useRef, useState } from 'react';
import classes from './Textarea.module.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setWPM } from '@/store/reducers/WPM/ActionCreator';
import { setAccuracy } from '@/store/reducers/Accuracy/ActionCreator';

interface TextareaProps {
    changeTime: (timer: number) => void,
    timer: number
}

const Textarea: FC<TextareaProps> = ({changeTime, timer}) => {
    const [inputValue, setInputValue] = useState('');
    const [issues, setIssues] = useState(0);

    const placeholderText = 'Hi, right here you will be input any text, so check your input skill on speed and accuracy! And if you want to try some more, you can try some more! But you shold dont input any more than 10 symbols! So, check your input skill on speed and accuracy!';
    
    const areaRef = useRef<HTMLTextAreaElement>(null);
    const overlayRef = useRef(null);

    const dispatch = useAppDispatch()

    //  Управляем изменением состояния, в котором хранится то, что ввёл пользователь, а также считаем ошибки
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // Меняем состояние со значением ввода пользователя
        const newValue = e.target.value;
        setInputValue(newValue);

        // Считаем ошибки пользователя
        let errorCount = 0;
        newValue.split('').forEach((char, index) => {
            if (char !== placeholderText[index]) {
                errorCount++;
            }
        });

        setIssues(errorCount);
    };

    // Отрисовываем текст, который будет вводить пользователь, где каждая буква - блок span, который меняет цвет, в зависимости от соответсвия.
    const getColoredText = () => {
        return placeholderText.split('').map((char, index) => {
            let color;
            if (index < inputValue.length) {
                color = char === inputValue[index] ? '#fff' : '#cc3333';
            } else {
                color = '#a9a9a9';
            }
            return <span key={index} style={{ color }}>{char}</span>;
        });
    };

    // Прокручиваем вниз текст, если пользователь дошёл до конца, видимого им текста, а также обновляем состояни в rtk
    useEffect(() => {
        // Прокрутка
        if (overlayRef.current) {
            overlayRef.current.scrollTop = areaRef.current.scrollTop
        }
        // Обновляем колличество символов в минуту и процент правильных букв, среди всех введённых пользователем
        let accuracy = Math.floor((inputValue.length - issues) / (inputValue.length / 100));
        setWPM(dispatch, inputValue.length*2)
        setAccuracy(dispatch, accuracy)
    }, [inputValue]);

    return (
        <div>
            <p className={classes.timer}>{timer}</p>
            <div className={classes.textarea_container}>
            <textarea
                onFocus={() => changeTime(timer)}
                ref={areaRef}
                className={classes.textarea}
                value={inputValue}
                onChange={handleChange}
            />
            <div ref={overlayRef} className={classes.overlay}>
                {getColoredText()}
            </div>
            <p>Timer: {timer} seconds</p>
        </div>
        </div>
    );
}

export default Textarea;