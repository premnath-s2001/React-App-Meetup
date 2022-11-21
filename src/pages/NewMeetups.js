// to navigate once the post request is made we navigate
//usehistory chagd to usenavigate
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const navigate = useNavigate();

  function AddNewMeetupHandler(NewMeetupData) {
    // sending the post req to store
    //default fetch send a get req ...
    //to send post fetch('url',{obj to configure})

    //fetch returns a promise and then happens after the promise resolves

    fetch("https://react-app-events-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(NewMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <div>
      <h1>New Meetups Page</h1>
      <NewMeetupForm onAddNewMeetup={AddNewMeetupHandler} />
    </div>
  );
}

export default NewMeetupsPage;

//
