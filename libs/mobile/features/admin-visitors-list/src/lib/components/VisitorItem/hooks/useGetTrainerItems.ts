import { useGetTrainers } from "@food-daily/mobile/api"

import type { SelectItem } from "@food-daily/mobile/ui"

export const useGetTrainerItems = () => {
  const {data, isSuccess} = useGetTrainers()

  if (isSuccess){ 
    return data.map<SelectItem>(({id, name})=> ({_id: String(id), value: name }))
  }

  return []
}