import { Header, ScreenLoader } from "@food-daily/mobile/ui";
import { Fragment } from "react";
import { ActivityIndicator, Divider } from "react-native-paper";

import { ProfileForm, UserInfo, UserParams } from "../components";

import { ProfileRoot } from "./Profile.styles";
import { useGetUser } from "@food-daily/mobile/api";


const Profile = () => {
  const { data, isLoading, isSuccess } = useGetUser();
  if (isLoading || !isSuccess) return <ScreenLoader/>
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
