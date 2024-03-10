import Signup from "../components/Signup";
import HtmlHeader from "../components/blocks/htmlHeader";
import withAuth from "../helpers/withAuth";
function signup() {
  return (
    <>
      <HtmlHeader title={"Sign Up"} />
      <Signup />
    </>
  );
}

export default signup;
