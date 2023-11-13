import { ChangeEvent } from "react";
import Flex from "../layouts/Flex/Flex";

type Props = {
  name: string;
  label?: string;
  value?: string | number;
  labelClasses?: string;
  inputClasses?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
const SelectInput = ({
  name,
  onChange,
  label,
  value,
  labelClasses,
  inputClasses,
}: Props) => {
  <Flex>
    <label
      htmlFor={name}
      className={`${labelClasses} block text-sm font-medium leading-6 text-gray-900`}
    >
      {label?.toLocaleUpperCase()}
    </label>
    <Flex classes="mt-2">
      <select
        onChange={onChange}
        id={name}
        name={name}
        autoComplete="country-name"
        className={`${inputClasses} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6`}
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </Flex>
  </Flex>;
};

export default SelectInput;
