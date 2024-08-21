import { createClient } from "@supabase/supabase-js";
import config from "../../config";

const supabase = createClient(
  "https://dvdnwllwthqjxehwwxwi.supabase.co",
  `${config.super_base_public_key}`,
  {
    db: {
      schema: "public",
    },
    auth: {
      persistSession: true,
    },
  }
);

export default supabase;
