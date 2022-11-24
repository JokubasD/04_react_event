export default function MathButton({ text, action, numbers }) {
  return (
    <button
      onClick={(e) => {
        let result;
        console.log('action ===', action);
        switch (action) {
          case '-':
            result = numbers[0] - numbers[1];
            break;
          case '+':
            result = numbers[0] + numbers[1];
            break;
          case '/':
            result = numbers[0] / numbers[1];
            break;
          case '*':
            result = numbers[0] * numbers[1];
            break;
          default:
            result = 0;
        }
        console.log('result ===', result);
        e.target.innerText = `Answer is ${result}`;
      }}
    >
      Show {numbers[0]} {action} {numbers[1]} answer
    </button>
  );
}
