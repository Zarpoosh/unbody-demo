// // import { useState } from 'react'
// import "./App.css";
// // Manage resources and orchestration
// import {
//   AutoEntities,
//   AutoSummary,
//   AutoVision,
//   Generative,
//   ImageVectorizer,
//   PdfParser,
//   ProjectSettings,
//   Reranker,
//   TextVectorizer,
//   UnbodyAdmin,
// } from "unbody/admin";
// // Import custom data
// // import { UnbodyPushAPI } from "unbody/push";

// function App() {
//   const projectSettings = new ProjectSettings();
//   projectSettings
//     // Vectorizers
//     .set(new TextVectorizer(TextVectorizer.OpenAI.TextEmbedding35Small))
//     .set(new ImageVectorizer(ImageVectorizer.Unbody.ImgVec))

//     // Generative modules
//     .set(new Generative(Generative.Cohere.CommandPlus))

//     // Utilities
//     .set(new Reranker(Reranker.Cohere.EnglishV3))

//     // Enhancers - text
//     .set(new AutoSummary(AutoSummary.OpenAI.GPT4o))
//     .set(new AutoEntities(AutoEntities.Unbody.Bert))

//     // Enhancers - visuals
//     .set(new AutoVision(AutoVision.OpenAI.GPT4v))

//     // Parsers & chunkers
//     .set(new PdfParser(PdfParser.Pdf2Image.Default));


//   const admin = new UnbodyAdmin({
//   auth: {
//     username: "286f50a7-a8bb-4bfc-9b45-cad66b5e86db",
//     password:
//       "pk_43b0ad51440a0188dec136d91bcb38ab498fc7f53baec615c6365691b29d7238",
//   },
//   baseURL: "https://api.unbody.io/admin",
// });

//   const project = admin.projects.ref({
//     id: "",
//     name: "search-project",
//     settings: projectSettings,
//   });

//   project.save();

//   console.log(project);


//   return (
//     <>
//       <div></div>
//     </>
//   );
// }

// export default App;



import {
  AutoEntities,
  AutoSummary,
  AutoVision,
  Generative,
  ImageVectorizer,
  PdfParser,
  ProjectSettings,
  Reranker,
  TextVectorizer,
  UnbodyAdmin,
} from "unbody/admin";

// import dotenv from "dotenv";
// import express, { Express, Request, Response } from "express";

// dotenv.config();

// const app: Express = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

function App (){

  const admin = new UnbodyAdmin({
    auth: {
      username: "286f50a7-a8bb-4bfc-9b45-cad66b5e86db",
      password:
        "pk_43b0ad51440a0188dec136d91bcb38ab498fc7f53baec615c6365691b29d7238",
    },
    baseURL: "https://api.unbody.io/admin",
  });
  
  // app.get("/", (req: Request, res: Response) => {
    const projectSettings = new ProjectSettings();
    projectSettings
      // Vectorizers
      .set(new TextVectorizer(TextVectorizer.OpenAI.TextEmbedding3Small))
      .set(new ImageVectorizer(ImageVectorizer.Img2VecNeural.Default))
  
      // Generative modules
      .set(new Generative(Generative.Cohere.CommandRPlus))
  
      // Utilities
      .set(new Reranker(Reranker.Cohere.EnglishV3))
  
      // Enhancers - text
      .set(new AutoSummary(AutoSummary.OpenAI.GPT4o))
      .set(new AutoEntities(AutoEntities.OpenAI.GPT4o))
  
      // Enhancers - visuals
      .set(new AutoVision(AutoVision.OpenAI.GPT4o))
  
      // Parsers & chunkers
      .set(new PdfParser(PdfParser.Pdf2Image.Default));
  
    console.log("admin", admin);
  
    const project = admin.projects.ref({
      id: "",
      name: "Test-Project",
      settings: projectSettings,
    });
  
    project.save();
  
  //   console.log("Project ", project);
  //   res.send("Hello, World!");
  // });
  
  // app.listen(port, () => {
  //   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  // });
    
}

export default App;