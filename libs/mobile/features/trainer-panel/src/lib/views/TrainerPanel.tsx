import { DefaultView, Header, PlusButton, ScreenLoader } from '@food-daily/mobile/ui'
import {useGetUser} from '@food-daily/mobile/api'
import { useNavigation } from '@react-navigation/native'
import { Fragment } from 'react'

import { TrainerInfo, VisitorsList } from '../components'

import type { TrainerScreenNavigatorProps } from '@food-daily/mobile/types'


const TrainerPanel = () => { 
  const {data: user, isPending, isSuccess} = useGetUser()
  const navigation = useNavigation<TrainerScreenNavigatorProps>();

  if (isPending || !isSuccess) return <ScreenLoader/>
  const {trainer} = user

  if (!trainer) return null

  const handlePress = () => navigation.navigate('RegistrationScreen')

  return (
    <Fragment>
      <Header title={'Личный кабинет'} backButton={false}/>
      <DefaultView>
        <TrainerInfo {...trainer} />
        <VisitorsList visitors={trainer.visitors} />
        <PlusButton onPress={handlePress} />
      </DefaultView>
    </Fragment>
  )}

export default TrainerPanel