import React from 'react';

type TitleProps = {
    title: string,
}

const Title = ({title}: TitleProps) => (
    <div className="Title">
        <div>{title}</div>
    </div>
  );

export default Title;
