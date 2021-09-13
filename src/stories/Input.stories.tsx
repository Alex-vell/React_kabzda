import React, {ChangeEvent, useRef, useState} from 'react';
import {Story} from '@storybook/react';

export default {
    title: 'Input',
    //component:
}

const Template: Story = (args) => <input {...args} />;

export const UncontrolledInput = Template.bind({});

export const ControlledInputWithFixedValue = Template.bind({});
ControlledInputWithFixedValue.args = {
    value: 'it-incubator.by'
}

export const TrackValueOfUncontrolledInput: Story = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChangeHandler}/> - {value} </>
}

export const GetValueOfUncontrolledInputByPress: Story = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>add</button>
        - actual value: {value} </>
}


export const ControlledInput: Story = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}
export const ControlledCheckbox: Story = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect: Story = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1')
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}