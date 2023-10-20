import React, { ReactElement, useState } from "react";
import { Button, Content } from "./styles";
import { TabsProps } from "./types";

const Tabs = ({
  children,
  bgColor,
  borderColor,
  width,
  contentColor,
  highlightedLabelColor,
  labelColor,
  labelFontSize,
  contentFontSize,
  labelFontFamily,
  contentFontFamily,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div>
        {React.Children.map(children, (child: ReactElement, index) => {
          return (
            <Button
              key={index}
              onClick={() => handleTabClick(index)}
              bgColor={bgColor}
              borderColor={borderColor}
              width={width}
              highlightedLabelColor={highlightedLabelColor}
              labelColor={labelColor}
              labelFontSize={labelFontSize}
              labelFontFamily={labelFontFamily}
              selected={activeTab === index}
            >
              {child.props.label}
            </Button>
          );
        })}
      </div>
      <div>
        {React.Children.map(
          children,
          (child: ReactElement, index) =>
            activeTab == index && (
              <Content
                contentFontFamily={contentFontFamily}
                contentFontSize={contentFontSize}
                contentColor={contentColor}
              >
                {child}
              </Content>
            )
        )}
      </div>
    </div>
  );
};
export default Tabs;
