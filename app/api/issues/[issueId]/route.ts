import { getIssue } from "@/app/lib/data";

export async function GET(
  request: Request,
  { params }: { params: { issueId: string } }
) {
  const { issueId } = params;
  const issue = getIssue(Number(issueId));

  return Response.json(issue);
}
