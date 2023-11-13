import React, { ChangeEvent, useState } from "react";
import { FormData } from "../../../types/FinancialFormdata";
import TextInput from "../../atoms/Input";

type Props = {
  onSubmit: (data: FormData) => void;
  disabled: boolean;
}


const FinancialForm = ({onSubmit, disabled=false }: Props) => {
 const [formData, setFormData] = useState<FormData>({
   income: 0,
   expenses: 0,
   debts: 0,
   assets: 0,
 });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      income: 0,
      expenses: 0,
      debts: 0,
      assets: 0,
    })
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <TextInput
        inputClasses="w-full"
        name="income"
        type="number"
        onChange={handleChange}
        required
        value={formData.income}
        label="income"
        placeholder="Income"
      />
      <TextInput
        name="expenses"
        type="number"
        onChange={handleChange}
        required
        label="expenses"
        placeholder="Expenses"
        value={formData.expenses}
      />
      <TextInput
        name="debts"
        type="number"
        onChange={handleChange}
        required
        label="debts"
        placeholder="Debts"
        value={formData.debts}
      />
      <TextInput
        name="assets"
        type="number"
        onChange={handleChange}
        required
        label="assets"
        placeholder="Assets"
        value={formData.assets}
      />
      <button
        type="submit"
        className="py-1 px-6 bg-slate-900 text-white rounded-md w-40 m-auto disabled:bg-slate-500 disabled:cursor-not-allowed"
        disabled={disabled}
      >
        Calculate
      </button>
    </form>
  );
};

export default FinancialForm;
