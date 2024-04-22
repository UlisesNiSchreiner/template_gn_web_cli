import { ViewStep } from 'graph-navigation-js'
import viewSteps from './viewstepList.ts'

const viewStepFactory = (viewStep: ViewStep): JSX.Element | null => {
  const uiType = viewStep.uiType;
  const Component = viewSteps.get(uiType);
  return Component ? <Component viewStep={viewStep} /> : null;
};

export default viewStepFactory;
