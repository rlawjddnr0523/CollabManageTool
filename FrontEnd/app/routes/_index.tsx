import type { MetaFunction } from "@remix-run/node";
import Pg_1 from "~/routes/main";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Pg_1/>
    </>
  );
}
