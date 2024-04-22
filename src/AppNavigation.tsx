import { useFluxNavigation } from "./hooks/useFluxNavigation";
import { useContext, useEffect, useState } from "react";
import { moduleContext } from "./Context";
import { useEventManager } from "./hooks/useEventManager";
import { getFirstConnection } from "./untils/NavigationUntils";
import ViewStepFactory from "./components/FluxComponents/viewSteps";
import LoadScreen from "./components/atomics/LoadScreen";
import { ClientNavigation } from "graph-navigation-js";

interface Props {
  entryPoint: string;
  clientNavigation: ClientNavigation
}

export const AppNavigation = (props: Props) => {
  const [lastConnectionExecuted, executeConnection] = useState(getFirstConnection(props.entryPoint));
  const { result: viewStepToRenderize, fetching, addOutput } = useFluxNavigation(
    props.clientNavigation,
    lastConnectionExecuted
  );
  const navigateHandler = (navigationId: string): void => {
    const connection = viewStepToRenderize.connections[navigationId];
    executeConnection(connection);
  };
  const { executeEvent } = useEventManager(navigateHandler, addOutput);
  const { state, setState } = useContext(moduleContext);
  useEffect(() => {
    setState({
      ...state,
      fetching: fetching,
      eventHandler: executeEvent,
    });
  }, [fetching]);

  if (viewStepToRenderize != undefined) {
    const functionalComponent = ViewStepFactory(viewStepToRenderize);
    if (functionalComponent != undefined) {
      return functionalComponent;
    }
  }

  return <LoadScreen></LoadScreen>;
};
