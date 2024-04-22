import CreateComponent from "../..";
import { FullScreenLayout } from "../../layouts/FullScreenLayout";
import { HeaderNavigationSplitter } from "../../posicioning/HeaderNavigationSplitter";
import { useContext } from "react";
import { moduleContext } from "../../../Context";
import LoadScreen from "../../atomics/LoadScreen";
import { ThreePartComponentDivider } from "../../posicioning/ThreePartComponentDivider";
import { ScrollingComponents } from "../../posicioning/ScrollingComponents";
import { ViewStep, MobileViewStep } from "graph-navigation-js";

export const MobileViewStepImp: React.FC<{ viewStep: ViewStep }> = ({
  viewStep,
}) => {
  const { state } = useContext(moduleContext);
  const mobileViewStep = viewStep as MobileViewStep

  return (
    <FullScreenLayout backGroundColor={mobileViewStep.backGroundColor ?? "#ffffff"}>
      <HeaderNavigationSplitter
        header={mobileViewStep.header ? CreateComponent(mobileViewStep.header) : null}
        navigation={
          mobileViewStep.navigation ? CreateComponent(mobileViewStep.navigation) : null
        }
      >
        {mobileViewStep.organizer == "threePart" ? (
          <ThreePartComponentDivider components={mobileViewStep?.components ?? []} />
        ) : (
          <ScrollingComponents
            components={mobileViewStep?.components ?? []}
          ></ScrollingComponents>
        )}
      </HeaderNavigationSplitter>
      {state.fetching && <LoadScreen></LoadScreen>}
    </FullScreenLayout>
  );
};
