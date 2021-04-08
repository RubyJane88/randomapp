import { CardContent, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getUserAxios } from "../../services/userService";
import { RandomUserResponse } from "../../models/randomUserResponse";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "../components/mediacard";

const RandomUserPage = () => {
  const classes = useStyles();
  const [randomUser, setRandomUser] = useState<RandomUserResponse>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUserAxios();
    console.log(JSON.stringify(data, null, 2));
    setRandomUser(data);
  };

  return (
    <Container>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300px 300px 300px 300px",
          width: "100%",
        }}
      >
        {randomUser?.results?.map((result) => {
          return (
            <MediaCard
              title={`${result.name.title} ${result.name.first} ${result.name.last}`}
              imageUrl={result.picture.large}
              key={result.picture.large}
              age={result.dob.age}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default RandomUserPage;

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
  color: {
    color: "purple",
  },
  pos: {
    marginBottom: 12,
  },
});
