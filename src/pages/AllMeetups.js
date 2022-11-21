import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetupsPage() {
  // since the response takes time it wont wia tuntil it fetchs so it may execute further

  //to avoid rendering before fetch we use state to check if loaded and proceed

  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  //since we use usestate it renders eveytime when the state changes to avoid this we use useeffecrt which runs only on certai cicumstances

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-app-events-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <setion>
        <p>Loading......</p>
      </setion>
    );
  }
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetupData={loadedData} />
    </section>
  );
}

export default AllMeetupsPage;

//map returns a new aarray
