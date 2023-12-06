import { Header, ScreenLoader } from "@food-daily/mobile/ui";
import { Fragment } from "react";
import { Divider } from "react-native-paper";
import { useGetUser } from "@food-daily/mobile/api";

import { ProfileForm, UserInfo, UserParams } from "../components";

import { ProfileRoot } from "./Profile.styles";

const Profile = () => {
  const { data, isLoading, isSuccess } = useGetUser();

  if (isLoading || !isSuccess) return <ScreenLoader />;
  return (
    <Fragment>
      <Header title={"Профиль"} backButton={false} />
      <ProfileRoot>
        <UserInfo {...data} />
        <Divider />
        <UserParams {...data} />
        <Divider />
        <ProfileForm {...data} />
      </ProfileRoot>
    </Fragment>
  );
};

export default Profile;
