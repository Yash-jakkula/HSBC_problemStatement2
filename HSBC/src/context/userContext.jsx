import React, { createContext, useContext, useState } from "react";
import supabase from "../supa-base-client/supabase";
const UserContext = createContext();

const CounterProvider = ({ children }) => {
  const [alldata, setAllData] = useState({});
  const [fraudData, setFraudData] = useState([]);

  const getAllUsersData = async () => {
    try {
      let allData = [];
      let totalAmount = 0;
      let from = 0;
      let to = 999;
      let moreDataAvailable = true;
      let totalAgeCount = {
        age18: 0,
        age25: 0,
        age35: 0,
        age45: 0,
        age55: 0,
      };
      while (moreDataAvailable) {
        const { data, error } = await supabase
          .from("user")
          .select("*")
          .range(from, to);

        if (error) {
          console.error(error);
          break;
        }

        if (data.length > 0) {
          allData = [...allData, ...data];
          totalAmount += data.reduce(
            (acc, item) => acc + (item.amount || 0),
            0
          );
          totalAgeCount.age18 += data.reduce(
            (acc, item) => (item.age === "1" ? acc + 1 : acc),
            0
          );
          totalAgeCount.age25 += data.reduce(
            (acc, item) => (item.age === "2" ? acc + 1 : acc),
            0
          );

          totalAgeCount.age35 += data.reduce(
            (acc, item) => (item.age === "3" ? acc + 1 : acc),
            0
          );

          totalAgeCount.age45 += data.reduce(
            (acc, item) => (item.age === "4" ? acc + 1 : acc),
            0
          );

          totalAgeCount.age55 += data.reduce(
            (acc, item) => (item.age === "5" ? acc + 1 : acc),
            0
          );
          from += 1000;
          to += 1000;
        } else {
          moreDataAvailable = false;
        }
      }
      setAllData({ allData, totalAgeCount, totalAmount });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <UserContext.Provider
      value={{
        getAllUsersData,
        alldata,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default CounterProvider;
export const useCounter = () => {
  return useContext(UserContext);
};
