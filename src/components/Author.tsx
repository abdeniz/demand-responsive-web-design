import { GridIntensity } from "../enums";

type Props = {
  author: string;
  authorJobTitle: string;
  authorImgUrl: string;
  gridIntensity: GridIntensity;
};

const Author = ({
  author,
  authorJobTitle,
  authorImgUrl,
  gridIntensity,
}: Props) => {
  return (
    <div className="article-author">
      {gridIntensity !== GridIntensity.HIGH ? (
        <img className="article-author__img" src={authorImgUrl} alt={author} />
      ) : (
        <div className="article-author__img">DA</div>
      )}
      <div>
        <p className="article-author__name">{author}</p>
        <p className="article-author__job-title">{authorJobTitle}</p>
      </div>
    </div>
  );
};

export default Author;
