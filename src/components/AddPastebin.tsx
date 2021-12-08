import { Fragment } from "react";

interface AddPastebinProps {
  newTitle: string;
  setNewTitle: (input: string) => void;
  newInput: string;
  setNewInput: (input: string) => void;
  handleAddPaste: () => void;
}

function AddPastebin(props: AddPastebinProps): JSX.Element {
  return (
    <Fragment>
      <br />
      <form className="inputDiv ml-20">
        <input
          className="form-control w-100"
          placeholder="Title (optional)"
          value={props.newTitle}
          onChange={(e) => {
            props.setNewTitle(e.target.value);
          }}
        />
        <br />
        <input
          className="form-control h-75 w-100"
          placeholder="Paste your paste!!"
          value={props.newInput}
          onChange={(e) => {
            props.setNewInput(e.target.value);
          }}
        />
      </form>
      <button className="mb-4" onClick={props.handleAddPaste}>
        Submit your paste
      </button>
    </Fragment>
  );
}

export default AddPastebin;
