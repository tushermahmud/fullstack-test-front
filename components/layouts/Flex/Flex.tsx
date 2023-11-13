import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  classes?: string;
};

const Flex = ({ classes, children }: Props) => {
  return <div className={`flex ${classes}`}>{children}</div>;
};
export default Flex;