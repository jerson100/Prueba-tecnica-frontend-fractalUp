import { FC } from "react";
import { NavigatorListStyle } from "./navigatorList.style";

interface NavigatorListProps {
  direction?: "row" | "column";
  children: React.ReactNode | React.ReactNode[];
}

const NavigatorList: FC<NavigatorListProps> = ({
  children,
  direction = "column",
}) => {
  return <NavigatorListStyle>{children}</NavigatorListStyle>;
};

export default NavigatorList;
