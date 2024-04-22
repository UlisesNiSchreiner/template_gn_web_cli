import { moduleContext } from "../../../Context";
import LoadScreen from "../../atomics/LoadScreen";
import { ContainerLayout } from "../../layouts/ContainerLayout";
import { FullScreenLayout } from "../../layouts/FullScreenLayout";
import { useContext } from "react";
import { ScrollingComponents } from "../../posicioning/ScrollingComponents";
import { ViewStep } from 'graph-navigation-js'

export const DesktopViewStep: React.FC<{ viewStep: ViewStep }> = ({
  viewStep,
}) => {
  const { state } = useContext(moduleContext);
  const defaultValue = "#ffffff";

  return (
    <FullScreenLayout backGroundColor={viewStep.backGroundColor ?? defaultValue}>
      <ContainerLayout backGroundColor={viewStep.backGroundColor ?? defaultValue}>
      <ScrollingComponents
            components={viewStep?.components ?? []}
          ></ScrollingComponents>
      </ContainerLayout>
      {state.fetching && <LoadScreen></LoadScreen>}
    </FullScreenLayout>
  );
};