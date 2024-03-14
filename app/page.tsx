import { IssuesClient } from "./components/issues-client";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/issues", {
    cache: "no-store",
  });
  const issues = await response.json();

  return <IssuesClient issues={issues} />;
}
