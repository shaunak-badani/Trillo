import "./page.scss";

export default function Home() {
  return (
    <div className={"container"}>
      <header className="header">
        Header part
      </header>
      <div className="content">
        <nav className="sidebar">
          Navigation
        </nav>
        <main className="hotel-view">
          Hotel View
        </main>
      </div>
    </div>
  );
}
