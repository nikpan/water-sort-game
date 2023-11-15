import React from "react";
import styled from "styled-components";

export const enum Color {
  RED = "RED",
  BLUE = "BLUE",
  GRAY = "GRAY",
  ORANGE = "ORANGE",
  YELLOW = "YELLOW",
  GREEN = "GREEN",
  LIGHT_GREEN = "LIGHT_GREEN",
  LIGHT_BLUE = "LIGHT_BLUE",
  LIGHT_YELLOW = "LIGHT_YELLOW",
  LIGHT_ORANGE = "LIGHT_ORANGE",
  PINK = "PINK",
  LIGHT_PINK = "LIGHT_PINK"
}

export const ColorList = [
  Color.RED,
  Color.BLUE,
  Color.GRAY,
  Color.ORANGE,
  Color.YELLOW,
  Color.GREEN,
  Color.PINK,
  Color.LIGHT_GREEN,
  Color.LIGHT_BLUE,
  Color.LIGHT_YELLOW,
  Color.LIGHT_ORANGE,
  Color.LIGHT_PINK
]

export interface WaterTubeProps {
  colors: Color[];
  onClick?: () => void;
  selected?: boolean;
}

const Tube = styled.div`
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  margin: 10px;
  height: 225px;
  width: 50px;
  display: flex;
  flex-direction: column-reverse;
`;

const Section = styled.div`
  background-color: ${props => props.color};
  width: 50px;
  height: 50px;
`

const WaterTube = (props: WaterTubeProps) => {
  const { colors, onClick, selected = false } = props;
  let sections = colors.slice(0, Math.min(4, colors.length));
  return (
    <Tube style={{marginTop: selected ? 10 : 50}} onClick={onClick}>
      {sections.map(sectionColor => <Section color={sectionColor.toLowerCase()}></Section>)}
    </Tube>
  )
}

export default WaterTube;