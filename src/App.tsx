import { config } from "dotenv";
import { useEffect, useState } from "react";
import AddPastebin from "./components/AddPastebin";
import PastebinView from "./components/PastebinView";
import { pasteBinType } from "./pasteBinType";
import axios from "axios";
import "./App.css";

config();

const apiBaseURL = process.env.REACT_APP_API_BASE;

function App(): JSX.Element {
  const [allPastebins, setAllPastebins] = useState<pasteBinType[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newInput, setNewInput] = useState("");

  async function handleAddPaste() {
    const body = {
      title: newTitle,
      input: newInput,
    };
    const resp = await axios.post(`${apiBaseURL}pastes`, body);
    console.log("Added successfully", resp);
  }

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch(`${apiBaseURL}pastes`);
      const jsonBody = await resp.json();
      setAllPastebins(jsonBody.data);
    };
    loadData();
  }, [allPastebins]);

  return (
    <div className="main">
      <h1>Martha and Linus' pastebin heaven</h1>
      <AddPastebin
        newInput={newInput}
        newTitle={newTitle}
        setNewInput={setNewInput}
        setNewTitle={setNewTitle}
        handleAddPaste={handleAddPaste}
      />
      <PastebinView allPastebins={allPastebins} />
    </div>
  );
}
export default App;
