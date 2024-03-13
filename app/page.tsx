import { IssuesList } from "./components/issues-list";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/issues");
  const issues = await response.json();

  return (
    <div>
      <IssuesList issues={issues} />
    </div>
  );
}
