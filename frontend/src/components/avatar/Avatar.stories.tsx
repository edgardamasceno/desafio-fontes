import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar'

export default {
    title: 'Components/Avatar',
    component: Avatar,
    args: {
        name: 'John Doe',
        size: 24,
        rounded: true,
    },
    argTypes: {
        name: { control: 'text' },
        size: { control: { type: 'inline-radio', options: [24, 36, 48] } },
        rounded: { control: 'boolean' },
    }
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {}