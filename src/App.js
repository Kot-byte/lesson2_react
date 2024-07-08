import React from 'react';
import HighlightText from './HighlightText';
import Icon from './Icon';
import { FaSun } from 'react-icons/fa';
import Accordion from './Accordion';
import Panel from './Panel';
import Tabs from './Tabs';

function App() {
  return (
    <div className="App">
      <HighlightText color="red">
        <p>This text should be red</p>
      </HighlightText>
      <HighlightText color="blue">
        <p>This text should be blue</p>
      </HighlightText>
      <p>Icons Example</p>
      <Icon icon={<FaSun />} />
      <h2>Accordion Example</h2>
      <Accordion>
        <Panel title="Panel 1">Content for Panel 1</Panel>
        <Panel title="Panel 2">Content for Panel 2</Panel>
        <Panel title="Panel 3">Content for Panel 3</Panel>
      </Accordion>

      <h2>Tabs Example</h2>
      <Tabs>
        <div title="Tab 1">
          <p>Content for Tab 1</p>
        </div>
        <div title="Tab 2">
          <p>Content for Tab 2</p>
        </div>
        <div title="Tab 3">
          <p>Content for Tab 3</p>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
