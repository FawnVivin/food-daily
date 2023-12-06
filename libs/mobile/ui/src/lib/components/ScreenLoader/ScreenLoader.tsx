import { ActivityIndicator } from "react-native-paper";
import { ScreenLoaderRoot } from "./ScreenLoader.styles";

const ScreenLoader = () => {
  return(
    <ScreenLoaderRoot>
      <ActivityIndicator animating={true} />
    </ScreenLoaderRoot>
  )
}
export default ScreenLoader
