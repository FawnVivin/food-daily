import { useNavigation } from "@react-navigation/native"
import { IconButton, Modal, Portal, useTheme } from "react-native-paper"
import { Fragment, useState } from "react"

import { VisitorItemRoot } from "./VisitorItem.styles"
import { VisitorItemNumber,VisitorItemDescription, VisitorInfo} from "./parts"


import type { FC} from "react";
import type { TrainerScreenNavigatorProps } from "@food-daily/mobile/types"
import type { VisitorItemProps } from "./VisitorItem.types"


const VisitorItem:FC<VisitorItemProps> = ({itemNumber, ...visitor}) => {
  const [visible, setVisible] = useState(false)
  const {colors} = useTheme()
  const navigation = useNavigation<TrainerScreenNavigatorProps>();
  const handlePress = () => navigation.navigate('StatisticsScreen', {visitorId: visitor.id})
  const toggleModal = () => setVisible(prev=>!prev)
  const containerStyle = {backgroundColor: colors.background, padding: 20, margin:35, height:280, borderRadius: 20};

  return (
    <Fragment>
      <Portal>
        <Modal visible={visible} onDismiss={toggleModal} contentContainerStyle={containerStyle}>
          <VisitorInfo {...visitor}/>
        </Modal>
      </Portal>
      <VisitorItemRoot
        onPress={handlePress}
        titleNumberOfLines={2}
        title={visitor.name}
        description={<VisitorItemDescription {...visitor} />}
        left={() => <VisitorItemNumber itemNumber={itemNumber} />}
        right={() => (
          <IconButton
            icon={'information-outline'}
            onPress={toggleModal}
          />
        )}
        style={{ paddingRight: 0 }}
      />
    </Fragment>
  )}

export default VisitorItem