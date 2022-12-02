import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface AvatarProps {
    name: string;
    size: 24 | 36 | 48;
    rounded?: boolean;
}

export const Avatar = ({ name, size, rounded }: AvatarProps) => {
    return (
        <img src={`https://ui-avatars.com/api/?name=${name}&background=f0fdfa&color=14b8a6&size=${size}&rounded=${rounded}`} alt={name} />
    )
}