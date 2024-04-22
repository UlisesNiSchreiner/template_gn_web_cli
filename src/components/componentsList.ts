import { BlockButtonImp } from "./FluxComponents/atomics/BlockButton";
import { MobileText } from "./FluxComponents/atomics/MobileText";
import { TextInputImp } from "./FluxComponents/atomics/TextInput";
import { MobileStepHeader } from "./FluxComponents/viewStepComponents/MobileStepHeader";
import { MobileStepNavigation } from "./FluxComponents/viewStepComponents/MobileStepNavigation";
import { Component } from 'graph-navigation-js'

const components = new Map<string, React.FC<{ component: Component }>>();
components.set('block_button', BlockButtonImp);
components.set('mobile_step_header', MobileStepHeader);
components.set('mobile_step_navigation', MobileStepNavigation);
components.set('text', MobileText)
components.set('text_input', TextInputImp)

export default components;
