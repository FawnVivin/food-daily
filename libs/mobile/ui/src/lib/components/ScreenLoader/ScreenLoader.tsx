import { ActivityIndicator } from "react-native-paper";

import { ScreenLoaderRoot } from "./ScreenLoader.styles";

const ScreenLoader = () => (
    <ScreenLoaderRoot>
      <ActivityIndicator animating={true} />
    </ScreenLoaderRoot>
  )

export default ScreenLoader
