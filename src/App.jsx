import { Tabs, Tab } from "./components/Tabs";

const App = () => {
  return (
    <Tabs>
      <Tab label="Tab 1">
        <p>Content for Tab 1</p>
      </Tab>
      <Tab label="Tab 2">
        <p>Content for Tab 2</p>
      </Tab>
      <Tab label="Tab 3">
        <p>Content for Tab 3</p>
      </Tab>
    </Tabs>
  );
};
export default App;
