import React from "react";

function SuccessPage() {
  //Data from the api would be typically stored in the redux store
  //hence I would probably use useSelector hook to get it

  const apiData = {
    name: "Ryan Njoroge",
    email: "keddelyronjoz@gmail",
    subscription: "bronze",
    message: "Subscribed successfully",
  };

  return (
    <div className="body">
      {apiData !== "" ? (
        <div className="container">
          <h1>Congratulations!</h1>
          <h4>Hey, {apiData.name}</h4>
          <h5>You have {apiData.message}</h5>
        </div>
      ) : (
        <h2>...Loading</h2>
      )}
    </div>
  );
}

export default SuccessPage;
