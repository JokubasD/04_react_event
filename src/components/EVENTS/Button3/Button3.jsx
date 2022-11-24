export default function Button3() {
  return (
    <button
      className='state1'
      onClick={(event) => {
        event.target.remove();
      }}
    >
      Remove Button
    </button>
  );
}
