export async function country() {
  const response = await fetch(
    "https://restcountries.com/v2/all?fields=name,flag"
  );
  const data = await response.json();
  return data;
}
