import { moduleContext } from "../../../../Context";
import { useContext } from "react";
import { Button } from '@mui/joy';
import { BlockButton } from 'graph-navigation-js'

export const BlockButtonImp: React.FC<{  component: BlockButton }> = ({ component }) => {
  const blockButtonComponent = component as BlockButton
    const { state } = useContext(moduleContext);
    const eventHandler = () => {
      if (blockButtonComponent.onClickEvent) {
        state.eventHandler(blockButtonComponent.onClickEvent);
      }
    }

    const defaultSpacing = 5;

    const topSpacing = (blockButtonComponent.spacing?.top ?? defaultSpacing) + 'vw';
    const leftSpacing = (blockButtonComponent.spacing?.left ?? defaultSpacing) + 'vw';
    const rightSpacing = (blockButtonComponent.spacing?.right ?? defaultSpacing) + 'vw';
    const bottomSpacing = (blockButtonComponent.spacing?.bottom ?? defaultSpacing) + 'vw';

    return (
      <div style={{ width: '100%', backgroundColor: blockButtonComponent.backgroundColor, paddingTop: topSpacing, paddingRight: leftSpacing, paddingLeft: rightSpacing, paddingBottom: bottomSpacing}}>
        <Button sx={() => ({
        background: blockButtonComponent.color,
        fontWeight: 'lg',
        '&:hover': {
          background: blockButtonComponent.hoverColor,
        },
      })} fullWidth={true} size="lg" onClick={eventHandler} disabled={state.fetching}>{blockButtonComponent.text}</Button>
      </div>
    )
};
