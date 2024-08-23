const data = [
  {
    id: 1,
    name: "Quillbot premium",
    price: {
      month: 250,
      half: 800,
      year: 1300,
    },
    img: "https://yt3.googleusercontent.com/ytc/AIdro_kFn9M3svUrgBmIiEapsDWKY2nFND-BCnQqeclOXoEx7g=s900-c-k-c0x00ffffff-no-rj",
    priceRange: "Rs. 250 - Rs. 1,300",

    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 2,
    name: "Grammalry  premium",
    img: "data:image/png;base64,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",
    price: {
      month: 250,
      half: 800,
      year: 1300,
    },
    priceRange: "Rs. 250 - Rs. 1,300",

    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 3,
    name: "turnitin premium",
    img: "assets/t.jpg",
    price: {
      month: 250,
      half: 800,
      year: 1300,
    },
    priceRange: "Rs. 250 - Rs. 1,300",
    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 4,
    name: "Chegg  premium",
    img: "https://downloadr2.apkmirror.com/wp-content/uploads/2022/01/36/61f42afe3cda6.png",
    price: {
      month: 200,
      half: 750,
      year: 1200,
    },
    priceRange: "Rs. 200 - Rs. 1,200",
    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 5,
    name: "Stealthwriter Standard premium",
    img: "https://media.licdn.com/dms/image/D4E0BAQHhMOypRn-sGQ/company-logo_200_200/0/1696636020180?e=2147483647&v=beta&t=rDC-Y5gmsthHG3RRXtjtqkrHPcquAzcfjjKzpeTy_V8",
    price: {
      month: 900,
      half: 3500,
      year: 6000,
    },
    priceRange: "Rs.500 - Rs. 4,500",
    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 6,
    name: "Hix .ai  premium",
    img: "data:image/png;base64,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",
    price: {
      month: 600,
      half: 2500,
      year: 4500,
    },
    priceRange: "Rs. 600 - Rs. 4,500",
    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 7,
    name: "Canva pro premium",
    img: "https://w7.pngwing.com/pngs/714/984/png-transparent-canva-design-soft-design-tool-design-tool-logo-design-logo-tool-3d-icon.png",
    price: {
      month: 100,
      half: 300,
      year: 500,
    },
    priceRange: "Rs. 100 - Rs. 500",
    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 8,
    name: "Chat-gpt pro  premium",
    img: "assets/gpt.png",
    price: {
      month: 800,
      half: 3300,
      year: 5000,
    },
    priceRange: "Rs. 500 - Rs. 3,500",
    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 9,
    name: "Coursera   premium",
    img: "data:image/png;base64,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",
    price: {
      month: 2500,
      half: 2500,
      year: 2500,
    },
    priceRange: "Rs. 2,500",
    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 10,
    name: "Windows 11 premium",
    img: "assets/w11.png",
    price: {
      month: 2000,
      half: 2000,
      year: 2000,
    },
    priceRange: "Rs. 2,000",
    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 11,
    name: "Jenni.Ai premium",
    price: {
      month: 500,
      half: 2000,
      year: 3500,
    },
    img: "assets/jennai.png",
    priceRange: "Rs. 500 - Rs. 3500",

    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 12,
    name: "Turnitin Instructor premium",
    price: {
      month: 600,
      half: 2300,
      year: 4000,
    },
    img: "assets/tti.png",
    priceRange: "Rs. 500 - Rs. 4000",

    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
  {
    id: 13,
    name: "Aithor",
    price: {
      month: 1100,
      half: 4000,
      year: 6500,
    },
    img: "assets/Aithor.png",
    priceRange: "Rs. 1100 - Rs. 6500",
    description: ["devices", "Ai", "style", "snippets", "instant access"],
  },
];

export default data;
