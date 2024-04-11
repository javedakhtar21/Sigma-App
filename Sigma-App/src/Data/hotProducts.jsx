const data = [
    {
      itemNo: 1,
      title: "Bag brown",
      price: "100RS",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 2,
      title: "Bag red",
      price: "140RS",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 3,
      title: "Bag green",
      price: "240RS",
      image:
        "https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 4,
      title: "Bag black",
      price: "440RS",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 5,
      title: "Bag gucci black",
      price: "1140RS",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      itemNo: 6,
      title: "Hamilton men watch",
      price: "100RS",
      image:
        "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 7,
      title: "Omega men watch",
      price: "140RS",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 8,
      title: "Rolex men watch",
      price: "240RS",
      image:
        "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 9,
      title: "Pink men watches",
      price: "440RS",
      image:
        "https://images.unsplash.com/photo-1528968620-57e0257ff360?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 10,
      title: "Timex men watches",
      price: "1140RS",
      image:
        "https://images.unsplash.com/photo-1618151444381-4ee6c3b2205a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      itemNo: 11,
      title: "Nike red men shoe",
      price: "1200RS",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 12,
      title: "Multicolor men shoe",
      price: "140RS",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 13,
      title: "Black men shoe",
      price: "240RS",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 14,
      title: "White women heels",
      price: "440RS",
      image:
        "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 15,
      title: "Multi color heels",
      price: "1140RS",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      itemNo: 16,
      title: "White men tshirt",
      price: "100RS",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 17,
      title: "Black men tshirt",
      price: "140RS",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 18,
      title: "Cream men tshirt",
      price: "240RS",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 19,
      title: "Red women tshirt",
      price: "440RS",
      image:
        "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 20,
      title: "Yellow women tshirt",
      price: "1140RS",
      image:
        "https://plus.unsplash.com/premium_photo-1693161217618-e61490cb41b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      itemNo: 21,
      title: "Lightblue men sunglass",
      price: "100RS",
      image:
        "https://images.unsplash.com/photo-1625591340248-6d289000f96a?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 22,
      title: "Rayban black men sunglass",
      price: "140RS",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 23,
      title: "Golden female sunglass",
      price: "240RS",
      image:
        "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 24,
      title: "Black women sunglass",
      price: "440RS",
      image:
        "https://images.unsplash.com/photo-1502595627658-8b093c96fd25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 25,
      title: "Blue women sunglass",
      price: "1140RS",
      image:
        "https://images.unsplash.com/photo-1533095666533-751bf9512c08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      itemNo: 26,
      title: "White cap",
      price: "100RS",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 27,
      title: "Dark orange cap",
      price: "140RS",
      image:
        "https://images.unsplash.com/photo-1560774358-d727658f457c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 28,
      title: "Green cap for women",
      price: "240RS",
      image:
        "https://images.unsplash.com/photo-1541598609756-e7dfa98d129f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 29,
      title: "Blue cap",
      price: "440RS",
      image:
        "https://images.unsplash.com/photo-1620231109648-302d034cb29b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      itemNo: 30,
      title: "Pink cap for women",
      price: "1140RS",
      image:
        "https://images.unsplash.com/photo-1583323995751-26b4fe2abc20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


  export default data;