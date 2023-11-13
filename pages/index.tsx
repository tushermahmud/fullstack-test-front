import { Inter } from 'next/font/google'
import Flex from '../components/layouts/Flex/Flex'
import { FormData } from '../types/FinancialFormdata'
import FinancialForm from '@/components/molecules/Form/FinancialForm';
import axios from 'axios';
import { useState } from 'react';
import FinancialDataDispley from '@/components/organisms/FinancialDataDisplay';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [financialHealthScore, setFinancialHealthScore] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false)
  const [reset, setReset] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormData|null>(null)
   const handleFormSubmit = async(formData: FormData) => {
       try {
         let { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}calculate-score`, formData);
         setFormValues(formData)
         setFinancialHealthScore(data.score)
         setReset(true);
         setDisabled(true)
       } catch (error: any) {
         console.log(error.message)
       }
   };
  

  const resetAll = () => {
    setFinancialHealthScore(0)
    setFormValues(null)
    setDisabled(false);
    setReset(false)
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <span className="font-bold text-2xl">
          Financial Health Score Finding
        </span>
      </div>
      <Flex classes="w-full">
        <FinancialForm onSubmit={handleFormSubmit} disabled={disabled} />
      </Flex>
      <Flex>
        <button
          type="button"
          className="py-1 px-2 w-40 bg-gray-500 text-white rounded-md mt-5"
          onClick={resetAll}
        >
          Reset
        </button>
      </Flex>
      <Flex classes="w-full">
        {formValues && (
          <FinancialDataDispley
            formValues={formValues}
            financialHealthScore={financialHealthScore}
          />
        )}
      </Flex>
    </main>
  );
}
