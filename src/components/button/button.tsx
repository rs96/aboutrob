import React from 'react';
import './button.css';

interface Props {
  text: string;
}

const Button = ({ text }: Props) => (
    <div className="button">
        {text}
    </div>
  );

export default Button;
