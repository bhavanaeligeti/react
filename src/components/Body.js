import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData (searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
    restaurant.info.name.includes(searchText)
    );
    return filterData;
}

const Body = () => {
    // const searchTxt = "KFC";

    const [searchText, setSearchText] = useState();

    const [restaurants, setRestaurant] = useState(restaurantList);

    return (
        <>
            <div className="search-container">
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button className="search-btn" onClick={() => {
                        const data = filterData(searchText, restaurants);
                        setRestaurant(data)
                    }}>Search</button>
                </div>
            <div className="restaurant-list">

            {
                restaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
                })
            }
            </div>
        </>
    );
}

export default Body;