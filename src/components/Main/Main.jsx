import Column from "../Column/Column";

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
          </div>
        </div>
      </div>
    </main>
  );
}
