import { useEffect, useState } from "react";
import Container from "./component/container";

function App() {
  const [id, setId] = useState(null); // Start with null to prevent an unnecessary API call
  const defaultAdvice = {
    slip: {
      advice: "If you're squashed close to strangers on public transport, try not to be rude to them. No one likes those situations.",
      id: 63,
    },
  };
  const [data, setData] = useState(defaultAdvice);

  const onclickBtn = () => {
    const num = Math.floor(Math.random() * 100) + 1; // Ensure it generates between 1 and 100
    setId(num);
  };
console.log(id)
  useEffect(() => {
    if (id !== null) { // Only fetch if id is not null
      fetch(`https://api.adviceslip.com/advice`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch advice");
          }
          return response.json();
        })
        .then((fetchedData) => {
          if (fetchedData.slip) {
            setData(fetchedData); // Valid data with a slip object
          } else {
            throw new Error("No advice found for this ID");
          }
        })
        .catch((error) => {
          console.error(error);
          setData({
            slip: {
              advice: "Sorry, no advice found for this ID. Please try again.",
              id: null,
            },
          });
        });
    }
}, [id]);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Container func={onclickBtn} data={data} />
    </div>
  );
}

export default App;
