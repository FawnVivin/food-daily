import { MealItem } from './parts'
import { MealListRoot } from './MealList.styles'

const MealList = () => (
  <MealListRoot>
    <MealItem title={'Завтрак'} description={'Главный прием пищи дня!'} mealType={'breakfast'}/>
    <MealItem title={'Обед'} description={'Сейчас бы супчик...)'} mealType={'lunch'}/>
    <MealItem title={'Ужин'} description={'Скоро спатки'} mealType={'dinner'}/>
  </MealListRoot>
  )

export default MealList
