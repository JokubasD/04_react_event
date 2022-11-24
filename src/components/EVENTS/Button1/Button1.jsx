export default function Button1() {
  return (
    <button
      onClick={(event) => {
        const currentState = event.target.classList.value;
        currentState === 'state2'
          ? (event.target.className = 'state1')
          : (event.target.className = 'state2');
      }}
      className='state1'
    >
      Change State
    </button>
  );
}
