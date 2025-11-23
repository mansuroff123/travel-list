export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>😍 Sayohatingiz uchun nimalar kerak?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">Ro'yxat</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>🧳 Sizning ro'yxatingizda X ta narsa bor va siz X (X%) ni to'plagansiz</em>
    </footer>
  );
}
