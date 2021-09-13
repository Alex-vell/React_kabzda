import React, {ChangeEvent, useRef, useState} from 'react';
import {Story} from '@storybook/react';

export default {
    title: 'Input',
    //component:
}

const Template: Story = (args) => <input {...args} />;

export const UncontrolledInput = Template.bind({});

export const ControlledInput = Template.bind({});
ControlledInput.args = {
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
