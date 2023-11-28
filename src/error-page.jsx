import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>我超，什么情况</h1>
      <p>我的评价是不如原神</p>
      <p>{error.statusText || error.message}</p>
      <p>米哈游是我叠，我是沙比</p>
    </div>
  );
}

