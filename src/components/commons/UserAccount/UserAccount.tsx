import {
  UserAccountContainerStyle,
  UserIconStyle,
  UserNameStyle,
} from "./userAccount.style";

const UserAccount = () => {
  return (
    <UserAccountContainerStyle>
      <UserIconStyle className="fa-solid fa-user" />
      <UserNameStyle>Francisco M.</UserNameStyle>
    </UserAccountContainerStyle>
  );
};

export default UserAccount;
