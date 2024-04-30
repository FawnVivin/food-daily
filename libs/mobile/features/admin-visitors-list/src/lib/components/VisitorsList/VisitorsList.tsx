import { ScrollView } from "react-native"

import { VisitorItem } from "../VisitorItem"

import type { FC} from 'react';
import type { VisitorsListProps } from "./VisitorsList.types"


const VisitorsList: FC<VisitorsListProps> = ({ visitors }) => (
  <ScrollView>
    {visitors.map((visitor) => (
      <VisitorItem key={visitor.id}  {...visitor} />
    ))}
  </ScrollView>
)

export default VisitorsList