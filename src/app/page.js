import { createClient } from "next-sanity";

async function getData() {
  const client = createClient({
    projectId: "uga6z9h3",
    dataset: "production",
    // apiVersion: "2023-09-17",
    useCdn: true,
  });
  const pets = await client.fetch(`*[_type == "pet"]`);

  return pets;
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <h1>Heading</h1>
      {data.map((e,index)=>{
        return(<h2 key={index}>{e.name}</h2>)
      })}
    </main>
  );
}
