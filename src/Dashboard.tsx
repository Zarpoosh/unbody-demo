import React, { useEffect, useState } from 'react';
import { Unbody } from "@unbody-io/ts-client";

const Dashboard = () => {
  const [data, setData] = useState<any>(null); // State to hold the fetched data//-
  // const [data, setData] = useState<Unbody.GoogleDoc.Search.AboutResponsePayload | null>(null); // State to hold the fetched data//+
  const unbody = new Unbody({
    apiKey: "pk_43b0ad51440a0188dec136d91bcb38ab498fc7f53baec615c6365691b29d7238",
    projectId: "286f50a7-a8bb-4bfc-9b45-cad66b5e86db",
  });

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await unbody.get
          .googleDoc
          .search
          .about("languages")
          .select("title", "autoSummary")
          .exec();

        setData(response.data.payload); // Update state with fetched data
        console.log(response.data.payload);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>Dashboard</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.autoSummary}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
