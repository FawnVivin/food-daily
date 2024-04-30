import { DefaultView, Header, ScreenLoader } from "@food-daily/mobile/ui"
import { Fragment, useState } from "react"
import { IconButton } from "react-native-paper"
import {useGetAllVisitorsByName} from '@food-daily/mobile/api'
import { useToken } from "@food-daily/mobile/hooks"

import { VisitorsList } from "../components"

import { SearchInput, SearchWrapper } from "./AdminVisitorsList.styles"



const AdminVisitorsList = () => {
  const [name, setName] = useState("")
  const {isSuccess, data:visitors} = useGetAllVisitorsByName(name)
  const onChangeText = (value:string) => setName(value)
  const { changeToken } = useToken()

  const handlePress = () => {
    changeToken('')
  }

  return (
    <Fragment>
      <Header title={'Посетители клуба'} backButton={false} />
      <DefaultView>
        <SearchWrapper>
          <SearchInput
            placeholder="Имя посетителя"
            onChangeText={onChangeText}
            value={name}
          />
          <IconButton icon={'exit-to-app'} mode={'contained'} onPress={handlePress} style={{width:55, height:55, borderRadius:100}} />
        </SearchWrapper>
        {isSuccess ? <VisitorsList visitors={visitors} /> : <ScreenLoader />}
      </DefaultView>
    </Fragment>
  )}

export default AdminVisitorsList