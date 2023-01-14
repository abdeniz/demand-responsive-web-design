import { createContext } from "react";
import Article from "./components/Article";
import Layout from "./components/Layout";
import { articles } from "./data";
import { GridIntensity } from "./enums";
import useGridIntensity from "./hooks/useGridIntensity";

export const GridIntensityContext = createContext({
  gridIntensity: GridIntensity.HIGH,
  gridGeneration: 0,
  gridLoad: 0,
  isLoading: true,
});

function App() {
  return (
    <GridIntensityContext.Provider value={{ ...useGridIntensity() }}>
      <div className="App">
        <Layout>
          <main>
            {articles.map((article) => (
              <Article {...article} key={article.title} />
            ))}
          </main>
        </Layout>
      </div>
    </GridIntensityContext.Provider>
  );
}

export default App;
