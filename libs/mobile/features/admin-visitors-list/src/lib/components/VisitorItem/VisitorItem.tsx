import { IconButton, Modal, Portal, useTheme } from "react-native-paper"
import { Fragment, useState } from "react"
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@food-daily/mobile/constants";

import { useGetTrainerItems } from "./hooks";
import { VisitorModal } from "./parts";
import { VisitorItemRoot } from "./VisitorItem.styles"

import type { VisitorWithTrainer } from "@food-daily/shared/types"
import type { FC} from "react";


const VisitorItem:FC<VisitorWithTrainer> = (visitor) => {
  const [visible, setVisible] = useState(false)
  const { colors } = useTheme()
  const toggleModal = () => setVisible(prev=>!prev)
  const containerStyle = {backgroundColor: colors.background, padding: 20, margin: 35, height: 200, borderRadius:20};
  const description = visitor.trainer? `Тренер: ${visitor.trainer.name}`: 'Тренер не назначен'
  const trainerItems = useGetTrainerItems()

  return (
    <Fragment>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={toggleModal}
          contentContainerStyle={containerStyle}
        >
          <QueryClientProvider client={queryClient}>
            <VisitorModal
              trainer={visitor.trainer}
              visitorId={visitor.id}
              trainerItems={trainerItems}
              visitorName={visitor.name}
              onClose={toggleModal}
            />
          </QueryClientProvider>
        </Modal>
      </Portal>
      <VisitorItemRoot
        titleNumberOfLines={2}
        title={visitor.name}
        description={description}
        right={() => (
          <IconButton icon={'square-edit-outline'} onPress={toggleModal} />
        )}
        style={{ paddingRight: 0 }}
      />
    </Fragment>
  )}

export default VisitorItem