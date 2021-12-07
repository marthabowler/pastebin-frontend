import { pasteBinType } from "../pasteBinType";
import SinglePastebin from "./SinglePastebin";

interface PastebinViewProps {
  allPastebins: pasteBinType[];
}

function PastebinView(props: PastebinViewProps): JSX.Element {
  return (
    <>
      <h2>Most recent pastes</h2>
      <div>
        {props.allPastebins.map((pastebin) => (
          <SinglePastebin onePastebin={pastebin} key={pastebin.id} />
        ))}
      </div>
    </>
  );
}

export default PastebinView;
