import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {UncontrolledRating, UncontrolledRatingPropsType} from "./UncontrolledRating";
import {Rating, RatingPropsType} from "../Rating/Rating";
import {RatingValueType} from "../../App";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

const onClickCallback = action('rating changed inside component')

const Template: Story<UncontrolledRatingPropsType> = (args) => <UncontrolledRating {...args}/>;

export const Rating1 = Template.bind({})
Rating1.args = {
    defaultValue: 1,
    onChange: onClickCallback
}
export const Rating2 = Template.bind({})
Rating2.args = {
    defaultValue: 2,
    onChange: onClickCallback
}
export const Rating3 = Template.bind({})
Rating3.args = {
    defaultValue: 3,
    onChange: onClickCallback
}
export const Rating4 = Template.bind({})
Rating4.args = {
    defaultValue: 4,
    onChange: onClickCallback
}
export const Rating5 = Template.bind({})
Rating5.args = {
    defaultValue: 5,
    onChange: onClickCallback
}
export const ModeRating = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return <UncontrolledRating defaultValue={ratingValue} onChange={setRatingValue}/>
}