import { NavigatorListItemStyle } from "../../navigatorList.style";
import { NavLink } from "react-router-dom";

type NavigatorItemProps = { children: React.ReactNode } & (
  | { type: "link"; to: string }
  | { type: "title"; to?: never }
);

const NavigatorItem = ({ children, type, to }: NavigatorItemProps) => {
  const content =
    type === "title" ? (
      <p className="title">{children}</p>
    ) : (
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        {children}
      </NavLink>
    );
  return <NavigatorListItemStyle>{content}</NavigatorListItemStyle>;
};

export default NavigatorItem;
