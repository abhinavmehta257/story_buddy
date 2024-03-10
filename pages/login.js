import { useRouter } from "next/router";
import Login from "../components/Login";
import HtmlHeader from "../components/blocks/htmlHeader";
import withAuth from "../helpers/withAuth";

function login() {
  return (
    <>
      <HtmlHeader title={"Login"} />
      <Login />
    </>
  );
}

export default withAuth(login);
