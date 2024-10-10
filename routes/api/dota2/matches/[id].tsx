import { PageProps, Handlers } from "$fresh/server.ts";

interface Match {
   match_id: number;
   start_time: number;
   duration: number;
   radiant_team_id: number;
   radiant_score: number;
   dire_team_id: number;
   dire_score: number;
   radiant_win: boolean;
}

export default function MatchId(props: PageProps) {
   return <div>Dota 2 match id is: {props.params.id}</div>;
   // const matchResponse = fetch(`https://api.opendota.com/api/matches/${props.params.id}`);
   // const data = matchResponse.json();
   // console.log(data);
   // return <div>{JSON.stringify(matchResponse)}</div>
}

/*
export const handler = async (_req: Request, _ctx: Handlers.Context, props: PageProps) => {
   const matchResponse = await fetch(`https://api.opendota.com/api/matches/${props.params.id}`);
}
   */