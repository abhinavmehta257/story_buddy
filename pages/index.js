import Head from "next/head";
import styles from "../styles/Home.module.css";
import InstallPWAbutton from "../components/blocks/InstallPWAbutton";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>{" "}
      {/* <InstallPWAbutton /> */}
    </>
  );
}
