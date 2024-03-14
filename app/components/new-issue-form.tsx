"use client";

import { revalidatePath } from "next/cache";

export function NewIssueForm() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const description = formData.get("description");
    await fetch("/api/issues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    event.target.reset();
  };

  return (
    <form
      className="flex flex-col gap-2 text-left mt-4 max-w-96"
      onSubmit={onSubmit}
    >
      <h2>New Issue</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          className="rounded-md px-4 py-2 w-full"
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          className="rounded-md px-4 py-2 w-full"
        />
      </label>

      <button
        type="submit"
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Create issue
      </button>
    </form>
  );
}
