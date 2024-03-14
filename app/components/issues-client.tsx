"use client";

import { useState } from "react";
import { IssuesList, IssuesListItem } from "./issues-list";
import { NewIssueForm } from "./new-issue-form";
import { EditIssueForm } from "./edit-issue-form";

export function IssuesClient({ issues }) {
  const [selectedIssue, setSelectedIssue] = useState(null);

  return (
    <div>
      <IssuesList>
        {issues.map((issue) => (
          <IssuesListItem
            key={issue.id}
            issue={issue}
            onClick={(issue) => setSelectedIssue(issue)}
            isSelected={issue.id === selectedIssue?.id}
          />
        ))}
      </IssuesList>

      {selectedIssue ? (
        <EditIssueForm key={selectedIssue.id} issue={selectedIssue} />
      ) : (
        <NewIssueForm />
      )}
    </div>
  );
}
