import { useParams } from "react-router";
import {
  staticPageDictionary,
  staticPageNames,
  staticPageSummaries,
} from "./data";

export default function StaticPage() {
  let { name } = useParams<{ name: string }>();
  if (name === undefined) {
    name = "tao";
  }
  let index = staticPageDictionary.get(name)!;
  let imgClassName = "col-2 " + (index > 7 ? "" : "trigram ") + name;
  return (
    <>
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
