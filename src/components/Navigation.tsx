import GridIntensity from "./GridIntensity";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <nav>
      <div className="logo-wrapper">
        <Logo />
        <div className="vertical-divider page-title" />
        <h2 className="page-title">Demand-responsive web design</h2>
      </div>

      <GridIntensity />
    </nav>
  );
};

export default Navigation;
