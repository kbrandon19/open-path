import express from "express";
import { connectToDatabase } from "../../services/database.service";
import { router } from "../../api/faqs/route";

connectToDatabase()
  .then(() => {
    app.use("/faqs", router);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Failed to connect to database", error);
    process.exit();
  });
