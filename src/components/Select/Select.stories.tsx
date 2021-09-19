import React, {ChangeEvent, useState} from "react";
import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    content: Select
}

const onClickCallback = action('Select On')

const Template: Story<SelectPropsType> = (args) => <Select {...args} />

export const CollapsedSelect = Template.bind({})
CollapsedSelect.args = {
    value: 1,
    onChange: onClickCallback,
    items: [{title: 'Alex', value: 1}, {title: 'Natali', value: 2}, {title: 'Anna', value: 3}]
}

export const UnCollapsedSelect = Template.bind({})
UnCollapsedSelect.args = {
    onChange: onClickCallback,
    items: [{title: 'Alex', value: 1}, {title: 'Natali', value: 2}, {title: 'Anna', value: 3}]
}

export const ControlledSelect: Story = () => {
    const [value, setValue] = useState<number | undefined>(1)

    return <>
    <Select value={value}
            onChange={setValue}
            items={[{title: 'Alex', value: 1}, {title: 'Natali', value: 2}, {title: 'Anna', value: 3}]}/>
    </>
}
