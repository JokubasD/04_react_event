export default function Button() {
  function showAlert() {
    alert('clicked');
  }
  return (
    <button
      onClick={(event) => {
        event.target.style.backgroundColor = 'blue';
      }}
    >
      Click me
    </button>
  );
  //   function showAlert(name) {
  //     alert('clicked ' + name);
  //   }
  //   return <button onClick={() => showAlert('john')}>Click me</button>;
}
