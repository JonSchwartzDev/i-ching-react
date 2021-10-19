import { useHistory, useParams } from "react-router";
import {
  combinations,
  images,
  judgments,
  staticPageDictionary,
  staticPageNames,
  trigrams,
} from "./data";

export default function Hexagram() {
  let history = useHistory();

  let { upper, lower } = useParams<{ upper: string; lower: string }>();
  if (upper === undefined) {
    upper = "earth";
  }
  if (lower === undefined) {
    lower = "earth";
  }
  let indexUpper = staticPageDictionary.get(upper)!;
  let upperClassName = "col-2 trigram " + upper;
  let indexLower = staticPageDictionary.get(lower)!;
  let lowerClassName = "col-2 trigram " + lower;

  const goToNext = () => {
    let nextIndexUpper = indexUpper;
    let nextIndexLower = indexLower + 1;
    if (nextIndexLower === 8) {
      nextIndexLower = 0;
      nextIndexUpper = nextIndexUpper + 1;
      if (nextIndexUpper === 8) {
        nextIndexUpper = 0;
      }
    }
    let url = "/" + trigrams[nextIndexUpper] + "/" + trigrams[nextIndexLower];
    history.push(url);
  };

  return (
    <>
      <div className="nextbutton" onClick={goToNext}>
        ›
      </div>
      <div className={upperClassName}></div>
      <div className="h2 col-2">{staticPageNames[indexUpper]}</div>
      <div className={lowerClassName}></div>
      <div className="h2 col-2">{staticPageNames[indexLower]}</div>
      <div className="h2 col-2">{combinations[indexUpper][indexLower]}</div>
      {judgments[indexUpper][indexLower]!.map((para, index) => (
        <div className="spacedline col-2" key={index}>
          {para}
        </div>
      ))}
      <div className="h2 col-2">The Image</div>
      {images[indexUpper][indexLower]!.map((para, index) => (
        <div className="spacedline col-2" key={index}>
          {para}
        </div>
      ))}
    </>
  );
}
