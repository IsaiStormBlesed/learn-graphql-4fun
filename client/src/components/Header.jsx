import logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className="mb-2">
      <div>
        <a href="/">
          <div className="flex">
            <img src={logo} alt="logo" />
            <p className="text-pink-600">Project MGMT</p>
          </div>
        </a>
      </div>
    </nav>
  );
}
