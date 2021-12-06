import { config } from "dotenv";
import { useEffect, useState } from "react";

config();

interface pasteBin {
  id: number;
  input: string;
  title?: string;
  creation_date: string;
}

const apiBaseURL = process.env.REACT_APP_API_BASE;

function App(): JSX.Element {
  const [pastebinState, setPastebinState] = useState<pasteBin[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch(`${apiBaseURL}`);
      const jsonBody = await resp.json();
      setPastebinState(jsonBody);
    };
    loadData();
  }, [pastebinState]);

  return <>{pastebinState.map((item) => item.input)}</>;
}
export default App;
