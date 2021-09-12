import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {OnOff, PropsTypeOnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
}
const onClickCallback = action('on or off clicked')

const Template: Story<PropsTypeOnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({})
OnMode.args = {
    on: true,
    onClick: onClickCallback
}
export const OffMode = Template.bind({})
OffMode.args = {
    on: false,
    onClick: onClickCallback
}
export const ModeChanging = () => {
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    return <OnOff on={switchOn} onClick={setSwitchOn}/>
}

