import { ErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export function ErrorCatchComponent({ children }: React.PropsWithChildren) {
  const user = useSelector((state: RootState) => state.app.user);

  const logError = (error: Error, info: { componentStack: string }): any => {
    // Do something with the error, e.g. log to an external API
   
    const bodyData = {
      level: 'error',
      datetime: new Date().toUTCString(),
      platform: navigator.userAgentData.platform,
      location: window.location.href,
      componentStack: JSON.stringify(info.componentStack),
      message: JSON.stringify(error.message),
      ...user,
    }
    // call api
    console.log("Error caught by ErrorBoundary:", {
      bodyData
    });
  };

  function ErrorFallbackUI() {
    return (
      <div className="">
        <h1 className="my-2 text-gray-800 font-bold text-2xl">
            Looks like you've found the
            doorway to the great nothing
        </h1>
        <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
        <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
      </div>
    )
  }

  return (
    <ErrorBoundary
      fallbackRender={ErrorFallbackUI}
      onError={logError}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  )
}