export type TeamBucket = "2017s" | "2018s" | "2019s" | "2020s";

type RoutingInput = {
  birthMonth: number;
  birthYear: number;
  joinCutoffMonth: number;
};

type RoutingResult = {
  primary: TeamBucket | "out_of_range";
  eligible: TeamBucket[];
  message: string;
};

const ordered: TeamBucket[] = ["2017s", "2018s", "2019s", "2020s"];

function toBucket(year: number): TeamBucket | "out_of_range" {
  const candidate = `${year}s` as TeamBucket;
  return ordered.includes(candidate) ? candidate : "out_of_range";
}

export function routeTeamFromDob({ birthMonth, birthYear, joinCutoffMonth }: RoutingInput): RoutingResult {
  const primaryBucket = toBucket(birthYear);

  if (primaryBucket === "out_of_range") {
    return {
      primary: "out_of_range",
      eligible: [],
      message: "Your child is currently outside our listed age groups. Please submit and we will advise."
    };
  }

  const eligible = [primaryBucket];

  if (birthMonth <= joinCutoffMonth) {
    const previousYear = birthYear - 1;
    const previousBucket = toBucket(previousYear);
    if (previousBucket !== "out_of_range") {
      eligible.unshift(previousBucket);
    }
  }

  const message =
    eligible.length > 1
      ? `Eligible for ${eligible.join(" or ")} based on DOB window.`
      : `Assigned team: ${primaryBucket}.`;

  return {
    primary: primaryBucket,
    eligible,
    message
  };
}
