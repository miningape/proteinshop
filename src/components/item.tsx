import { ItemsTable } from "../types/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "../types/supabase";
import { useEffect, useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";

export function Items(props: {}) {
  const supabase = useSupabaseClient<Database>();

  const [items, setItems] = useState<ItemsTable | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("items").select("*");

      setError(error);

      if (data) {
        setItems(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-5 grid grid-cols-3 gap-4">
      {error != null ? (
        <>Error, {error}</>
      ) : items === null || items.length === 0 ? (
        <>Loading</>
      ) : (
        items.map((item, i) => <Item item={item} key={i} />)
      )}
    </div>
  );
}

const ButtonComponent = (props: { children: JSX.Element | string }) => {
  return (
    <button className="float-right mx-2 rounded-full px-2">
      {props.children}
    </button>
  );
};

export function Item(props: { item: ItemsTable[0] }) {
  const { image, name, price } = props.item;

  const supabase = useSupabaseClient<Database>();
  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl(image);

  return (
    <>
      <div className="rounded-lg">
        <img
          src={publicUrl}
          alt={name}
          className=" max-h-1/2  mx-auto w-max overflow-hidden rounded-lg"
        />
      </div>

      <h1 className="mx-auto pt-4 text-lg text-black">{name}</h1>

      {/* <CardFooter divider> */}
      <div className="float-left mt-2 align-middle text-lg">{price} DKK</div>
      <ButtonComponent>Purchase Now</ButtonComponent>
      <ButtonComponent>Add to Cart</ButtonComponent>
      {/* </CardFooter> */}
    </>
  );
}
