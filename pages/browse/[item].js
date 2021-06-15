import { useRouter } from "next/router";
import { useEffect } from "react";

import firebase from "firebase";

import { useState } from "react";

import Heading from "../../components/meta/heading";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import Container from "../../components/containers/container";
import Button from "../../components/ui/button";

export default function ItemPage() {
  const router = useRouter();
  const { item } = router.query;

  const [gigItem, setGigItem] = useState({});

  function bookHandler(e){
    e.preventDefault();
    alert("Item added to cart");
  }

  useEffect(() => {
    const gigRef = firebase.database().ref("gig");
    gigRef.on("value", (snapshot) => {
      const gig = snapshot.val();

        setGigItem({
            title: gig[item].title,
            image: gig[item].image,
            
        });
        
      
    });
  }, []);

  return (
    <div>
      {/* Meta Data */}
      <Heading title="- browse" />
      {/* Style Data */}
      <Header />

      <br /><br />

      <Container>
          <br /> <br />
          <h1>{gigItem.title}</h1>
          <img src={gigItem.image} style={{width: "100%"}}/>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem aut repellat, minus ratione optio corporis quis magni dolore velit!</p>
          <br />
          <form onSubmit={bookHandler}>
              <Button>Book Item</Button>
          </form>
      </Container>

      <Footer />
    </div>
  );
}
