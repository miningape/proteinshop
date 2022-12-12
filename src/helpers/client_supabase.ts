import { createClient } from "@supabase/supabase-js";
import { env } from "../env/server.mjs";
import type { Database } from "../types/supabase";

export const supabase = createClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
