import React, { useEffect, useState } from 'react';
import './App.css';
import WaterTube, { Color } from './components/WaterTube';
import styled from 'styled-components';
import mergeStacks from './actions/mergeStacks';
import Stack from './hooks/stack';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [tube1] = useState(new Stack(4, 'a'));
  const [tube2] = useState(new Stack(4, 'b'));
  const [tube3] = useState(new Stack(4, 'c'));
  const [tube4] = useState(new Stack(4, 'd'));
  const [tube5] = useState(new Stack(4, 'e'));

  useEffect(() => {
    console.debug('Here');
    tube1.push(Color.BLUE);
    tube1.push(Color.RED);
    tube1.push(Color.GRAY);
    tube1.push(Color.YELLOW);

    tube2.push(Color.BLUE);
    tube2.push(Color.ORANGE);
    tube2.push(Color.GRAY);
    tube2.push(Color.YELLOW);

    tube3.push(Color.YELLOW);
    tube3.push(Color.YELLOW);
    tube3.push(Color.GRAY);
    tube3.push(Color.RED);
  }, []);

  const [selected, setSelected] = useState<number>(0);

  const tubeClickHandler = (index: number) => {
    if(selected == index) {
      setSelected(0);
      return;
    }
    if(selected == 0) {
      setSelected(index);
      return;
    }
    console.debug(`Merging ${selected} to ${index}`);
    mergeStacks(getStack(selected), getStack(index));
    setSelected(0);
  }

  const getStack = (index: number) => {
    switch (index) {
      case 1:
        return tube1;
      case 2:
        return tube2;
      case 3:
        return tube3;
      case 4:
        return tube4;
      case 5:
        return tube5;
      default:
        throw new Error(`Tube Not Found. index: ${index}`);
    }
  }


  return (
    <Container>
      <WaterTube onClick={() => tubeClickHandler(1)} selected={selected == 1} colors={tube1.stack} />
      <WaterTube onClick={() => tubeClickHandler(2)} selected={selected == 2} colors={tube2.stack} />
      <WaterTube onClick={() => tubeClickHandler(3)} selected={selected == 3} colors={tube3.stack} />
      <WaterTube onClick={() => tubeClickHandler(4)} selected={selected == 4} colors={tube4.stack} />
      <WaterTube onClick={() => tubeClickHandler(5)} selected={selected == 5} colors={tube5.stack} />
    </Container>
  );
}

export default App;
