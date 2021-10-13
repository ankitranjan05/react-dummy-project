import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetupPage() {
  function collectedDataHandler(meetupData) {
    fetch(
      "https://dummy-data-collection-centre-default-rtdb.firebaseio.com/meetups.json",
      {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
              'Content-Type': 'application/json'
          }
      }
    );
  }
  return (
    <div>
      <h2>New meetup page </h2>
      <NewMeetUpForm collectedData={collectedDataHandler} />
    </div>
  );
}
export default NewMeetupPage;
