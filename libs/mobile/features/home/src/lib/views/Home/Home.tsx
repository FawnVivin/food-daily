import { ScrollView } from 'react-native'
import { Section } from '@food-daily/mobile/ui'

import { HomeHeader, MealList, StatisticsBlock , WaterTracker } from '../../components'
import { currentStats } from '../../fixtures'

import { HomeRoot } from './Home.styles'

import type { RootStackParamList } from '@food-daily/mobile/types'
import type { FC } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'



const Home: FC<NativeStackScreenProps<RootStackParamList>> = () =>
  // const [users, setUsers] = useState<User[]>([])
  //
  // useEffect( ()=>{
  //  void axios.post('http://192.168.31.56:3000/api', {id:"111",name:'Ivan',  age:22})
  //    .then(()=>{
  //      void axios.get<User[]>('http://192.168.31.56:3000/api').then((resp)=>setUsers(resp.data))
  //    }
  //  )
  //    .catch((error:Error)=>alert(error.message))
  //
  // },[])
  (
    <ScrollView>
      <HomeRoot>
        <HomeHeader name={'Виктория Инешина'} />
        <StatisticsBlock stats={currentStats} />
        <Section title={'Приемы пищи'}>
          <MealList />
        </Section>
        <Section title={'Трекер воды'}>
          <WaterTracker/>
        </Section>
        {/* {users.map((user,index)=> */}
        {/* <HomeTitle key={index}> */}
        {/*   {`${user.name  } ${  user.age}`} */}
        {/* </HomeTitle>) */}
        {/* } */}
      </HomeRoot>
    </ScrollView>
  )

export default Home
