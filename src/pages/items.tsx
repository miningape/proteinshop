import { createClient, PostgrestError } from "@supabase/supabase-js";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Item } from "../components/item";
import { env } from "../env/server.mjs";
import { Database } from "../types/supabase";
import { ItemsTable } from "../types/types";

type ItemsProps = {
  data: ItemsTable | null;
  error: PostgrestError | null;
};

export default function Items({ data, error }: ItemsProps) {
  return (
    <div className="m-5 grid grid-cols-3 gap-4">
      {error != null ? (
        <>Error, {error}</>
      ) : data === null || data.length === 0 ? (
        <>Loading</>
      ) : (
        data.map((item, i) => <Item item={item} key={i} />)
      )}
    </div>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ItemsProps>
> {
  const supabase = createClient<Database>(
    env.SUPABASE_URL,
    env.SUPABASE_ANON_KEY
  );

  const { data, error } = await supabase.from("items").select("*");

  return {
    props: {
      data:
        data?.map<ItemsTable[0]>((item) => ({
          ...item,
          image: supabase.storage.from("images").getPublicUrl(item.image).data
            .publicUrl,
        })) ?? null,
      error,
    },
  };
}
