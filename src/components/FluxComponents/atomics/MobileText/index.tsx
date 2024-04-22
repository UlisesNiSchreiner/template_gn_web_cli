  import { GravityValue, TextType, TextSize, Component, Text } from 'graph-navigation-js'

const getGravityClass = (position: GravityValue) => {
  switch (position) {
    case GravityValue.RIGHT:
      return "d-flex justify-content-end";
    case GravityValue.LEFT:
      return "d-flex justify-content-start";
    case GravityValue.CENTER:
      return "d-flex  justify-content-center";
    default:
      return "d-flex justify-content-center";
  }
};
const getTruncatedClass = (truncated: boolean) => {
  return truncated ? "text-truncate m-0" : "m-0";
};
const getTextTypeClass = (textType: TextType) => {
  switch (textType) {
    case TextType.NORMAL:
      return "fw-normal";
    case TextType.BOLD:
      return "fw-bold";
    case TextType.BOLDER:
      return "fw-bolder";
    case TextType.LIGHT:
      return "fw-light";
    case TextType.LIGTHER:
      return "fw-lighter";
    case TextType.FST_ITALIC:
      return "fst-italic";
    case TextType.FST_NORMAL:
      return "fst-normal";
    default:
      return "fw-normal";
  }
};

const getFontSizeClass = (fontSize: TextSize) => {
  switch (fontSize) {
    case TextSize.SMALL:
      return "fs-6";
    case TextSize.MEDIUM:
      return "fs-5";
    case TextSize.BIG:
      return "fs-4";
    case TextSize.BIG_X:
      return "fs-3";
    case TextSize.BIG_XX:
      return "fs-2";
    case TextSize.BIG_XXX:
      return "fs-1";
    default:
      return "fs-3";
  }
};

export const MobileText: React.FC<{ component: Component }> = ({
  component,
}) => {
  const textComponent = component as Text
  return (
    <div
      className={getGravityClass(textComponent.gravity)}
      style={{ width: "100%", backgroundColor: textComponent.backgroundColor }}
    >
      <p
        className={
          getTruncatedClass(textComponent.truncate) +
          " " +
          getTextTypeClass(textComponent.textType) +
          " " +
          getFontSizeClass(textComponent?.size ?? TextSize.SMALL)
        }
        style={{ color: textComponent.color }}
      >
        {textComponent.text}
      </p>
    </div>
  );
};
