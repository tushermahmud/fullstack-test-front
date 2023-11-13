import { ChangeEvent, Fragment } from "react";
import Flex from "../layouts/Flex/Flex";

type Props = {
  name: string;
  label?: string;
  value?: string | number;
  required?: boolean;
  type: string;
  placeholder?: string;
  labelClasses?: string;
  inputClasses?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const TextInput = ({
  name,
  type,
  label,
  value,
  placeholder,
  labelClasses,
  inputClasses,
  required,
  onChange,
}: Props) => {
  return (
    <Fragment>
      <label
        htmlFor={name}
        className={`block text-sm font-medium leading-6 text-gray-900 ${labelClasses}`}
      >
        {label?.toLocaleUpperCase()}
      </label>
      <Flex classes="mt-2 w-full">
        <Flex classes="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <input
            value={value}
            type={type}
            name={name}
            onChange={onChange}
            id={name}
            autoComplete={name}
            className={`${inputClasses} block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
            placeholder={placeholder}
            required
          />
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default TextInput;
