export const issues = [
  {
    id: 1,
    title: "Issue 1",
    description: "Issue 1 description",
  },
  {
    id: 2,
    title: "Issue 2",
    description: "Issue 2 description",
  },
  {
    id: 3,
    title: "Issue 3",
    description: "Issue 3 description",
  },
];

export function getAllIssues() {
  return issues;
}

export function getIssue(id: number) {
  return issues.find((issue) => issue.id === id);
}

export function createIssue(data: { title: string; description: string }) {
  const newIssue = { id: issues.length + 1, ...data };
  issues.push(newIssue);
  return newIssue;
}

export function updateIssue(
  id: number,
  data: { title: string; description: string }
) {
  const index = issues.findIndex((issue) => issue.id === id);
  issues[index] = { id, ...data };
  return issues[index];
}

export function deleteIssue(id: number) {
  const issue = issues.find((issue) => issue.id === id);
  const index = issues.findIndex((issue) => issue.id === id);
  issues.splice(index, 1);
  return issue;
}
