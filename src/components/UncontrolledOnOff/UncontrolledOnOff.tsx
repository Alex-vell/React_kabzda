import React, {useState} from "react";

export type PropsTypeUncontrolled = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: PropsTypeUncontrolled) => {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicator = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClickHandlerOn = () => {
        setOn(true)
        props.onChange(true)
    }
    const onClickHandlerOff = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={onClickHandlerOn}>On
        </div>
        <div style={offStyle} onClick={onClickHandlerOff}>Off
        </div>
        <div style={indicator}></div>
    </div>
}