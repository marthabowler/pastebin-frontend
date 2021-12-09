import { pasteBinType } from "../pasteBinType";
import { useState } from "react";

interface SinglePastebinProps {
  onePastebin: pasteBinType;
}

function SinglePastebin(props: SinglePastebinProps): JSX.Element {
  const [expand, setExpand] = useState(false);

  function checkLines(input: string) {
    if (input.split("\n").length > 5) return true;
  }
  return (
    <>
      <h3>{props.onePastebin.title}</h3>
      <h6>
        {props.onePastebin.creation_date
          .replace("T", ", ")
          .slice(0, props.onePastebin.creation_date.length - 7)}
      </h6>
      <pre id="input" className={expand ? "" : "text-truncate-container"}>
        {props.onePastebin.input}
      </pre>
      {checkLines(props.onePastebin.input) ? (
        <button onClick={() => setExpand(!expand)} className="btn btn-warning">
          {expand ? "See less" : "See more"}
        </button>
      ) : (
        ""
      )}
      <hr />
    </>
  );
}

export default SinglePastebin;
