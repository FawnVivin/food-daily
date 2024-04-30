import { Button, Text, useTheme } from "react-native-paper"
import { FormSelect } from "@food-daily/mobile/ui";
import { useForm } from "react-hook-form";
import { useDeleteVisitor, useUpdateVisitorTrainer } from "@food-daily/mobile/api";

import { ModalButtons, VisitorModalRoot } from "./VisitorModal.styles";

import type { VisitorModalProps } from "./VisitorModal.types";
import type { UpdateVisitorTrainerDto } from "@food-daily/shared/types";
import type { SubmitHandler} from "react-hook-form";
import type { FC } from "react";

export const VisitorModal:FC<VisitorModalProps> = ({
  trainer,
  trainerItems,
  visitorName,
  visitorId,
  onClose
}) => {
  const { control, handleSubmit } = useForm<{ trainer: string }>()
  const { mutate:updateVisitor } = useUpdateVisitorTrainer(visitorId)
  const { mutate:deleteVisitor } = useDeleteVisitor(visitorId)
  const { colors } = useTheme()

  const handleEdit: SubmitHandler<{ trainer: string }> = ({trainer}) => {
    const body: UpdateVisitorTrainerDto = {
      trainerId: Number(trainer)
    }

   updateVisitor(body, {
      onSuccess() {
        onClose()
      }
    })
  }

  const handleDelete = () => {
    deleteVisitor(undefined, { onSuccess: () => onClose() })
  }

  return (
    <VisitorModalRoot>
      <Text variant={'titleLarge'}>🐨 {visitorName}</Text>
      <FormSelect
        name={'trainer'}
        label={'Выберите тренера'}
        data={trainerItems}
        defaultValue={String(trainer?.id) || ''}
        icon={'weight-lifter'}
        control={control}
      />
      <ModalButtons>
        <Button
          mode={'contained'}
          textColor={colors.onError}
          buttonColor={colors.error}
          onPress={handleDelete}
        >
          Удалить
        </Button>
        <Button mode={'contained'} onPress={handleSubmit(handleEdit)}>
          Применить
        </Button>
      </ModalButtons>
    </VisitorModalRoot>
  )
}

export default VisitorModal