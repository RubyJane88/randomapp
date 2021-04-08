import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { getUserAxios } from "../../services/userService";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { RandomUserResponse } from "../../models/randomUserResponse";

//main component
const UserPage = () => {
  //1. create the local state
  const classes = useStyles();
  const [user, setUser] = useState<RandomUserResponse>();

  //3. call the
  useEffect(() => {
    fetchUsers();
  }, []);

  //2. send http requests using axios
  // put the function in aysnc -await
  const fetchUsers = async () => {
    const { data } = await getUserAxios();
    console.log(JSON.stringify(data, null, 2));
    setUser(data);
  };

  return (
    <Container>
      <div>
        {user?.results?.map((result) => (
          <CardContent key={result.email}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <img src={result.picture.large} />
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              name: {result.name.title} {result.name.first} {result.name.last}
            </Typography>
            <Typography variant="body2" component="p">
              age: {result.dob.age}
            </Typography>
          </CardContent>
        ))}
      </div>
    </Container>
  );
};

export default UserPage;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
