import { useEffect, useState } from "react";
import { fetchDataFromFirebase } from "@/sharedService/users/user";
import { CardProps } from "@/utils/types";

const useDashboardEffects = (filters: any,searchText:any) => {
  const [userCards, setUserCards] = useState<CardProps[]>([]);
  const [filterCards, setfilterCards] = useState<CardProps[]>([]);
  const generateUniqueId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  useEffect(() => {
    async function fetchData() {
      const usersDataInitial: any = await fetchDataFromFirebase();
      const localUser: any = localStorage.getItem("user");
      const parsedLocalUser = JSON.parse(localUser);
      const usersData = usersDataInitial.filter(
        (user: any) => user.userId !== parsedLocalUser?.id
      );
      const cards = usersData.map(
        (user: {
          userId: any;
          username: any;
          bio: any;
          age: any;
          country: any;
          gender: any;
          profession: any;
          imageUrls: any[];
        }) => ({
          id: user.userId || generateUniqueId(),
          title: user.username,
          name: user.username,
          content: user.bio,
          age: user.age,
          profession: user.profession,
          location: user.country,
          gender: user.gender,
          decision: "yes",
          image:
            user?.imageUrls && user.imageUrls[0]?.startsWith("https")
              ? user.imageUrls[0]
              : "https://www.w3schools.com/w3images/avatar2.png",
          isModalOpen: false,
        })
      );
      setUserCards(cards);
      setfilterCards(cards);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!filters) return;
    console.log(filters)
    const filteredCards = userCards.filter((user) => {
      if (
        filters.locationFilter &&
        filters.locationFilter !== "ALL" &&
        user.location?.toLowerCase() !== filters.locationFilter?.toLowerCase()
      ) {
        return false;
      }
      const userAge = user.age;
      if (userAge < filters.ageRangeFilter[0] || userAge > filters.ageRangeFilter[1]) {
        return false;
      }
      if (filters.genderFilter && user.gender !== filters.genderFilter) {
        return false;
      }
      if (filters.professionFilter && !user.profession?.includes(filters.professionFilter)) {
        return false;
      }
      if (
        searchText &&
        !user.name?.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
    setfilterCards(filteredCards);
  }, [
    filters,
    searchText,
  ]);
  return { userCards, filterCards }; // Return the data
};

export default useDashboardEffects;
