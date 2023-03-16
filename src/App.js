import GreenLink from "./GreenLink";
import List from "./List";
import "./List.css";
import RedButton from "./RedButton";
import "./RedButton.css";
import "./styles.css";
import "./GreenLink.css";
import Underline from "./Underline";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <RedButton>Hello</RedButton>
      <List />
      <GreenLink to = "google.com">Hello</GreenLink>
      <GreenLink to = "youTube.com">How are you</GreenLink>
      <GreenLink to = "yandex.com">Hello</GreenLink>
<Underline>London is the capital of Great Britain</Underline>
    </div>
  );
}
export default App;
