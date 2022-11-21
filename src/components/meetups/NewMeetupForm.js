import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  //event handler for form submission
  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDesc = descRef.current.value;

    //object of collected values
    const NewMeetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      desc: enteredDesc,
    };

    props.onAddNewMeetup(NewMeetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="desc">Meetup Description</label>
          <textarea required rows="5" id="desc" ref={descRef}></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
