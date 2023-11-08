
import { HomeRoot, HomeTitle } from './Home.styles'



export const Home = () =>
  // const [users, setUsers] = useState<User[]>([])
  //
  // useEffect( ()=>{
  //  void axios.post('http://192.168.31.56:3000/api', {id:"111",name:'Ivan',  age:22}).then(
  //    ()=>{
  //      void axios.get<User[]>('http://192.168.31.56:3000/api').then((resp)=>setUsers(resp.data))
  //    }
  //  )
  //
  // },[])
   (
    <HomeRoot>
      <HomeTitle>Home page</HomeTitle>
      {/* {users.map((user,index)=> */}
      {/*  <HomeTitle key={index}> */}
      {/*    {`${user.name  } ${  user.age}`} */}
      {/*  </HomeTitle>) */}
      {/* } */}
    </HomeRoot>
  )

