import HtmlHeader from "../components/blocks/htmlHeader";
import withAuth from "../helpers/withAuth";

const dashboard = () => {
  return (
    <>
      <HtmlHeader title={"Dashboard"} />
      <div>Dashboard</div>
    </>
  );
};

export default withAuth(dashboard);
