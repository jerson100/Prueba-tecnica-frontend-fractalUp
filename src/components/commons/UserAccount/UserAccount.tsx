import useMediaQuery from "../../../hooks/useMediaQuery";
import {
  UserAccountContainerStyle,
  UserIconStyle,
  UserNameStyle,
} from "./userAccount.style";

const UserAccount = () => {
  const isTablet = useMediaQuery("md", "min-width");
  return (
    <UserAccountContainerStyle>
      <UserIconStyle className="fa-solid fa-user" />
      {isTablet ? <UserNameStyle>Francisco M.</UserNameStyle> : null}
    </UserAccountContainerStyle>
  );
};

export default UserAccount;
