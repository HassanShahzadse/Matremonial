export const martialOptions = [
    { label: "Never Married", value: "NeverMarried" },
    { label: "Legally Separated", value: "LegallySeparated" },
    { label: "Divorced", value: "Divorced" },
    { label: "Widow", value: "Widowd" },
    { label: "Annulled", value: "Annulled" },
  ];
  export const lookingToMarryOptions = [
    { label: "As soon As Possible", value: "AssoonAsPossible" },
    { label: "This Year", value: "ThisYear" },
    { label: "Next Year", value: "NextYear" },
    { label: "Not Sure", value: "NotSure" },
  ];
  export const livingArrangementsOptions = [
    { label: "Live with Family", value: "LivewithFamily" },
    { label: "Separate", value: "Separate" },
    { label: "Alone", value: "Alone" },
  ];
  
  export const myBuildOptions = [
    { label: "Normal", value: "Normal" },
    { label: "Muscular", value: "Muscular" },
    { label: "Fat", value: "Fat" },
    { label: "Slim", value: "Slim" },
  ];
  
  export const smokeOptions = [
    { label: "No", value: "No" },
    { label: "Yes", value: "Yes" },
    { label: "Special Occassion", value: "SpecialOccassion" },
    { label: "Sometimes", value: "Sometimes" },
  ];
  
  export const partnerReligionOptions = [
    { label: "Doesn't Matter", value: "Doesn'tMatter" },
    { label: "Hindu", value: "Hindu" },
    { label: "Muslim", value: "Muslim" },
    { label: "Christian", value: "Christian" },
  ];
  export const partnerSectOptions = [
    { label: "Doesn't Matter", value: "Doesn'tMatter" },
    { label: "Only Muslim", value: "OnlyMuslim" },
    { label: "Shia", value: "Shia" },
    { label: "Sunni", value: "Cristian" },
  ];
  export const sectOptions = [
    { label: "Only Muslim", value: "OnlyMuslim" },
    { label: "Wahabi", value: "Wahabi" },
    { label: "Sunni", value: "Sunni" },
    { label: "Shia", value: "Shia" },
  ];
  export const hijabOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "Occasionally", value: "Occasionally" },
  ];
  export const beardOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "Trend", value: "trend" },
  ];
  export const halalOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "Sometimes", value: "sometimes" },
  ];
  export const salahOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "Occasionally", value: "Occasionally" },
  ];
  export const zikatOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "Sometimes", value: "sometimes" },
  ];
  export const ramadanOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "A Few", value: "a few" },
  ];
  export const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  export const childrenOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "Maybe", value: "May be" },
  ];

 export const profileInfoFields = [
    {
      type: "radio",
      label: "What I am looking for",
      name: "gender",
      options: genderOptions,
    },
  
    {
      type: "input",
      label: "About",
      name: "bio",
      placeholder: "Write something About Your-self",
    },
    {
      type: "input",
      label: "Education Level",
      name: "education",
      placeholder: "Education level",
    },
    {
      type: "input",
      label: "My job Title",
      name: "job",
      placeholder: "Enter job title",
    },
    {
      type: "input",
      label: "My Profession",
      name: "profession",
      placeholder: "Enter education level",
    },
    {
      type: "input",
      label: "Mother Tongue",
      name: "tongue",
      placeholder: "Enter Your Mother Tongue",
    },
    {
      type: "input",
      label: "Second Language",
      name: "slang",
      placeholder: "Enter your Second Language",
    },
  ];
  export const personalInfoFields = [
    {
      type: "input",
      label: "My Citizenship",
      name: "citizenship",
      placeholder: "Enter Citizenship",
      required: true,
    },
    {
      type: "input",
      label: "My Income",
      name: "income",
      placeholder: "Enter your Income",
      required: true,
    },
    {
      type: "select",
      label: "Martial Status",
      name: "martialStatus",
      options: martialOptions,
      required: true,
    },
    {
      type: "select",
      label: "Looking to Marry",
      name: "martialTime",
      options: lookingToMarryOptions,
      required: true,
    },
    {
      type: "input",
      label: "Willing to Relocate",
      name: "relocate",
      placeholder: "Willing to relocate",
      required: true,
    },
    {
      type: "radio",
      label: "Would I like to have Children?",
      name: "children",
      options: childrenOptions,
      required: true,
    },
  
    {
      type: "input",
      label: "Do I Have Children?",
      name: "haveChildren",
      placeholder: "Do I have children?",
      required: true,
    },
    {
      type: "select",
      label: "Living Arrangements",
      name: "livingArrange",
      options: livingArrangementsOptions,
      required: true,
    },
  ];
  export const bodyTypeFields = [
    {
      label: "My Height",
      name: "height",
      type: "input",
      placeholder: "Enter your height",
    },
    {
      label: "My Build",
      name: "buildCont",
      type: "select",
      placeholder: "Select build",
      options: myBuildOptions,
    },
    {
      label: "Hair color",
      name: "hair",
      type: "input",
      placeholder: "Your hair color",
    },
    {
      label: "Eyes color",
      name: "eyes",
      type: "input",
      placeholder: "Your eyes color",
    },
    {
      label: "Do I Smoke?",
      name: "smokeFreq",
      type: "select",
      placeholder: "Select smoke",
      options: smokeOptions,
    },
    {
      label: "Disabilities?",
      name: "disability",
      type: "input",
      placeholder: "",
    },
  ];
  
  export const religiousInfoFields = [
    {
      type: "input",
      label: "Religiousness",
      name: "religion",
      placeholder: "",
      required: true,
    },
    {
      type: "select",
      label: "My Sect",
      name: "sect",
      options: sectOptions,
      required: true,
    },
    {
      type: "radio",
      label: "Do you wear a Hijab?",
      name: "hijab",
      options: hijabOptions,
    },
    {
      type: "radio",
      label: "Do you prefer a Beard?",
      name: "beard",
      options: beardOptions,
    },
    {
      type: "input",
      label: "Are you a Revert?",
      name: "revert",
      placeholder: "",
      required: true,
    },
    {
      type: "select",
      label: "Do you keep Halal?",
      name: "halal",
      options: halalOptions,
      required: true,
    },
    {
      type: "radio",
      label: "Do you perform Salah?",
      name: "salah",
      options: salahOptions,
    },
    {
      type: "radio",
      label: "Do you pay Zakat?",
      name: "zakat",
      options: zikatOptions,
    },
    {
      type: "radio",
      label: "Do you Fast in the month of Ramadan?",
      name: "ramadan",
      options: ramadanOptions,
    },
  ];