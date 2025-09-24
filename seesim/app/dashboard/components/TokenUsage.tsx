"use client";
export default function TokenUsage() {
  return (
    <div className="rounded-md bg-white p-3 shadow-sm">
      <div className="mb-2 text-xs uppercase text-gray-500">Token usage</div>
      <div className="h-2 w-full rounded bg-gray-100">
        <div className="h-2 w-1/3 rounded bg-gray-300" />
      </div>
      <div className="mt-1 text-xs text-gray-500">Static preview</div>
    </div>
  );
}
