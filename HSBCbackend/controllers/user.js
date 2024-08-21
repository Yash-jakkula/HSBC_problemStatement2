const supabase = require("../config/db");

const getAllData = async (req, res) => {
  try {
    const { data, error } = await supabase.from("customer").select("*");

    if (error) {
      return res.status(500).send({ error });
    }
    return res.status(200).send({ len: data.length, data });
  } catch (err) {
    console.error(err);
  }
};

const getGenderSpecificData = async (req, res) => {
  try {
    const { data: female, error: femaleError } = await supabase
      .from("customer")
      .select("*")
      .eq("F");

    // const { data: male, error: MaleError } = await supabase
    //   .from("user")
    //   .select("*")
    //   .eq("gender", "M");

    if (femaleError) {
      return res.status(500).send({ femaleError });
    }

    // if (MaleError) {
    //   return res.status(500).send({ error });
    // }
    return res.status(200).json({
      //   maleLength: male.length,
      femaleLength: female.length,
      //   male: male,
      female: female,
    });
  } catch (err) {
    console.error(err);
  }
};

const getAmountWithFilter = async (req, res) => {
  try {
    const amount = req.params.amount;
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .gte("amount", amount);
    if (error) {
      return res.status(500).json({ error });
    }
    return res.status(200).json({ data });
  } catch (err) {
    console.error(err);
  }
};

const getStockInvestiment = async (req, res) => {
  try {
    // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    var url =
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=KLXV7ES2SA9UGQZG";
    const data = await fetch(url, {
      json: true,
      headers: { "User-Agent": "request" },
    });
    const stockprice = await data.json();
    return res.status(200).send(stockprice);
  } catch (err) {
    console.error(err);
  }
};

const getMystockPrices = async (req, res) => {
  try {
    const { data, error } = await supabase.from("stockprice").select("*");
    if (error) {
      return res.status(500).json({ error });
    }
    return res.status(200).json({ data });
  } catch (err) {
    console.error(err);
  }
};

const getSuggestedStock = async (req, res) => {
  try {
    const amount = req.params.amount;
    const { data, error } = await supabase
      .from("stockprice")
      .select("*")
      .gte("stock", amount || 0);
    if (error) {
      return res.status(500).json({ error });
    }
    return res.status(200).json(amount);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllData,
  getGenderSpecificData,
  getAmountWithFilter,
  getStockInvestiment,
  getMystockPrices,
  getSuggestedStock,
};
