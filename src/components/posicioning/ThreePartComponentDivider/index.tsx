import CreateComponent from "../../index";
import { Component } from 'graph-navigation-js'

interface Props {
    components: Component[]
}

export const ThreePartComponentDivider = ({ components }: Props) => {
  const topComponents: Component[] = [];
  const centerComponents: Component[] = [];
  const bottonComponents: Component[] = [];

  components.forEach((component: Component) => {
    if (component.position == "top") {
      topComponents.push(component);
    } else if (component.position == "botton") {
      bottonComponents.push(component);
    } else {
      centerComponents.push(component);
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      {topComponents && (
        <div style={{ width: "100%", flex: "0 0 auto" }}>
          {topComponents.map((component: Component) =>
            CreateComponent(component)
          )}
        </div>
      )}
      {centerComponents && (
        <div style={{ width: "100%", flex: "1 0 auto" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {centerComponents.map((component: Component) =>
              CreateComponent(component)
            )}
          </div>
        </div>
      )}
      {bottonComponents && (
        <div style={{ width: "100%", flex: "0 0 auto" }}>
          {bottonComponents.map((component: Component) =>
            CreateComponent(component)
          )}
        </div>
      )}
    </div>
  );
};
