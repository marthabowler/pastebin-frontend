import { pasteBinType } from "../pasteBinType";

interface SinglePastebinProps {
  onePastebin: pasteBinType;
}

function SinglePastebin(props: SinglePastebinProps): JSX.Element {
  return (
    <>
      <h3>{props.onePastebin.title}</h3>
      <h3>{props.onePastebin.creation_date}</h3>
      <p>{props.onePastebin.input}</p>
      <button className="btn btn-warning">See more</button>
      <hr />
    </>
  );
}

export default SinglePastebin;
