import React, { useEffect, useState } from "react";
import { Unbody } from "@unbody-io/ts-client";

const Dashboard = () => {
  const [data, setData] = useState<any>(null); // State to hold fetched data
  const unbody = new Unbody({
    apiKey: "pk_43b0ad51440a0188dec136d91bcb38ab498fc7f53baec615c6365691b29d7238",
    projectId: "286f50a7-a8bb-4bfc-9b45-cad66b5e86db",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await unbody.get
          .googleDoc
          .search
          .about("a galexy")
          .select("title", "summary")
          .exec();

        console.log("Full Response:", response);
        console.log("Data Field:", response.data);

        // Adjust based on the actual structure of `response.data`
        const payload = response.data?.payload || response.data;
        setData(payload);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data ? (
        <div>
          {Array.isArray(data) ? (
            data.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
              </div>
            ))
          ) : (
            <div>
              <h2>{data.title}</h2>
              <p>{data.summary}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;




//username: a321f78c-1f69-4b2f-99ec-e9c371c4e298

//pass: ak_26162ff64d296c635601b5b0793b450a7ed3b858b54b799666218a0a188f1842

// api-key: pk_43b0ad51440a0188dec136d91bcb38ab498fc7f53baec615c6365691b29d7238

// projectid: 286f50a7-a8bb-4bfc-9b45-cad66b5e86db


5859831153156731