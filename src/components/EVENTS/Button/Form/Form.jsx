function Form() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const allValues = {
          name: event.target.name.value,
          surname: event.target.surname.value,
          age: event.target.age.value,
        };
      }}
      onReset={() => {
        console.log('Form resetted');
      }}
    >
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <div>
        <label htmlFor='surname'>Surname</label>
        <input type='text' id='surname' />
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <input type='text' id='age' />
      </div>
      <div>
        <input type='submit' />
        <input type='reset' />
      </div>
    </form>
  );
}

export default Form;
