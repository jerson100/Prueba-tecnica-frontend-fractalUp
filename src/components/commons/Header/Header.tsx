import useSearchContext from "../../../hooks/useSearchContext";
import Search from "../Search";
import UserAccount from "../UserAccount";
import {
  HeaderContainerStyle,
  HeaderLeftStyle,
  HeaderRightStyle,
} from "./header.style";

const Header = () => {
  const { changeTrack, track } = useSearchContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTrack(e.target.value);
  };
  return (
    <HeaderContainerStyle>
      <HeaderLeftStyle>
        <Search onChange={handleChange} value={track} />
      </HeaderLeftStyle>
      <HeaderRightStyle>
        <UserAccount />
      </HeaderRightStyle>
    </HeaderContainerStyle>
  );
};

export default Header;
