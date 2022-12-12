import type { Database } from "../types/supabase";

// Use this file to pick parts of the database entries we want to use
export type ItemsTable = Database["public"]["Tables"]["items"]["Row"][];
