import React, { useState } from 'react';
import './App.css';
import WaterTube from './components/WaterTube';
import styled from 'styled-components';
import mergeStacks from './actions/mergeStacks';
import TubeSet from './state/tubeSet';
import { generateLevel } from './util/levelGenerator';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const distinctColors = 6;
  const emptyTubeCount = 2;
  const sectionCount = 4;
  const [initialValues, setInitialValues] = useState(generateLevel(distinctColors, sectionCount));
  const [tubeSet, setTubeSet] = useState(new TubeSet(sectionCount, distinctColors + emptyTubeCount, initialValues))
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

  const generateLevelClicked = () => {
    setInitialValues(generateLevel(distinctColors, sectionCount));
    setTubeSet(new TubeSet(sectionCount, distinctColors + emptyTubeCount, initialValues));
    setSelected(-1);
  }

  return (
    <>
      <button onClick={resetClicked}>Reset</button>
      <button onClick={generateLevelClicked}>Generate New Level</button>
      <Container>
        {tubeSet.tubes.map((tube, i) => (
          <WaterTube onClick={() => tubeClicked(i)} selected={selected === i} colors={tube.stack} />
        ))}
      </Container>
    </>
  );
}

export default App;
