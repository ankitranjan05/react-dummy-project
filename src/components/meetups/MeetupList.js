import Meetupitem from "./Meetupitem";

function MeetupList(props) {
  return (
    <ul>
      {props.meetup.map((meetups) => {
        return (
          <Meetupitem
            key={meetups.id}
            id={meetups.id}
            image={meetups.image}
            title={meetups.title}
            address={meetups.address}
            description={meetups.description}
          />
        );
      })}
    </ul>
  );
}
export default MeetupList;
