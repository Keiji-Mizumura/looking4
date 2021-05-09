import SearchBar from "../../components/layout/search-bar";

import Heading from "../../components/meta/heading";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Container from "../../components/containers/container";
import GridContainer from "../../components/containers/grid-container";

import FreelanceCard from "../../components/ui/freelance-card";

export default function BrowsePage() {
  const freelances = [
    {
      cover:
        "https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Web UX Design",
      username: "John Proctor",
      userstats: "This is stats",
      url:
        "https://images.pexels.com/users/avatars/1585619/cleyder-quiroz-832.jpeg?auto=compress&fit=crop&h=256&w=256",
      rating: 3.5,
    },
    {
        cover:
          "https://images.pexels.com/photos/4483109/pexels-photo-4483109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Painting Job on the Go",
        username: "Anna Shvelts",
        userstats: "This is stats",
        url:
          "https://images.pexels.com/users/avatars/1984515/anna-shvets-288.jpeg?auto=compress&fit=crop&h=256&w=256",
        rating: 3.5,
    },
    {
        cover:
          "https://images.pexels.com/photos/4483109/pexels-photo-4483109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Painting Job on the Go",
        username: "Anna Shvelts",
        userstats: "This is stats",
        url:
          "https://images.pexels.com/users/avatars/1984515/anna-shvets-288.jpeg?auto=compress&fit=crop&h=256&w=256",
        rating: 3.5,
    },
    {
        cover:
          "https://images.pexels.com/photos/4483109/pexels-photo-4483109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Painting Job on the Go",
        username: "Anna Shvelts",
        userstats: "This is stats",
        url:
          "https://images.pexels.com/users/avatars/1984515/anna-shvets-288.jpeg?auto=compress&fit=crop&h=256&w=256",
        rating: 3.5,
    },
    {
        cover:
          "https://images.pexels.com/photos/4483109/pexels-photo-4483109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Painting Job on the Go",
        username: "Anna Shvelts",
        userstats: "This is stats",
        url:
          "https://images.pexels.com/users/avatars/1984515/anna-shvets-288.jpeg?auto=compress&fit=crop&h=256&w=256",
        rating: 3.5,
    },
    {
        cover:
          "https://images.pexels.com/photos/4483109/pexels-photo-4483109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Painting Job on the Go",
        username: "Anna Shvelts",
        userstats: "This is stats",
        url:
          "https://images.pexels.com/users/avatars/1984515/anna-shvets-288.jpeg?auto=compress&fit=crop&h=256&w=256",
        rating: 3.5,
    },
    {
        cover:
          "https://images.pexels.com/photos/4483109/pexels-photo-4483109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Painting Job on the Go",
        username: "Anna Shvelts",
        userstats: "This is stats",
        url:
          "https://images.pexels.com/users/avatars/1984515/anna-shvets-288.jpeg?auto=compress&fit=crop&h=256&w=256",
        rating: 3.5,
    },
    {
        cover:
          "https://images.pexels.com/photos/4483109/pexels-photo-4483109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Painting Job on the Go",
        username: "Anna Shvelts",
        userstats: "This is stats",
        url:
          "https://images.pexels.com/users/avatars/1984515/anna-shvets-288.jpeg?auto=compress&fit=crop&h=256&w=256",
        rating: 3.5,
    }
  ];

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
