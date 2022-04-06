import "./styles.css";
// import { useQuery, gql } from "@apollo/client";

// const GET_ALL_LINKS = gql`
//   query GetAllLinks {
//     allLinks {
//       id
//       url
//       slug
//     }
//   }
// `;

const data = {
  allLinks: [
    {
      id: 1,
      url: "test url 1",
      slug: "test slug 1"
    },
    {
      id: 2,
      url: "test url 2",
      slug: "test slug 2"
    }
  ]
};

export default function App() {
  // const { loading, error, data } = useQuery(GET_ALL_LINKS);

  console.log({ data });

  // if (loading) return <p>loading...</p>;
  // if (error) return <p>error</p>;

  return (
    <div className="App">
      {data.allLinks.map((link) => {
        return <div key={link.id}>{link.url}</div>;
      })}
    </div>
  );
}
