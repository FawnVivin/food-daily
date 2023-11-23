import { Controller } from 'react-hook-form'
import { PaperSelect } from 'react-native-paper-select'
import { useState } from 'react'
import { TextInput, useTheme } from 'react-native-paper'

import type { FormSelectProps, SelectItem } from './FormSelect.types'
import type { FC } from 'react'

const FormSelect: FC<FormSelectProps> =
  ({
     control,
     name,
     data,
     icon,
     defaultValue,
    label
   }) => {
    const defaultSelectItem = data.filter((item) => item.value === defaultValue)[0]
    const [selectedList, setSelectedList] = useState<SelectItem[]>([defaultSelectItem])
    const { colors } = useTheme()

    return (
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
            <PaperSelect
              arrayList={data}
              label={label}
              multiEnable={false}
              onSelection={(value) => {
                onChange(value.selectedList[0]._id)
                setSelectedList([...value.selectedList])
              }}
              selectedArrayList={selectedList}
              value={selectedList[0]?.value || value}
              hideSearchBox
              dialogStyle={{ backgroundColor: colors.background }}
              dialogTitleStyle={{
                color: colors.primary
              }}
              dialogCloseButtonText={'Закрыть'}
              dialogDoneButtonText={'Выбрать'}
              checkboxProps={{
                checkboxColor: colors.primary,
                checkboxUncheckedColor: colors.onPrimaryContainer,
                checkboxLabelStyle: { color: colors.onPrimaryContainer },

              }}
              textInputStyle={{
                backgroundColor: colors.backdrop,
                borderRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              }}
              textInputProps={{
                activeUnderlineColor: 'transparent',
                underlineColor: 'transparent',
                left: icon && <TextInput.Icon icon={icon} />
              }}
              containerStyle={{marginBottom:-10}}
            />
          )}
        name={name}
        defaultValue={defaultValue}
      />

    )
  }

export default FormSelect
