import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { getUserAxios } from "../../services/userService";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { RandomUserResponse } from "../../models/randomUserResponse";

const UserPage = () => {
  const classes = useStyles();
  const [users, setUsers] = useState<RandomUserResponse>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUserAxios();
    console.log(JSON.stringify(data, null, 2));
    setUsers(data);
  };

  return (
    <Container>
      <div>
        {users?.results?.map((user) => (
          <CardContent key={user.email}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <img src={user.picture.large} />
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              name: {user.name.title} {user.name.first} {user.name.last}
            </Typography>
            <Typography variant="body2" component="p">
              age: {user.dob.age}
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
