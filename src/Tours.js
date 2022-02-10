import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <section>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
      })}
    </section>
  );
}

export default Tours;
