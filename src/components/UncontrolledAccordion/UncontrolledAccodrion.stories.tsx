import React from 'react';
import {Story} from '@storybook/react';
import {UncontrolledAccordion, UncontrolledAccordionPropsType} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

const Template: Story<UncontrolledAccordionPropsType> = (args) => <UncontrolledAccordion {...args} />;

export const ModeChangingUncontrollCollapsed = Template.bind({})
ModeChangingUncontrollCollapsed.args = {
    titleValue: 'Users'
}
