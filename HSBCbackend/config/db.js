const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://dvdnwllwthqjxehwwxwi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZG53bGx3dGhxanhlaHd3eHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2OTM5OTIsImV4cCI6MjAzNTI2OTk5Mn0.QBnxyrgElAb5QoBtos6Mr2XQWtyDBGv24wkkEnmGLdA",
  {
    db: {
      schema: "public",
    },
    auth: {
      persistSession: true,
    },
  }
);

module.exports = supabase;
