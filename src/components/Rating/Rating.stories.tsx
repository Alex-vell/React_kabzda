import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Rating, RatingPropsType} from "./Rating";
import {action} from "@storybook/addon-actions";
import {RatingValueType} from "../../App";

export default {
    title: 'Rating',
    component: Rating
}
const onClickCallback = action('some item was clicked')

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const Rating1 = Template.bind({})
Rating1.args = {
    value: 1,
    onClick: onClickCallback
}
export const Rating2 = Template.bind({})
Rating2.args = {
    value: 2,
    onClick: onClickCallback
}
export const Rating3 = Template.bind({})
Rating3.args = {
    value: 3,
    onClick: onClickCallback
}
export const Rating4 = Template.bind({})
Rating4.args = {
    value: 4,
    onClick: onClickCallback
}
export const Rating5 = Template.bind({})
Rating5.args = {
    value: 5,
    onClick: onClickCallback
}
export const ModeRating = () => {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return <Rating value={ratingValue} onClick={setRatingValue}/>
}
