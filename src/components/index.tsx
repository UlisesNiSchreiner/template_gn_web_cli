import { Component } from 'graph-navigation-js'
import components from './componentsList'

const componentFactory = (component: Component): JSX.Element | null => {
  const uiType = component.uiType;
  const ComponentFx = components.get(uiType);
  return ComponentFx ? <ComponentFx component={component} /> : null;
};

export default componentFactory;
