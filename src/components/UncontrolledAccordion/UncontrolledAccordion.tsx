import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


export type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordionOrig(props: UncontrolledAccordionPropsType) {

    console.log("UncontrolledAccordion rendering")

    //let [collapsed, setCollapsed] = useState(false)
    //useReducer здесь только для практики. Для простой логики useState больше подходит
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={() => {
                            dispatch({type: TOGGLE_COLLAPSED})
                        }}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {

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
export const UncontrolledAccordion = React.memo(UncontrolledAccordionOrig)