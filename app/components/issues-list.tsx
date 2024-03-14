export function IssuesListItem({ issue, onClick, isSelected }) {
  return (
    <li onClick={onClick} className={isSelected ? "bg-gray-200" : ""}>
      {issue.title} - {issue.description}
    </li>
  );
}

export function IssuesList({ children }) {
  return (
    <>
      <h2>Issues</h2>
      <ul>{children}</ul>
    </>
  );
}
