export const fetchData = async () => {
  let res = await fetch("https://pollapi.innotechteam.in/");
  let data = await res.json();
  console.log(data);
  return data;
};
