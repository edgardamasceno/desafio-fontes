import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Text } from '../text/Text';
import clsx from 'clsx';

export interface CheckboxProps {
    checked: boolean;
    handleChange: (checked: boolean) => void;
    label: string;
    id: string;
}

export const Checkbox = (props: CheckboxProps) => {
    const { label, checked, handleChange, id } = props;

    return (
        <div className="inline-flex gap-3 items-center justify-center">
            <CheckboxRadix.Root checked={checked} onClick={() => handleChange(!checked)} className={
                clsx(
                    "w-5 h-5 bg-white border-slate-300 border rounded",
                    "flex align-middle justify-center",
                    "outline-none focus-within:ring-2 focus-within:ring-teal-300",
                    "hover:ring-2 hover:ring-teal-300",
                    "transition duration-300 ease-in-out"
                )} defaultChecked id={id}>
                <CheckboxRadix.Indicator asChild className="flex items-center justify-center">
                    <CheckIcon className="text-teal-500 h-5 w-5 mt-[-1px]" />
                </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
            <Text asChild size="sm" weight="normal" >
                <label htmlFor={id}>
                    {label}
                </label>
            </Text>

        </div>
    );
};