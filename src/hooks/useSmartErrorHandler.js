import NoInternetError from "@/components/errors/NoInternetError";
import ServerError from "@/components/errors/ServerError";


const useSmartErrorHandler = (error, refetch) => {
  if (!error) return null;

  // Handle no internet / network failure
  if (error.networkError && !navigator.onLine) {
    return <NoInternetError onRetry={refetch} />;
  }

  // GraphQL or server errors
  if (error.graphQLErrors && error.graphQLErrors.length > 0) {
    return <ServerError message={error.message} onRetry={refetch} />;
  }

  // Fallback error
  return <ServerError message="Something went wrong." onRetry={refetch} />;
};

export default useSmartErrorHandler;