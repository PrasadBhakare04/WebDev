//following are just the examples and approaches are based on just 1 case

//apporach 4 and most optimized
//this is used when you have to render only when the person is won
//This make the pages free from unnecessary html elements

export default function Lucky() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const styles = { color: num1 === num2 ? "green" : "red" };
  return (
    <><div style={styles}>
      <h1>Luck Game</h1>
      {num1 === num2 && <p>You Won</p>}
      <p>the number was {num1}</p>
      <p>your guess was {num2}</p>
      </div>
    </>   
  );
}

//apporach 3
//this approach is almost same as the optimized approach but the difference is
//this approach is used when you have to render something even if the person is lost
// export default function Lucky() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <>
//             <h1>Luck Game</h1>
//             {num1 === num2 ? <p>You Won</p> : <p>You Lost</p>}
//             <p>the number was {num1}</p>
//             <p>your guess was {num2}</p>
//         </>
//     )
// }

//apporach 2
// export default function Lucky() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <>
//             <h1>Luck Game</h1>
//             <p>{num1 === num2 ? "you won" : "you lost"}</p>
//             <p>the number was {num1}</p>
//             <p>your guess was {num2}</p>
//         </>
//     )
// }

//approach 1
// export default function Lucky() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result = num1 === num2 ? "you won" : "you lost";
//     return (
//         <>
//             <h1>Luck Game</h1>
//             <p>{result}</p>
//             <p>the number was {num1}</p>
//             <p>your guess was {num2}</p>
//         </>
//     )
// }
