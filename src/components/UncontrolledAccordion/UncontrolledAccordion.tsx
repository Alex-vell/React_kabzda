import React, {useState} from "react";

export type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("Accordion rendering")
    let [collapsed, setCollapsed] = useState(false)
    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={() => {
                            setCollapsed(!collapsed)
                        }}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    const onClickHandler = () => {
        props.onChange()
    }
    return (
        <h3 onClick={onClickHandler}>{props.title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
