import { ScrollView } from "react-native";
import { ScreenLoader, Section } from "@food-daily/mobile/ui";
import { useGetDailyStats, useGetUser } from "@food-daily/mobile/api";
import { Chip } from "react-native-paper";

import { HomeHeader, MealList, StatisticsBlock, WaterTracker } from "../../components";

import { HomeRoot } from "./Home.styles";

import type { VisitorNorms } from "@food-daily/shared/types";

const Home = () => {
  const {data:user, isSuccess, isPending, isError} = useGetUser()  
  const {
    data: stats,
    isSuccess: isStatsSuccess,
    isLoading: isStatsLoading,
    error: statsError
  } = useGetDailyStats(user?.visitor?.id);


  if (statsError || isError) return <Chip icon="information" mode={"outlined"}>Простите у нас ошибочки(((</Chip>;
  if (!isSuccess || !isStatsSuccess || isPending || isStatsLoading) return <ScreenLoader />;
  const {visitor} = user

  if (!visitor) return null

  const userNorms: VisitorNorms = {
    calorieNorm: visitor.calorieNorm,
    carbohydrateNorm: visitor.carbohydrateNorm,
    proteinNorm: visitor.proteinNorm,
    fatsNorm: visitor.fatsNorm
  };

  return (
    <ScrollView>
      <HomeRoot>
        <HomeHeader name={visitor.name} />
        <StatisticsBlock userNorms={userNorms} currentStats={stats} />
        <Section title={"Приемы пищи"}>
          <MealList />
        </Section>
        <Section title={"Трекер воды"}>
          <WaterTracker userId={visitor.id}/>
        </Section>
      </HomeRoot>
    </ScrollView>
  );
};

export default Home;
