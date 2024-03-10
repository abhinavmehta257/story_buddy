import ForgotPassword from "../components/ForgotPassword";
import HtmlHeader from "../components/blocks/htmlHeader";

export default function signup() {
  return (
    <>
      <HtmlHeader title={"Forgot Password"} />
      <ForgotPassword />
    </>
  );
}
