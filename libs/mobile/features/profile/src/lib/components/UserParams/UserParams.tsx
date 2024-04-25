import { ParamItem } from '@food-daily/mobile/ui'

import { UserParamsRoot } from './UserParams.styles'

import type { FC } from 'react'
import type { Visitor } from '@food-daily/shared/types'


const UserParams:FC<Visitor> = ({weight, height, age}) => (
    <UserParamsRoot>
      <ParamItem title={'Рост'} value={height} postfix={' см.'} />
      <ParamItem title={'Вес'} value={weight} postfix={' кг.'} />
      <ParamItem title={'Возраст'} value={Number(age)} postfix={' лет'} />
    </UserParamsRoot>)

export default UserParams
