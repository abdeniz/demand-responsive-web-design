import { useContext } from "react";
import { GridIntensityContext } from "../App";
import { GridIntensity } from "../enums";
import { Article as Props } from "../types";
import Author from "./Author";
import Gradient from "./Gradient";

const Article = ({
  title,
  excerpt,
  author,
  authorJobTitle,
  authorImgUrl,
  category,
  date,
  articleImage,
  isMain,
}: Props) => {
  const { gridIntensity, isLoading } = useContext(GridIntensityContext);
  const { originalImgUrl, compressedImgUrl, imageDescription, gradient } =
    articleImage;

  return (
    <article>
      {isLoading || gridIntensity === GridIntensity.HIGH ? (
        <Gradient {...gradient}>{imageDescription}</Gradient>
      ) : (
        <img
          className="article-img"
          src={
            gridIntensity === GridIntensity.MEDIUM
              ? compressedImgUrl
              : originalImgUrl
          }
          alt={imageDescription}
        />
      )}

      <div className="article-content">
        <div>
          <h2>
            {category} •{" "}
            <span className="article-date">{date.toLocaleDateString()}</span>
          </h2>
          <h1>{title}</h1>
          <p>{excerpt}</p>
        </div>
        {isMain && (
          <Author
            author={author}
            authorJobTitle={authorJobTitle}
            authorImgUrl={authorImgUrl}
            gridIntensity={gridIntensity}
          />
        )}
      </div>
    </article>
  );
};

export default Article;
