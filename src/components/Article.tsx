import { GridIntensity } from "../enums";
import useGridIntensity from "../hooks/useGridIntensity";
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
  originalImgUrl,
  compressedImgUrl,
  imageDescription,
  gradient,
  isMain,
}: Props) => {
  const { gridIntensity, gridLoad, gridGeneration, error, isLoading } =
    useGridIntensity();

  return (
    <article>
      {isLoading || gridIntensity === GridIntensity.HIGH ? (
        <Gradient
          color1={gradient.color1}
          color2={gradient.color2}
          color3={gradient.color3}
        >
          {imageDescription}
        </Gradient>
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
