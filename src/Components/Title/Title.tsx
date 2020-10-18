import React from 'react';
import './Title.css'

type TitleProps = {
    title: string,
}

const Title = ({ title }: TitleProps) => (
    <div className="Title">
        <div>{title}</div>
    </div>
);

export default Title;
