import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

import { useRouter } from 'next/router'


function MeetupItem(props) {

  const router = useRouter()

  //Below, in our JSX, our <button> for Show Details, could be made into a Link. That would likely be a better solution. 
  //However, we will keep it as a button to show an alternative way to route to Show Details
  const showDetailsHandler = () => {
    router.push(`/${props.id}`) // programmatically routing our user to another page.
  }


  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
