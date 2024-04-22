import { useState, useEffect } from "react";
import { Connection, ClientNavigation, ViewStep } from 'graph-navigation-js'

export const useFluxNavigation = (
  clientNavigation: ClientNavigation,
  connection: Connection
) => {
  const [result, setViewStep] = useState(new ViewStep(""));
  const [fetching, setFetching] = useState(true);
  const [output, setOutput] = useState({});

  const addOutput = (key: string, value: string) => {
    setOutput({
      ...output,
      [key]: value,
    });
  };

  const clearOutput = () => {
    setOutput({});
  };

  useEffect(() => {
    loadActualViewStep();
  }, [connection]);

  const fetchingCallback = (isFetching: boolean = false): object => {
    setFetching(isFetching);
    if (isFetching) clearOutput();
    return {}
  };

  const loadActualViewStep = async () => {
    const navigationResult = await clientNavigation.navigate(
      connection,
      output,
      fetchingCallback
    );
    setViewStep(navigationResult);
  };

  return {
    result,
    fetching,
    loadActualViewStep,
    addOutput,
    output,
    clearOutput,
  };
};
