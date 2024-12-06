import "./IconItem.css";

export default function IconItem(props) {
  const { icon, title, description } = props;

  return (
    <div className="icon-container">
      <div className="icon-container-top">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
      </div>

      <p>{description}</p>
    </div>
  );
}
