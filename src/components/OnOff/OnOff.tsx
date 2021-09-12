import React, {useState} from "react";

export type PropsTypeOnOff = {
    on: boolean
    onClick: (on: boolean) => void
}

export const OnOff = (props: PropsTypeOnOff) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicator = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const onClickHandlerOn = () => {
        props.onClick(true)
    }
    const onClickHandlerOff = () => {
        props.onClick(false)
    }
    return <div>
        <div style={onStyle} onClick={onClickHandlerOn}>On
        </div>
        <div style={offStyle} onClick={onClickHandlerOff}>Off
        </div>
        <div style={indicator}></div>
    </div>
}