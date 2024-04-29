import { ScrollView } from "react-native"
import { Fragment } from 'react'

import { VisitorItem } from "../VisitorItem"

import { VisitorsListTitle } from "./VisitorsList.styles";

import type { FC} from 'react';
import type { VisitorsListProps } from "./VisitorsList.types"


const VisitorsList: FC<VisitorsListProps> = ({ visitors }) => (
  <Fragment>
    <VisitorsListTitle variant={'titleMedium'}>Мои подопечные 💁🏼‍♀️</VisitorsListTitle>
    <ScrollView>
      {visitors?.map((visitor, index) => (
        <VisitorItem key={visitor.id} itemNumber={index + 1} {...visitor} />
      ))}
    </ScrollView>
  </Fragment>
)

export default VisitorsList