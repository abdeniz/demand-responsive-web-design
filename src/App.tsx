import Article from "./components/Article";
import Layout from "./components/Layout";
import { articles } from "./data";

function App() {
  return (
    <div className="App">
      <Layout>
        <main>
          {articles.map(
            (
              {
                title,
                excerpt,
                category,
                date,
                author,
                authorJobTitle,
                authorImgUrl,
                originalImgUrl,
                compressedImgUrl,
                imageDescription,
                gradient,
                isMain,
              },
              index
            ) => (
              <Article
                title={title}
                excerpt={excerpt}
                category={category}
                date={date}
                author={author}
                authorJobTitle={authorJobTitle}
                authorImgUrl={authorImgUrl}
                originalImgUrl={originalImgUrl}
                compressedImgUrl={compressedImgUrl}
                imageDescription={imageDescription}
                gradient={gradient}
                isMain={isMain}
                key={title}
              />
            )
          )}
        </main>
      </Layout>
    </div>
  );
}

export default App;
