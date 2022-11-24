export default function Button2() {
  return (
    <button
      onClick={(event) => {
        let timesClicked = Number(event.target.innerHTML.slice(9));
        timesClicked += 1;
        event.target.innerHTML = `Clicked: ${timesClicked}`;
      }}
      className='state1'
    >
      Clicked: 0
    </button>
  );
}
