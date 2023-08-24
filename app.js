// const heading = document.createElement("h1");
// heading.innerHTML = "Hello everyone....";

// const root = document.getElementById("root");

// root.appendChild(heading);

// REACT

// const heading = React.createElement("h1", {
//     id : "title",
//     className : "header",
//     style : {
//         color: "red",
//         background: "green"
//     }
// }, "Hello Everyone...");
// console.log(heading)
// const root1 = ReactDOM.createRoot(document.getElementById("root"));

// root1.render(heading);


// const heading1 = React.createElement("h1", {
//     id : "title",
//     style : {
//         color: "red"
//     }
// }, "RED");

// const heading2 = React.createElement("h2", {
//     id : "title",
//     style : {
//         color: "blue"
//     }
// }, "BLUE");

// const container = React.createElement("div", {
//     id: "container",
//     style: {
//         background: "cyan"
//     }
// }, 
// [heading1, heading2]
// )

// const root2 = ReactDOM.createRoot(document.getElementById("root"));

// root2.render(container);



// importing react

// import React from "react";
// import ReactDOM  from "react-dom/client";

// React Element

// const heading = React.createElement("h1", {
//     id : "title"
// }, "Hello Everyone...");

// JSX

// const heading = (
//     <h1 key = "h1">
//         Hello Everyone....
//     </h1>
// );

// React Component

// const Title = () => (
//     <h1>React</h1>
// );

// var x = 10;

// const HeaderComponent = () => {
//     return (
//         <div>
//             {/* {heading} */}
//             {/* <Title /> */}
//             {Title ()}
//             {x} 
//             <h2>Get Started..</h2>
//             <p>React is a free and open-source front-end JavaScript library for 
//             building user interfaces based on components. </p>
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent />);


// SWIGGY APP

import React from "react";
import ReactDOM  from "react-dom/client";       


const Title = () => (
    <a href="/">
        <h1 className="logo">
            FineDine
        </h1>
    </a>
);

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restaurantList = [
    {
        type: "restaurants",
        cards: [
          {
            "info": {
              "id": "116963",
              "name": "Monginis Cake Shop",
              "cloudinaryImageId": "hyzmji0gto0g7hag9y3z",
              "locality": "Kurla",
              "areaName": "Saki Naka",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Bakery",
                "Desserts",
                "Snacks"
              ],
              "avgRating": 4.4,
              "feeDetails": {
                "restaurantId": "116963",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 6100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 6100
              },
              "parentId": "8190",
              "avgRatingString": "4.4",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-24 20:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/monginis-cake-shop-kurla-saki-naka-mumbai-116963",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "24511",
              "name": "Domino's Pizza",
              "cloudinaryImageId": "qcpyngo3cdfc6cocagbh",
              "locality": "R-City, Ghatkopar(West)",
              "areaName": "Ghatkopar East",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
              ],
              "avgRating": 4,
              "feeDetails": {
                "restaurantId": "24511",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3500
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3500
              },
              "parentId": "2456",
              "avgRatingString": "4.0",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-24 22:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/dominos-pizza-r-city-ghatkopar-west-ghatkopar-east-mumbai-24511",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "19972",
              "name": "Burger King",
              "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "locality": "Rcity",
              "areaName": "Ghatkopar West",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4,
              "feeDetails": {
                "restaurantId": "19972",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4600
              },
              "parentId": "166",
              "avgRatingString": "4.0",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "37 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 02:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹129"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/burger-king-rcity-ghatkopar-west-mumbai-19972",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "345430",
              "name": "KFC",
              "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
              "locality": "City Mall",
              "areaName": "Ghatkopar West",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
              ],
              "avgRating": 3.6,
              "feeDetails": {
                "restaurantId": "345430",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 5100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 5100
              },
              "parentId": "547",
              "avgRatingString": "3.6",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "46 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-24 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/kfc-city-mall-ghatkopar-west-mumbai-345430",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "23758",
              "name": "McDonald's",
              "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
              "locality": "M G Road",
              "areaName": "Kurla",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.2,
              "feeDetails": {
                "restaurantId": "23758",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3500
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3500
              },
              "parentId": "630",
              "avgRatingString": "4.2",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "18 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 02:45:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/mcdonalds-m-g-road-kurla-mumbai-23758",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "11956",
              "name": "Sweet Bengal",
              "cloudinaryImageId": "yipdlez8lqixaagvyzlp",
              "locality": "Chembur",
              "areaName": "Chembur",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Sweets",
                "Indian",
                "Snacks",
                "Desserts"
              ],
              "avgRating": 4.6,
              "feeDetails": {
                "restaurantId": "11956",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 5100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 5100
              },
              "parentId": "1250",
              "avgRatingString": "4.6",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-24 21:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "D",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/sweet-bengal-chembur-mumbai-11956",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "443516",
              "name": "EatFit",
              "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
              "locality": "Deonar",
              "areaName": "Chembur",
              "costForTwo": "₹270 for two",
              "cuisines": [
                "Chinese",
                "Healthy Food",
                "Tandoor",
                "Pizzas",
                "North Indian",
                "Thalis",
                "Biryani"
              ],
              "avgRating": 4.1,
              "feeDetails": {
                "restaurantId": "443516",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4600
              },
              "parentId": "76139",
              "avgRatingString": "4.1",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-24 23:59:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "brand"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/eatfit-deonar-chembur-mumbai-443516",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "36461",
              "name": "FreshMenu",
              "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
              "locality": "Nityanand Bugh Road",
              "areaName": "Chembur",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Continental",
                "Chinese",
                "Oriental",
                "Asian",
                "Healthy Food",
                "Fast Food",
                "Indian",
                "Desserts"
              ],
              "avgRating": 4.1,
              "feeDetails": {
                "restaurantId": "36461",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4600
              },
              "parentId": "398",
              "avgRatingString": "4.1",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 00:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹139"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/freshmenu-nityanand-bugh-road-chembur-mumbai-36461",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "62898",
              "name": "LunchBox - Meals and Thalis",
              "cloudinaryImageId": "jjaa2392w4wbt7ii34am",
              "locality": "Anwar compound, Nera Vanmali Tower",
              "areaName": "Chembur",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Punjabi",
                "Healthy Food",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4,
              "feeDetails": {
                "restaurantId": "62898",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4600
              },
              "parentId": "4925",
              "avgRatingString": "4.0",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 03:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-anwar-compound-nera-vanmali-tower-chembur-mumbai-62898",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "289306",
              "name": "BOX8 - Desi Meals",
              "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
              "locality": "Pestom Sagar Colony",
              "areaName": "Ghatkopar East",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "North Indian",
                "Biryani",
                "Thalis",
                "Home Food"
              ],
              "avgRating": 4.1,
              "feeDetails": {
                "restaurantId": "289306",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3500
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3500
              },
              "parentId": "10655",
              "avgRatingString": "4.1",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "12-22 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 02:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/box8-desi-meals-pestom-sagar-colony-ghatkopar-east-mumbai-289306",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "28511",
              "name": "The Belgian Waffle Co.",
              "cloudinaryImageId": "jlsl0x3y0mh05yavirqq",
              "locality": "Vallabh Baug Lane",
              "areaName": "Ghatkopar East",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream"
              ],
              "avgRating": 4.3,
              "veg": true,
              "feeDetails": {
                "restaurantId": "28511",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3500
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3500
              },
              "parentId": "2233",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 04:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-vallabh-baug-lane-ghatkopar-east-mumbai-28511",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "31987",
              "name": "Natural Ice Cream",
              "cloudinaryImageId": "c19lnmlrlslwmupolnoz",
              "locality": "Near Ghatkopar Station",
              "areaName": "Ghatkopar East",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Ice Cream",
                "Desserts"
              ],
              "avgRating": 4.7,
              "veg": true,
              "feeDetails": {
                "restaurantId": "31987",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3500
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3500
              },
              "parentId": "2093",
              "avgRatingString": "4.7",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "15 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-24 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/natural-ice-cream-near-ghatkopar-station-ghatkopar-east-mumbai-31987",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "47610",
              "name": "Theobroma",
              "cloudinaryImageId": "f4p7f3klf2wka2db9rwc",
              "locality": "VN Purav Marg",
              "areaName": "Chembur",
              "costForTwo": "₹800 for two",
              "cuisines": [
                "Bakery",
                "Desserts"
              ],
              "avgRating": 4.5,
              "feeDetails": {
                "restaurantId": "47610",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 5100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 5100
              },
              "parentId": "1040",
              "avgRatingString": "4.5",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 00:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Gourmet",
                          "imageId": "newg.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/theobroma-vn-purav-marg-chembur-mumbai-47610",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "17505",
              "name": "Faasos - Wraps & Rolls",
              "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
              "locality": "Anwar compound, Nera Vanmali Tower",
              "areaName": "Chembur",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "North Indian",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4,
              "feeDetails": {
                "restaurantId": "17505",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4600
              },
              "parentId": "21809",
              "avgRatingString": "4.0",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 03:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-anwar-compound-nera-vanmali-tower-chembur-mumbai-17505",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "344841",
              "name": "Subway",
              "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
              "locality": "Chembur",
              "areaName": "Corner Of 19th Road",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Fast Food"
              ],
              "avgRating": 4.2,
              "feeDetails": {
                "restaurantId": "344841",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3500
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3500
              },
              "parentId": "2",
              "avgRatingString": "4.2",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 05:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/subway-chembur-corner-of-19th-road-mumbai-344841",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "156092",
              "name": "The Good Bowl",
              "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
              "locality": "Chembur FC",
              "areaName": "Chembur",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4,
              "feeDetails": {
                "restaurantId": "156092",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4600
              },
              "parentId": "7918",
              "avgRatingString": "4.0",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 03:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/the-good-bowl-fc-chembur-mumbai-156092",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "28283",
              "name": "Chinese Wok",
              "cloudinaryImageId": "58ee0c742e8d56c3475db9ced65d2d47",
              "locality": "Chembur",
              "areaName": "Chembur",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
              ],
              "avgRating": 4.1,
              "feeDetails": {
                "restaurantId": "28283",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4600
              },
              "parentId": "61955",
              "avgRatingString": "4.1",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-25 02:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/chinese-wok-chembur-mumbai-28283",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "395479",
              "name": "Chaayos Chai+Snacks=Relax",
              "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
              "locality": "K - Star Mall DK Chembur",
              "areaName": "Ghatkopar Vikhroli",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Bakery",
                "Beverages",
                "Chaat",
                "Desserts",
                "Fast Food",
                "Home Food",
                "Italian",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "Sweets"
              ],
              "avgRating": 4.5,
              "feeDetails": {
                "restaurantId": "395479",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4600
              },
              "parentId": "281782",
              "avgRatingString": "4.5",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-24 23:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-k-star-mall-dk-chembur-ghatkopar-vikhroli-mumbai-395479",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "237108",
              "name": "Starbucks Coffee",
              "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
              "locality": "DK Sandu Street",
              "areaName": "Chembur",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
              ],
              "avgRating": 4.4,
              "feeDetails": {
                "restaurantId": "237108",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3500
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3500
              },
              "parentId": "195515",
              "avgRatingString": "4.4",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-24 23:59:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/starbucks-coffee-dk-sandu-street-chembur-mumbai-237108",
              "type": "WEBLINK"
            }
          }
        ]
    }
]

// const restro = {
//     name: "Natural Ice Cream",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c19lnmlrlslwmupolnoz",
//     cuisines: ["Ice Creams", "Desserts", "Frozen Desserts"],
//     location: "Ghatkopar East",
//     rating: "4.2"
// }

const RestaurantCard = ({restaurant}) => {

  const {cloudinaryImageId, name, cuisines, areaName, avgRating} = restaurant.info;
  
    return (
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
            + cloudinaryImageId} />
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
            <p>{avgRating} star</p>
        </div>
    );
}

const Body = () => {
    return (
        <div className="restaurant-list">
            <RestaurantCard restaurant = {restaurantList[0].cards[0]}/>
            <RestaurantCard restaurant = {restaurantList[0].cards[1]}/>
            <RestaurantCard restaurant = {restaurantList[0].cards[2]}/>
            <RestaurantCard restaurant = {restaurantList[0].cards[3]}/>
            <RestaurantCard restaurant = {restaurantList[0].cards[4]}/>
            <RestaurantCard restaurant = {restaurantList[0].cards[5]}/>
            <RestaurantCard restaurant = {restaurantList[0].cards[6]}/>
            <RestaurantCard restaurant = {restaurantList[0].cards[7]}/>
            <RestaurantCard restaurant = {restaurantList[0].cards[8]}/>
        </div>
    );
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    );
}

const AppLayout = () => {
    return (
        <>
            < Header />
            < Body />
            < Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);