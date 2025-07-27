export async function Flag(name) {
  if (name !== null && name !== undefined) {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/Nigeria?fullText=true`
    );
    const data = await response.json();

    console.log(data[0].flags.svg);
    return data[0].flags.svg;
  }
}
