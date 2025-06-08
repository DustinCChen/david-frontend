import "./App.css";

function App() {
  const obj = {
    name: "Vite + React",
    version: "1.0.0",
    description: "A Vite + React project",
  };
  const arr = [1, 2, 3, 4, 5];
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    params: number
  ) => {
    console.log("Vite + React clicked", params);
    console.log("Event:", e);
    e.preventDefault();
  };
  //  范型后面的逗号不可省略，否则会报错
  const handleClick2 = <T,>(params: T) => {
    console.log("Vite + React clicked", params);
  };
  const a: string = "App";
  // 数组的遍历。，使用map方法,返回的是数组,其他方法如forEach等返回的是undefined
  const arr2: string[] = ["a", "b", "c", "d", "e"];
  // 三元表达式代替if else
  const flag = true;

  return (
    <>
      <div>{JSON.stringify(obj, null, 2)}</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
        <button onClick={(e) => handleClick(e, 1)}>Click me1</button>
      </div>
      <div className="card">
        <button onClick={() => handleClick2("abc")}>Click me2</button>
      </div>
      <div className="card">
        <button onClick={() => handleClick2(arr)}>Click me3</button>
      </div>
      <div className={`card-${a}`}>
        <button onClick={() => handleClick2(JSON.stringify(obj))}>
          Click me4
        </button>
      </div>
      {arr2.map((item, index) => (
        <div key={index} className="card">
          <button onClick={() => handleClick2(item)}>{item}</button>
        </div>
      ))}
      {
        // flag ? arr.map(item=> <div key={item}>{item}</div>) : null;
        flag ? arr.map(item=> (<div key={item}>{item}</div>)) : null
      }
    </>
  );
}

export default App;
