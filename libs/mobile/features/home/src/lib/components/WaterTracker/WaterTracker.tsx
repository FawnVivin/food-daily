import { Button, IconButton , Text } from 'react-native-paper'
import { Fragment, useState } from 'react'

import { Content, CountText, PostfixText, WaterTrackerRoot } from './WaterTracker.styles'

const WaterTracker = () => {
  const [waterCount, setWaterCount] = useState(0)
  const color = '#8CC4DF'

  const handleSave = () => {
    alert(`Отправляем ${waterCount}мл на сохранение`)
  }

  const handleMinus = () => {
    const newCount = waterCount - 200

    if (newCount >= 0) {
      setWaterCount(newCount)
    }
  }
  const handlePlus = () => setWaterCount(waterCount + 200)

  return (
    <Fragment>
    <WaterTrackerRoot>
      <IconButton
        icon={'minus'}
        mode={'contained'}
        onPress={handleMinus}
        containerColor={color}
        iconColor={'white'}/>
      <Content>
        <Text>Вы выпили</Text>
        <CountText variant={'headlineMedium'}>
          {waterCount}
          <PostfixText style={{fontSize:10}}>мл.</PostfixText>
        </CountText>
      </Content>
      <IconButton
        icon={'plus'}
        mode={'contained'}
        onPress={handlePlus}
        containerColor={color}
        iconColor={'white'}
      />
    </WaterTrackerRoot>
      <Button
        mode={'contained'}
        buttonColor={color}
        textColor={'white'}
        icon={'water'}
        onPress={handleSave}
      >
        Сохранить
      </Button>
    </Fragment>
  )
}

export default WaterTracker
