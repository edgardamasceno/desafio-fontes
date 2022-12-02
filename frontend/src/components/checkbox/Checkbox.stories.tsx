import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        label: 'Done',
        checked: false,
        handleChange: (checked: boolean) => console.log(checked),
        id: 'isDone'
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {}