import SearchBar from "../../components/layout/search-bar";

import Heading from "../../components/meta/heading";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Container from "../../components/containers/container";
import GridContainer from "../../components/containers/grid-container";

import FreelanceCard from "../../components/ui/freelance-card";

import { useEffect, useState } from "react";
import firebase from "../../components/backend/firebase";

export default function BrowsePage() {

  const [freelances, setFreelances] = useState([]);

  useEffect(()=>{
    const gigRef = firebase.database().ref('gig');
    gigRef.on('value', (snapshot) => {
      const gig = snapshot.val();
      const gigList = [];
      for (let id in gig) {
        const userRef = firebase.database().ref('users');
        let username = "";
        let avatar = "";
        userRef.on('value', (snapshot) => {
          const user = snapshot.val();
          for(let userId in user){
            if(user[userId].uid == gig[id].user){
              username = user[userId].username;
              avatar = user[userId].profile_picture;
            }
          } 
        });
        gigList.push({
          uid: id,
          cover: gig[id].image,
          title: gig[id].title,
          username: username,
          url: avatar,
          rating: 0,
        });
      }
      setFreelances(gigList);
    });
  },[]);


  return (
    <div>
      <div>
        {/* Meta Data */}
        <Heading title="- browse" />
        {/* Style Data */}
        <Header />
        {/* <FreelanceSearch /> */}
        <SearchBar />

        <Container>
          <GridContainer>
            {freelances.map((item, index) => (
              <FreelanceCard
                key={index}
                cover={item.cover}
                title={item.title}
                username={item.username}
                userstats={item.userstats}
                url={item.url}
                rating={item.rating}
                link={`/browse/${item.uid}`}
              />
            ))}
          </GridContainer>
        </Container>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
