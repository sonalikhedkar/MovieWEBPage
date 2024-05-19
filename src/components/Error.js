import { AbortedDeferredError } from "react-router-dom";

const Error = () => {
  const err = AbortedDeferredError();
  return (
    <>
      <h2>{err}</h2>
      <p>{err.status + " " + err.statusText}</p>
    </>
  );
};

export default Error;
