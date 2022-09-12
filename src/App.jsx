import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="content">
      <div className="btn-group">
        <Button color="violet" size="large">
          Button Stitches
        </Button>
        <Button color="violet" size="large" outlined={true}>
          Button Stitches
        </Button>
      </div>
      <div className="btn-group">
        <Button color="gray" size="small">
          Button Stitches
        </Button>

        <Button color="gray" size="small" outlined={true}>
          Button Stitches
        </Button>
      </div>
    </div>
  );
}

export default App;
