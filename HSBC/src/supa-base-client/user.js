import supabase from "./supabase";

// Function to get all user data and calculate the total amount
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
        .from("customer")
        .select("*")
        .range(from, to);

      if (error) {
        console.error(error);
        break;
      }

      if (data.length > 0) {
        allData = [...allData, ...data];
        totalAmount += data.reduce((acc, item) => acc + (item.amount || 0), 0);
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

    return { allData, totalAmount, totalAgeCount };
  } catch (err) {
    console.error(err);
  }
};

// Function to get all fraud data and calculate the total amount
const getAllFraudData = async () => {
  try {
    let allData = [];
    let totalAmount = 0;
    let from = 0;
    let to = 999;
    let moreDataAvailable = true;

    while (moreDataAvailable) {
      const { data, error } = await supabase
        .from("customer")
        .select("*")
        .eq("fraud", 1)
        .range(from, to);

      if (error) {
        console.error(error);
        break;
      }

      if (data.length > 0) {
        allData = [...allData, ...data];
        totalAmount += data.reduce((acc, item) => acc + (item.amount || 0), 0);
        from += 1000;
        to += 1000;
      } else {
        moreDataAvailable = false;
      }
    }

    return { allData, totalAmount };
  } catch (err) {
    console.error(err);
  }
};

const suggestionInsert = async ({ id, suggestion }) => {
  try {
    const { error } = await supabase
      .from("suggestions")
      .insert({ id: id, suggestion: suggestion });
    if (error) {
      console.error(error);
    }
    return "suggestion added";
  } catch (err) {
    console.error(err);
  }
};

export { getAllUsersData, getAllFraudData, suggestionInsert };
