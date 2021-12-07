import { config } from "dotenv";
import { useEffect, useState } from "react";
import PastebinView from "./components/PastebinView";
import { pasteBinType } from "./pasteBinType";

config();

const apiBaseURL = process.env.REACT_APP_API_BASE;

function App(): JSX.Element {
  const [allPastebins, setAllPastebins] = useState<pasteBinType[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch(`${apiBaseURL}pastes`);
      const jsonBody = await resp.json();
      setAllPastebins(jsonBody.data);
    };
    loadData();
  }, [allPastebins]);

  return (
    <>
      <h1>Martha and Linus' pastebin heaven</h1>
      <PastebinView allPastebins={allPastebins} />
    </>
  );
}
export default App;
