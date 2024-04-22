import CreateComponent from "../../index";
import { Component } from 'graph-navigation-js'

interface Props {
  components: (Component)[];
}

export const ScrollingComponents = ({ components }: Props) => {
  return (
    <div
      style={{
        overflow: "auto",
        height: "100%",
        width: "100%",
      }}
    >
      {components.map((component: Component) =>
        CreateComponent(component)
      )}
    </div>
  );
};
