import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  if (!isRouteErrorResponse) {
    return null;
  }
  return (
    <div className="flex  flex-col items-center uppercase gap-3 p-32 justify-center">
      <h2 className="text-primary text-4xl">Oops!</h2>
      <p>Page Not found!</p>
      <p>
        <i>{`${error.message || "MAYBE NEXT TIME!🥺"}`}</i>
      </p>
    </div>
  );
}
