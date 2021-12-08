import { pasteBinType } from "../pasteBinType";
import { useState } from "react";

interface SinglePastebinProps {
  onePastebin: pasteBinType;
}

function SinglePastebin(props: SinglePastebinProps): JSX.Element {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <h3>{props.onePastebin.title}</h3>
      <h6>
        {props.onePastebin.creation_date
          .replace("T", ", ")
          .slice(0, props.onePastebin.creation_date.length - 7)}
      </h6>
      <p className={expand ? "" : "text-truncate-container"}>
        {props.onePastebin.input}
      </p>
      <button onClick={() => setExpand(!expand)} className="btn btn-warning">
        {expand ? "See less" : "See more"}
      </button>
      <hr />
    </>
  );
}

export default SinglePastebin;
