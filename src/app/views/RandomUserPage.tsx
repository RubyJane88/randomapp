import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getUserAxios } from "../../services/userService";
import { RandomUserResponse } from "../../models/randomUserResponse";

const RandomUserPage = () => {
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
      <div>
        {randomUser?.results?.map((r) => {
          <div key={r.id.value}>
            <h2>{r.email}</h2>
            <img src={r.picture.medium} alt="" />
          </div>;
        })}
      </div>
    </Container>
  );
};

export default RandomUserPage;
