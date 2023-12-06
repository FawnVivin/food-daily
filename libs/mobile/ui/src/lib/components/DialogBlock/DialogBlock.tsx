import { Button, Dialog, Portal, Text } from 'react-native-paper'

import type { FC } from 'react'
import type { DialogBlockProps } from './DialogBlock.types'

const DialogBlock: FC<DialogBlockProps> = ({ children, hideDialog, show }) => (
        <Portal>
            <Dialog visible={show} onDismiss={hideDialog}>
                <Dialog.Content>
                    <Text variant='bodyLarge'>{children}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Закрыть</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>

    )

export default DialogBlock
