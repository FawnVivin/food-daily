import {  Header } from '@food-daily/mobile/ui'
import { Fragment } from 'react'
import { TestUser } from '@food-daily/mobile/fixtures'
import { Divider } from 'react-native-paper'
import { ScrollView } from 'react-native'

import { ProfileForm, UserInfo, UserParams } from '../components'

import { ProfileRoot } from './Profile.styles'

const Profile = () => (
  <Fragment>
    <Header title={'Профиль'} backButton={false} />
      <ProfileRoot>
        <UserInfo {...TestUser} />
        <Divider />
        <UserParams {...TestUser} />
        <Divider />
        <ProfileForm {...TestUser}/>
      </ProfileRoot>
  </Fragment>
)

export default Profile
