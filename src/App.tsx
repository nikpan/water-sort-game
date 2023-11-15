import React, { useEffect, useState } from 'react';
import './App.css';
import WaterTube, { Color } from './components/WaterTube';
import styled from 'styled-components';
import mergeStacks from './actions/mergeStacks';
import TubeSet from './state/tubeSet';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const initialValues = [
    [Color.BLUE, Color.RED, Color.BLUE, Color.YELLOW],
    [Color.BLUE, Color.BLUE, Color.RED, Color.YELLOW],
    [Color.YELLOW, Color.YELLOW, Color.RED, Color.RED],
    [],
    []
  ]
  const [tubeSet, setTubeSet] = useState(new TubeSet(4, 5, initialValues))
  const [selected, setSelected] = useState(-1);

  const tubeClicked = (index: number) => {
    if (selected === index) {
      setSelected(-1);
      return;
    }
    if (selected === -1) {
      setSelected(index);
      return;
    }
    console.debug(`Merging ${selected} to ${index}`);
    mergeStacks(tubeSet.tubes[selected], tubeSet.tubes[index]);
    setTubeSet(tubeSet);
    setSelected(-1);
  }

  const resetClicked = () => {
    setTubeSet(new TubeSet(4, 5, initialValues));
    setSelected(-1);
  }

  return (
    <>
      <button onClick={resetClicked}>Reset</button>
      <Container>
        {tubeSet.tubes.map((tube, i) => (
          <WaterTube onClick={() => tubeClicked(i)} selected={selected === i} colors={tube.stack} />
        ))}
      </Container>
    </>
  );
}

export default App;
