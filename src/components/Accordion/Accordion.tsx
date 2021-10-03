import React from "react";


type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when accordion is opened. Each item should be ItemType
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
}

export function AccordionOrig(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items}
                                            onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}
const AccordionBody = (props: AccordionBodyType) => {
    return (
        <ul>
            {props.items.map((i, index) => <li key={index}
                                               onClick={() => {
                                                   props.onClick(i.value)
                                               }}>{i.title}</li>)}
        </ul>
    )
}

export const Accordion = React.memo(AccordionOrig)