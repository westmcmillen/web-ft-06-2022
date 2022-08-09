type Student = {
  readonly name: string;
  chatty: boolean;
  cohort: "Full Time" | "Part Time";
  instructor: "Joe";
  employed: boolean;
  ta: "Violet" | "Rayleigh";
};

const stacy: Student = {
  name: "Stacy",
  chatty: true,
  cohort: "Full Time",
  instructor: "Joe",
  employed: false,
  ta: "Violet",
};
