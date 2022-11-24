import './Feature.css';
export default function Feature(props) {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div className={`feature feature${props.id}`} style={style}>
      [FEATURE]
    </div>
  );
}
