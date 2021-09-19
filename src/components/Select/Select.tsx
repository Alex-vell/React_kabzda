import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value?: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [backlightEl, setBacklightEl] = useState(props.value)


    let selectItem = props.items.find(i => i.value === props.value)
    let backlightItem = props.items.find(i => i.value === backlightEl)

    useEffect(() => {
        setBacklightEl(props.value)
    }, [props.value])

    const collapseHandler = () => {
        setActive(!active)
    }
    const onClickItemsHandler = (value: any) => {
        props.onChange(value);
        collapseHandler()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp'){
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === backlightEl) {
                    const pretendentEl = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if(pretendentEl) {
                        props.onChange(pretendentEl.value)
                        return
                    }
                }
            }
            if (!selectItem) {
                props.onChange(props.items[0].value)
            }

        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={collapseHandler}>{selectItem && selectItem.title}</span>

                {active &&
                <div className={s.items}>
                    {props.items.map(i => <div onMouseEnter={() => {
                        setBacklightEl(i.value)
                    }}
                                               className={s.item + ' ' + (backlightItem === i ? s.selected : '')}
                                               key={i.value}
                                               onClick={() => {
                                                   onClickItemsHandler(i.value)
                                               }}>
                        {i.title}
                    </div>)}
                </div>}
            </div>

        </>
    )
}