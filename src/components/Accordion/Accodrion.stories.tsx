import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}
export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: []
}
export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    onChange: callback,
    items: [{title: 'Alex', value: 1}, {title: 'Natali', value: 2}, {title: 'Anna', value: 3}],
}
export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return <Accordion titleValue={'Users'}
                      collapsed={accordionCollapsed}
                      onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                      items={[{title: 'Alex', value: 1}, {title: 'Natali', value: 2}, {title: 'Anna', value: 3}]}
                      onClick={(value) => {
                          alert(`user with ID ${value} should be happy`)
                      }}/>
}
