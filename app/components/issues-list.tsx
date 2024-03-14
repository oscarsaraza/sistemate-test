export function IssuesListItem({ issue, onClick, isSelected }) {
  const onDelete = async (issueId) => {
    await fetch("/api/issues", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: issueId }),
    });
  };

  return (
    <li
      onClick={() => onClick(isSelected ? null : issue)}
      className={isSelected ? "bg-gray-200" : ""}
    >
      {issue.title} - {issue.description}{" "}
      {isSelected && <button onClick={() => onDelete(issue.id)}>🚮</button>}
    </li>
  );
}

export function IssuesList({ children }) {
  return (
    <div className="max-w-96">
      <h2>Issues</h2>
      <ul>{children}</ul>
    </div>
  );
}
