function IssuesListItem({ issue }) {
  return (
    <li>
      {issue.title} - {issue.description}
    </li>
  );
}

export function IssuesList({ issues }) {
  return (
    <>
      <h2>Issues</h2>
      <ul>
        {issues.map((issue) => (
          <IssuesListItem key={issue.id} issue={issue} />
        ))}
      </ul>
    </>
  );
}
