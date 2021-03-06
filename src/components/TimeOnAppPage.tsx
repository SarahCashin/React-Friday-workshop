import React from 'react';
import '../styles/App.css';

interface ITimeOnAppPageProps {
    timeRef: React.MutableRefObject<Number>
}

export const TimeOnAppPage: React.FC<ITimeOnAppPageProps> = (props: ITimeOnAppPageProps) => {

    return (
        <>
            <h1>Time on App</h1>
            <h2>{props.timeRef.current} seconds.</h2>
            <p>That's {(Number(props.timeRef.current) / 60).toFixed(3)} minutes.</p>
            <p>That's {(Number(props.timeRef.current) / 60 / 60).toFixed(4)} hours.</p>
            <p>That's {(Number(props.timeRef.current) / 60 / 60 / 24).toFixed(5)} days.</p>
            <p>That's approximately {(Number(props.timeRef.current) / 60 / 60 / 24 / 365).toFixed(10)} years!!!</p>
            <p>Woah, what a way to go!</p>
        </>
    )
}