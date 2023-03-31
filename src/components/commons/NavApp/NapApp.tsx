import {
  LogotContainerStyle,
  NavAppContainer,
  NavListContainerStyle,
  NavLogoStyle,
  NavBgStyle,
} from "./navApp.style";
import ReactDom from "react-dom";
import logo from "../../../assets/images/logo.svg";
import NavigatorList, { NavigatorListItem } from "../NavigatorList";
import itemsList from "../../../configs/navigationList";
import { NavAppBgVariants, NavAppContainerVariants } from "./navApp.variants";
import { AnimatePresence } from "framer-motion";

const NapApp = ({
  active = false,
  isTablet = false,
  handleActiveNavBar = () => {},
}: {
  active: boolean;
  isTablet: boolean;
  handleActiveNavBar: () => void;
}) => {
  return (
    <>
      <AnimatePresence>
        {active && (
          <NavAppContainer
            variants={NavAppContainerVariants}
            initial="inactive"
            animate={"active"}
            exit="inactive"
          >
            <LogotContainerStyle>
              <NavLogoStyle src={logo} alt="logo de foxbel music" />
            </LogotContainerStyle>
            <NavListContainerStyle>
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
            </NavListContainerStyle>
          </NavAppContainer>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && !isTablet ? <NavgB onClick={handleActiveNavBar} /> : null}
      </AnimatePresence>
    </>
  );
};

const NavgB = ({ onClick }: { onClick: () => void }) => {
  return ReactDom.createPortal(
    <NavBgStyle
      variants={NavAppBgVariants}
      initial="inactive"
      animate={"active"}
      exit="inactive"
      onClick={onClick}
    />,
    document.body
  );
};

export default NapApp;
