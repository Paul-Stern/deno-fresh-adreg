import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
   return <div>Dota 2 match id is: {props.params.id}</div>; 
}