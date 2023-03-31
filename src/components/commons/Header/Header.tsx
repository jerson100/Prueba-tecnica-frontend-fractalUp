import { useLocation } from "react-router-dom";
import useMediaQuery from "../../../hooks/useMediaQuery";
import useSearchContext from "../../../hooks/useSearchContext";
import Search from "../Search";
import UserAccount from "../UserAccount";
import {
  HeaderContainerStyle,
  HeaderLeftStyle,
  HeaderRightStyle,
} from "./header.style";

const Header = ({ handleActiveNavBar }: { handleActiveNavBar: () => void }) => {
  const { changeTrack, track } = useSearchContext();
  const { pathname } = useLocation();
  const isTablet = useMediaQuery("md", "min-width");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTrack(e.target.value);
  };
  return (
    <HeaderContainerStyle>
      <HeaderLeftStyle>
        {!isTablet ? (
          <i className="fas fa-bars" onClick={handleActiveNavBar}></i>
        ) : null}
        {pathname === "/canciones" ? (
          <Search onChange={handleChange} value={track} />
        ) : null}
      </HeaderLeftStyle>
      <HeaderRightStyle>
        <UserAccount />
      </HeaderRightStyle>
    </HeaderContainerStyle>
  );
};

export default Header;
