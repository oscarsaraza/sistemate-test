import {
  createIssue,
  deleteIssue,
  getAllIssues,
  updateIssue,
} from "@/app/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  const issues = getAllIssues();
  return Response.json(issues);
}

export async function POST(request: Request) {
  const newIssue = await request.json();
  const createdIssue = createIssue(newIssue);

  return Response.json(createdIssue);
}

export async function PUT(request: Request) {
  const issue = await request.json();
  const updatedIssue = updateIssue(issue.id, issue);

  return Response.json(updatedIssue);
}

export async function DELETE(request: Request) {
  const data = await request.json();
  const deletedIssue = deleteIssue(data.id);

  return Response.json(deletedIssue);
}
