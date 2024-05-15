import Router from "./router/Router";
import BgHome from "./assets/img/bg.jpeg";
import CookiesComponent from "./components/Cookies/Cookies";

export default function App() {
  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${BgHome})` }}
    >
      <div className="min-h-screen relative bg-black backdrop-blur-sm backdrop-filter bg-opacity-30">
        <Router />
        <CookiesComponent />
      </div>
    </div>
  );
}
