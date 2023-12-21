import "./App.css";
import Card from "./Card";
import movies from "./movies.json";

function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "52px",
          color: "white",
          paddingTop: "20px",
        }}
      >
        Movies
      </h1>
      <Card movies={movies} />
    </>
  );
}

export default App;
