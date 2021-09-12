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

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return (
        <h3 onClick={(e) => props.onChange() }>{props.title}</h3>
    )
}

type AccordionBodyType = {
    items: any
}
const AccordionBody = (props: AccordionBodyType) => {
    debugger
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>{props.items[0].title}</li>
            <li>{props.items[1].title}</li>
            <li>{props.items[2].title}</li>
        </ul>
    )
}

export default Accordion;