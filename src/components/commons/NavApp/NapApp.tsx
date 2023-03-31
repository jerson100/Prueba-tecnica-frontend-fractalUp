import { NavAppContainer, NavLogoStyle } from "./navApp.style";
import logo from "../../../assets/images/logo.svg";
import NavigatorList, { NavigatorListItem } from "../NavigatorList";
import itemsList from "../../../configs/navigationList";

const NapApp = ({ active = false }: { active: boolean }) => {
  return (
    <NavAppContainer active={active}>
      <NavLogoStyle src={logo} alt="logo de foxbel music" />
      <NavigatorList>
        {itemsList.MI_LIBRERIA.map((item, index) =>
          item.type === "title" ? (
            <NavigatorListItem key={index} type={"title"}>
              {item.children}
            </NavigatorListItem>
          ) : (
            <NavigatorListItem
              key={item.children}
              type={"link"}
              to={item.to ? item.to : ""}
            >
              {item.children}
            </NavigatorListItem>
          )
        )}
      </NavigatorList>
      <NavigatorList>
        {itemsList.MI_PLAYLIST.map((item, index) =>
          item.type === "title" ? (
            <NavigatorListItem key={index} type={"title"}>
              {item.children}
            </NavigatorListItem>
          ) : (
            <NavigatorListItem
              key={item.children}
              type={"link"}
              to={item.to ? item.to : ""}
            >
              {item.children}
            </NavigatorListItem>
          )
        )}
      </NavigatorList>
    </NavAppContainer>
  );
};

export default NapApp;
