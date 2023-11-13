import Flex from "../layouts/Flex/Flex"
import { FormData } from "@/types/FinancialFormdata";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
type Props = {
  formValues: FormData;
  financialHealthScore: number
};
const FinancialDataDispley = ({formValues, financialHealthScore}: Props) => {
    const colorLength = Object.keys(formValues).length;
    const generateRandomColor = () => {
      let color = "";
      let colors = [];
      for(let c = 0; c<colorLength; c++){
        const first = Math.floor(Math.random() * 255);
        const second = Math.floor(Math.random() * 255);
        const third = Math.floor(Math.random() * 255);
        color = `rgb(${first.toString()}, ${second.toString()}, ${third.toString()})`;
        colors.push(color)
      }
       return colors;
    };
    const data = {
      labels: Object.keys(formValues),
      datasets: [
        {
          label: "# of inputs",
          data: Object.values(formValues),
          backgroundColor: generateRandomColor(),
          borderWidth: 1,
        },
      ],
    };

    return (
      <Flex classes="flex-col w-full items-center">
        <Flex
          classes={`w-full justify-center mt-5 py-2 ${
            financialHealthScore >= 70 ? "bg-green-300" : "bg-red-500"
          }`}
        >
          <span className="text-center">
            {financialHealthScore}% which is{" "}
            {financialHealthScore >= 70 ? "Good!" : "Bad!"}
          </span>
        </Flex>
        <Flex classes="mt-5">
          <Pie data={data} />;
        </Flex>
      </Flex>
    );
}

export default FinancialDataDispley


