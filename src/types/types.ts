import { Database } from "../types/supabase";

export type ItemsTable = Database["public"]["Tables"]["items"]["Row"][];
