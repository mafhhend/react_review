import Review from "./Review";

export default (props) => {
  return (
    <main>
      <section>
        <div className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </div>
      </section>
    </main>
  );
};
