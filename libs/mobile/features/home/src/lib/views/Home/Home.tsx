import { ScrollView } from "react-native";
import { ScreenLoader, Section } from "@food-daily/mobile/ui";
import { useGetDailyStats, useGetUser } from "@food-daily/mobile/api";
import { Chip } from "react-native-paper";

import { HomeHeader, MealList, StatisticsBlock, WaterTracker } from "../../components";

import { HomeRoot } from "./Home.styles";

import type { UserNorms } from "@food-daily/shared/types";
const Home = () => {
  const { data: user, isSuccess: isUserSuccess, isLoading: isUserLoading, error: userError, refetch } = useGetUser();
  const {
    data: stats,
    isSuccess: isStatsSuccess,
    isLoading: isStatsLoading,
    error: statsError
  } = useGetDailyStats(user?.id);


  if (statsError || userError) return <Chip icon="information" mode={"outlined"}>Простите у нас ошибочки(((</Chip>;
  if (!isUserSuccess || !isStatsSuccess || isUserLoading || isStatsLoading) return <ScreenLoader />;
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
