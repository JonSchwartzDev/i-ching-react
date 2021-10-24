import { useHistory, useParams } from "react-router";
import {
  staticPageDictionary,
  staticPageNames,
  staticPageSummaries,
  trigrams,
} from "./data";

export default function StaticPage() {
  let { name } = useParams<{ name: string }>();
  let history = useHistory();

  if (name === undefined) {
    name = "tao";
  }

  let index = staticPageDictionary.get(name)!;
  let imgClassName = "col-2 " + (index > 7 ? "" : "trigram ") + name;

  const goToNext = () => {
    let next = index + 1;
    if (next === 8) {
      next = 0;
    }
    let url = "/" + trigrams[next];
    history.push(url);
  };

  return (
    <>
      {index < 8 && (
        <div className="nextbutton" onClick={goToNext}>
          ›
        </div>
      )}

      <div className={imgClassName}></div>
      <div className="h2 col-2">{staticPageNames[index]}</div>
      {staticPageSummaries[index]!.map((para, index) => (
        <div className="spacedline col-2" key={index}>
          {para}
        </div>
      ))}
    </>
  );
}
