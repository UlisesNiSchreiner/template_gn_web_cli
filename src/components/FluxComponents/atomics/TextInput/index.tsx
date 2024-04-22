import { moduleContext } from "../../../../Context";
import { useContext } from "react";
import TextField from "@mui/material/TextField";
import { SetOutputEvent, Component, TextInput } from "graph-navigation-js";

export const TextInputImp: React.FC<{ component: Component }> = ({
  component,
}) => {
  const textInputComponent = component as TextInput
  const { state } = useContext(moduleContext);
  const eventHandler = (element: React.ChangeEvent<HTMLInputElement>) => {
    const output = new SetOutputEvent(textInputComponent.output, element.target.value);
    state.eventHandler(output);
  };

  const defaultSpacing = 5;
  const topSpacing = (textInputComponent.spacing?.top ?? defaultSpacing) + "vw";
  const leftSpacing = (textInputComponent.spacing?.left ?? defaultSpacing) + "vw";
  const rightSpacing = (textInputComponent.spacing?.right ?? defaultSpacing) + "vw";
  const bottomSpacing = (textInputComponent.spacing?.bottom ?? defaultSpacing) + "vw";

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: textInputComponent.backgroundColor,
        paddingTop: topSpacing,
        paddingRight: leftSpacing,
        paddingLeft: rightSpacing,
        paddingBottom: bottomSpacing,
      }}
    >
      <TextField
        fullWidth={true}
        disabled={state.fetching}
        label="fullWidth"
        id="fullWidth"
        onChange={eventHandler}
      />
    </div>
  );
};
