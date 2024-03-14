import HtmlHeader from "../components/blocks/HtmlHeader";
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
