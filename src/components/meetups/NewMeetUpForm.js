import Card from "../ui/Card";
import classes from "./NewMeetUpForm.module.css";
import { useRef } from "react";

function NewMeetUpForm(props) {
  const titleRef = useRef();
  const addressRef = useRef();
  const imageRef = useRef();
  const discriptionRef = useRef();
  function onsumitHandler(event) {
    event.preventDefault(); /* React by default pass an "event" named argument to the function that is being called. this "event" argument is for all events like onSumit, onClick etc */
    /* preventDefault is a predefined method to stop the default submit request that is being sent to the server */
    const entertitle = titleRef.current.value;
    const enteraddress = addressRef.current.value;
    const enterimage = imageRef.current.value;
    const enterdiscription = discriptionRef.current.value;

    const meetupData = {
      title: entertitle,
      image: enterimage,
      address: enteraddress,
      discription: enterdiscription,
    };
    props.collectedData(meetupData); 
    /* here we have added "props" argument to send the data to NewMeetupPage where we are going to send this data to the server*/
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={onsumitHandler}>
        {/* We have a form with a submit button then a submit event will be triggured automatically on sumitting the form and we can we capture that event with onSumit. then advice it to do what we want it to and not the default word(sending the response the the server.). */}
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          {/* in html we use for but here for is a predefined element. So we have to use htmlFor*/}
          <input type="text" required id="title" ref={titleRef}></input>{" "}
          {/* "ref" is helping in storing the text fetched from this line to the "titleRef" defined above */}
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="discription">Meetup discription</label>
          <textarea
            required
            id="discription"
            rows="5"
            ref={discriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
          {/* this button will submit the form. If we have a <button type=button> then that doesn't submit the form. Only the simple button(<button>) will submit the form*/}
        </div>
      </form>
    </Card>
  );
}
export default NewMeetUpForm;
