import useGridIntensity from "../hooks/useGridIntensity";
import { GridIntensity as GridIntensityEnum } from "../enums";

const GridIntensity = () => {
  const { gridIntensity, gridLoad, gridGeneration, error, isLoading } =
    useGridIntensity();

  return (
    <div className="grid-intensity-wrapper">
      <div>
        <h3 className="grid-intensity__header">GRID INTENSITY</h3>
        <p className="grid-intensity__info">
          {GridIntensityEnum[gridIntensity]}
        </p>
      </div>
      <div className="vertical-divider" />
      <div>
        <h3 className="grid-intensity__header">LOAD (MWh)</h3>
        <p className="grid-intensity__info">{gridLoad}</p>
      </div>
      <div className="vertical-divider" />
      <div>
        <h3 className="grid-intensity__header">GEN. (MWh)</h3>
        <p className="grid-intensity__info">{gridGeneration}</p>
      </div>
    </div>
  );
};

export default GridIntensity;
