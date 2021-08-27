export default function useApi(location: string) {
  if (location.includes("localhost")) return "http://localhost:8080/reqs";
  else return "https://edify-api.glitch.me/reqs";
}
