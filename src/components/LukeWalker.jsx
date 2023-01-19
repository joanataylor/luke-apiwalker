import { Outlet } from "react-router-dom";
import Form from "./Form";

function LukeWalker() {
  return (
    <>
      <Form />
      <Outlet />
    </>
  )
}

export default LukeWalker;
