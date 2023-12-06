import { ScrollView } from "react-native";
import { ScreenLoader, Section } from "@food-daily/mobile/ui";
import { useGetUser, useGetDailyStats } from "@food-daily/mobile/api";

import { HomeHeader, MealList, StatisticsBlock, WaterTracker } from "../../components";

import { HomeRoot } from "./Home.styles";

import type { RootStackParamList } from "@food-daily/mobile/types";
import type { FC } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { UserNorms } from "@food-daily/shared/types";

const Home: FC<NativeStackScreenProps<RootStackParamList>> = () => {
  const { data: user, isSuccess: isUserSuccess,isLoading: isUserLoading } = useGetUser();
  const { data: stats, isSuccess: isStatsSuccess, isLoading: isStatsLoading } = useGetDailyStats(user?.id);

  if (!isUserSuccess||!isStatsSuccess || isUserLoading|| isStatsLoading) return <ScreenLoader/>
  const userNorms: UserNorms = {
    calorieNorm: user.calorieNorm,
    carbohydrateNorm: user.carbohydrateNorm,
    proteinNorm: user.proteinNorm,
    fatsNorm: user.fatsNorm
  };

  return (
    <ScrollView>
      <HomeRoot>
        <HomeHeader name={user.name} />
        <StatisticsBlock userNorms={userNorms} currentStats={stats} />
        <Section title={"Приемы пищи"}>
          <MealList />
        </Section>
        <Section title={"Трекер воды"}>
          <WaterTracker />
        </Section>
      </HomeRoot>
    </ScrollView>
  );
};

export default Home;
