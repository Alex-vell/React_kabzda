import React from 'react';
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {PropsTypeUncontrolled, UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}
const onClickCallback = action('on or off clicked')

const Template: Story<PropsTypeUncontrolled> = (args) => <UncontrolledOnOff {...args} />;

export const BugMode = () => <div>Unsync when change defaultValue whe already rendered</div>
export const DefaultInputValue = () => <input defaultValue={'yo'}/>

export const ModeChangeOnUncontroll = Template.bind({})
ModeChangeOnUncontroll.args = {
    onChange: onClickCallback,
    defaultOn: true
}
export const ModeChangeOffUncontroll = Template.bind({})
ModeChangeOffUncontroll.args = {
    onChange: onClickCallback,
    defaultOn: false
}
