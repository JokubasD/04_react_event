// import Button from './components/EVENTS/Button/Button';
// import Form from './components/EVENTS/Button/Form/Form';
// import Button1 from './components/EVENTS/Button1/Button1';
// import Button2 from './components/EVENTS/Button2/Button2';
// import Button3 from './components/EVENTS/Button3/Button3';
// import GreetingForm from './components/EVENTS/GreetingForm/GreetingForm';

import Content from './components/LAYOUT/Content/Content';
import Feature from './components/LAYOUT/Feature/Feature';
import Header from './components/LAYOUT/Header/Header';
import SignUp from './components/LAYOUT/SignUp/SignUp';

// import MathButton from './components/EVENTS/MathButton/MathButton';
function App() {
  return (
    // <div className='App'>
    //   {/* <h1>Mouse events</h1> */}
    //   {/**Mouse events: click, contextmenu, mouseenter, mouseleave, mousemove */}
    //   {/* <Button /> */}
    //   {/* <h2>Form Events</h2> */}
    //   {/**form events: submit, reset */}
    //   {/* <Form /> */}
    //   <h2>Task One and Two</h2>
    //   <Button1 />
    //   <Button2 />
    //   <Button3 />
    //   <GreetingForm />
    //   <MathButton action={'+'} numbers={[20, 4]} />
    //   <MathButton action={'-'} numbers={[20, 4]} />
    //   <MathButton action={'*'} numbers={[20, 4]} />
    //   <MathButton action={'/'} numbers={[20, 4]} />
    // </div>
    <>
      <Header />
      <main className='mainGrid'>
        <Content />
        <SignUp />
        <Feature color='#F5CF8E' id='1' />
        <Feature color='#F09A9D' id='2' />
        <Feature color='#C8C6FA' id='3' />
      </main>
    </>
  );
}

export default App;
