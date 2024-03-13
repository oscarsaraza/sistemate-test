function IssuesListItem({ issue }) {
  return (
    <li>
      {issue.title} - {issue.description}
    </li>
  );
}

export function IssuesList({ issues }) {
  return (
    <ul>
      {issues.map((issue) => (
        <IssuesListItem key={issue.id} issue={issue} />
      ))}
    </ul>
  );
}
