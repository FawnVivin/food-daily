import { Header, ScreenLoader } from "@food-daily/mobile/ui";
import { Fragment } from "react";
import { Divider } from "react-native-paper";
import { useGetUser } from "@food-daily/mobile/api";

import { ProfileForm, UserInfo, UserParams } from "../components";

import { ProfileRoot } from "./Profile.styles";

const Profile = () => {
  const {data: user, isLoading, isSuccess} = useGetUser()

  if (isLoading || !isSuccess) return <ScreenLoader />;
  const {visitor} = user

  if (!visitor) return null
  return (
    <Fragment>
      <Header title={"Профиль"} backButton={false} />
      <ProfileRoot>
        <UserInfo {...visitor} />
        <Divider />
        <UserParams {...visitor} />
        <Divider />
        <ProfileForm {...visitor} />
      </ProfileRoot>
    </Fragment>
  );
};

export default Profile;
