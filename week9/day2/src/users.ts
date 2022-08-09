type Student = {
  readonly name: string;
  chatty: boolean;
  cohort: "Full Time" | "Part Time";
  instructor: "Joe";
  employed: boolean;
  ta: "Violet" | "Rayleigh";
};

type ProStudent = Student & {
  typingSpeed: 9000;
  jobOffers: "Google" | "Meta" | "Microsoft" | "Apple";
  algoProficiency: "master";
};

const stacy: Student = {
  name: "Stacy",
  chatty: true,
  cohort: "Full Time",
  instructor: "Joe",
  employed: false,
  ta: "Violet",
};

const Amanda: ProStudent = {
  name: "Amanda",
  chatty: true,
  cohort: "Full Time",
  instructor: "Joe",
  employed: false,
  ta: "Violet",
  typingSpeed: 9000,
  jobOffers: "Google",
  algoProficiency: "master",
};
