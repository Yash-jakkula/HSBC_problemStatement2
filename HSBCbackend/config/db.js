// const { createClient } = require("@supabase/supabase-js");

// const supabase = createClient(
//   "https://dvdnwllwthqjxehwwxwi.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZG53bGx3dGhxanhlaHd3eHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2OTM5OTIsImV4cCI6MjAzNTI2OTk5Mn0.QBnxyrgElAb5QoBtos6Mr2XQWtyDBGv24wkkEnmGLdA",
//   {
//     db: {
//       schema: "public",
//     },
//     auth: {
//       persistSession: true,
//     },
//   }
// );

// module.exports = supabase;

const mongoose = require("mongoose");

const db = async () => {
  try {
    const data = await mongoose.connect(
      "mongodb+srv://21eg105h21:yash7640@cluster0.iz8qnim.mongodb.net/HSBC?retryWrites=true&w=majority&appName=Cluster0"
    );
    return data;
  } catch (err) {
    throw new err();
  }
};

module.exports = db;
