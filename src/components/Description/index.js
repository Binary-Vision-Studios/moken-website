import React from 'react';
import Text from '../Text';
import './index.scss';

const Description = ({description = [], color, className = '', size = 12}) => {
    return (
        <>
            {description.length ? <div className={`description-container ${className}`}>
                {
                    description.map(({title}, index) => {
                        return (
                            <Text size={size} key={title + index} color={color}>{title}</Text>
                        )
                    })
                }
            </div> : null}
        </>
    )
}

export default Description
