const getGenderSpecific = async () => {
  try {
    const data = await fetch("http://localhost:5000/api/hsbc/genderSpecific");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

export { getGenderSpecific };
