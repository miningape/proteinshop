import type { ItemsTable } from "../types/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import type { Database } from "../types/supabase";
import { useEffect, useState } from "react";
import type { PostgrestError } from "@supabase/supabase-js";
import Image from "next/image";

const ButtonComponent = (props: { children: JSX.Element | string }) => {
  return (
    <button className="float-right mx-2 rounded-full px-2">
      {props.children}
    </button>
  );
};

export function Item(props: { item: ItemsTable[0] }) {
  const { image, name, price } = props.item;

  // const supabase = useSupabaseClient<Database>();
  // const {
  //   data: { publicUrl },
  // } = supabase.storage.from("images").getPublicUrl(image);

  return (
    <div>
      <div className="rounded-lg">
        <Image
          src={image}
          alt={name}
          className="max-h-1/2  mx-auto w-max overflow-hidden rounded-lg"
        />
      </div>

      <h1 className="mx-auto pt-4 text-lg text-black">{name}</h1>

      {/* <CardFooter divider> */}
      <div className="float-left mt-2 align-middle text-lg">{price} DKK</div>
      <ButtonComponent>Purchase Now</ButtonComponent>
      <ButtonComponent>Add to Cart</ButtonComponent>
      {/* </CardFooter> */}
    </div>
  );
}
