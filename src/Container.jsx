import "./Container.css";

export function Container({ title, children }) {
  return (
    <div className="container">
      <div className="container-title">{title}</div>
      <div className="container-content">{children}</div>
    </div>
  );
}
