import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((t) => t.id !== id);
    setTours(newTours);
  };

  const getTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
    console.log(tours);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <h1>No more tours to show</h1>
        <button className="btn" onClick={() => getTours()}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Tour List</h1>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  );
}

export default App;
