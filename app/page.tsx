import { IssuesList } from "./components/issues-list";
import { NewIssueForm } from "./components/new-issue-form";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/issues", {
    cache: "no-store",
  });
  const issues = await response.json();

  return (
    <div>
      <IssuesList issues={issues} />
      <NewIssueForm />
    </div>
  );
}
