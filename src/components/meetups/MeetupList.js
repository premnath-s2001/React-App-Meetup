import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetupData.map((data) => {
        return (
          <>
            {" "}
            <MeetupItem
              id={data.id}
              title={data.title}
              image={data.image}
              address={data.address}
              desc={data.description}
            />
          </>
        );
      })}
    </ul>
  );
}

export default MeetupList;
