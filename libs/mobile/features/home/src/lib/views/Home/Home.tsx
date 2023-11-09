import { Button } from 'react-native-paper'

import { HomeRoot, HomeTitle } from './Home.styles'

import type { RootStackParamList } from '@food-dairy/mobile/types'
import type { FC } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

const Home:FC<NativeStackScreenProps<RootStackParamList>> = ({navigation}) =>
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
    <HomeRoot>
      <HomeTitle>Home page</HomeTitle>
      <Button onPress={()=>navigation.navigate('AuthorizationScreen')}>Press</Button>
       {/* {users.map((user,index)=> */}
       {/* <HomeTitle key={index}> */}
       {/*   {`${user.name  } ${  user.age}`} */}
       {/* </HomeTitle>) */}
       {/* } */}
    </HomeRoot>
  )

export default Home
