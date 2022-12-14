import { useEffect, useState } from "react";
import { Container, Box, Card, Title } from "./OurFriendsPage.styled";
import FriendCard from "../../components/OurFriendsCard/FriendCard";
import getFriends from "./getFriends";
import Loader from "components/Loader";

function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const ourFriendsPage = async () => {
      try {
        const friends = await getFriends();
        setFriends(friends.data.result);
      } catch (error) {
        console.log(error.message);
      }
    };
    ourFriendsPage();
  }, []);

  return (
    <Container>
      <Title>Our friend</Title>
      {friends.length > 0 ? (
        <Box>
          {friends.map(friend => (
            <Card key={friend._id}>
              <FriendCard friend={friend} />
            </Card>
          ))}
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
}

export default Friends;
