import React from 'react';
import Text from '../Text';
import './index.scss';

const Description = ({description = [], color, className = '', size = 12, mobSize = size, type = 'light'}) => {
    return (
        <>
            {description.length ? <div className={`description-container ${className}`}>
                {
                    description.map(({title}, index) => {
                        return (
                            <Text size={size} mobSize={mobSize} key={title + index} type={type} color={color}>{title}</Text>
                        )
                    })
                }
            </div> : null}
        </>
    )
}

export default Description