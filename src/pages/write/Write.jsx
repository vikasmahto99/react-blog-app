import "./write.css";
import { TiPlus } from "react-icons/ti";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://quotefancy.com/media/wallpaper/3840x2160/3005675-Gabby-Douglas-Quote-I-wanted-to-tell-my-story-and-where-I-came.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <TiPlus  className="writeIcon"/>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
