export default function GreetingForm() {
  return (
    <form
      className='greetingsForm'
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        const newEl = document.createElement('p');
        newEl.textContent = `Hello ${event.target.name.value} ${event.target.surname.value}`;
        newEl.className = 'greeting';
        document.body.append(newEl);
      }}
    >
      <label htmlFor='name'>Name</label>
      <input type='text' placeholder='Input your name' id='name' required />
      <label htmlFor='surname'>Surname</label>
      <input
        type='text'
        placeholder='Input your surname'
        id='surname'
        required
      />
      <button className='btn'>Submit</button>
    </form>
  );
}
