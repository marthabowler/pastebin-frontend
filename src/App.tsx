import { useEffect, useState } from "react";

interface pasteBin {
  id: number;
  input: string;
  title?: string;
  creation_date: string;
}

function App(): JSX.Element {
  const [pastebinState, setPastebinState] = useState<pasteBin[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch("http://localhost:4000/");
      const jsonBody = await resp.json();
      setPastebinState(jsonBody);
    };
    loadData();
  }, [pastebinState]);

  return <>{pastebinState.map((item) => item.input)}</>;
}
export default App;
