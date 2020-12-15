import React from "react";
import Title from "../Title";
import './index.scss';
import Text from "../Text";
import Button from "../Button";

const TitleRowSubDes = ({title = '', subtitle = '', description = '', onClick}) => {
    return (
        <div className={'title-row-sub-desc-container'}>
            <Title title={title} className={'title-row-sub-desc-title'} />
            <div className={'title-row-sub-desc-row-container'}>
                <Text className={'title-row-sub-desc-subtitle'}
                      type={'extraLight'}
                      size={55}
                      mobSize={35}
                >{subtitle}</Text>
                <div className={'title-row-sub-description-container'}>
                    <Text className={'title-row-sub-desc-description'}
                          size={20}
                          type={'light'}
                          mobSize={16}
                    >{description}</Text>
                    {onClick ? <Button className={'title-row-sub-desc-btn'}
                                       title={'APPLY TO INCUBATOR'}
                                       onClick={onClick}
                                       size={14}
                                       type={'bordered'}
                                       color={'black'}/> : null}
                </div>

            </div>

        </div>
    )
}

export default TitleRowSubDes