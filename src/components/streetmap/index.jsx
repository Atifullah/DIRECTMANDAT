import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import clsx from "clsx";

export const MapboxMap = ({
  children,
  settings,
  className,
  coordinates,
  centerArea,
}) => {
  const mapBoxKey =
    "pk.eyJ1IjoiaWFtYWJkdWxhbGkiLCJhIjoiY2xueGtmOXY0MGloOTJpbWNsMDJvYmZrOSJ9.gYpEtxwJP3qIiiPLpyy7Jg";

  const mapContainer = useRef(null);
  const drawRef = useRef(null);
  const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/streets-v11");

  useEffect(() => {
    mapboxgl.accessToken = mapBoxKey;
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: centerArea,
      zoom: 12,
      attributionControl: false,
    });

    // Initialize Mapbox Draw
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
    });

    settings && newMap.addControl(draw);

    // Store the draw instance for later use
    drawRef.current = draw;

    newMap.on("load", () => {
      // Draw polygon if coordinates are provided
      if (coordinates) {
        drawPolygon(newMap, coordinates);
      }
      // You can add any additional map setup here
    });

    return () => {
      newMap.remove();
    };
  }, [mapBoxKey, settings, coordinates, mapStyle]);

  // Function to draw a polygon on the map
  const drawPolygon = (map, coordinates) => {
    map.addLayer({
      id: "polygon",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [coordinates],
          },
        },
      },
      layout: {},
      paint: {
        "line-color": "#088", // Border color
        "line-width": 5,
      },
    });
  };

  const toggleMapStyle = () => {
    setMapStyle((prevStyle) =>
      prevStyle === "mapbox://styles/mapbox/streets-v11"
        ? "mapbox://styles/mapbox/satellite-v9"
        : "mapbox://styles/mapbox/streets-v11"
    );
  };

  return (
    <div
      className={clsx(
        "flex-col-reverse mx-auto w-full relative flex justify-center items-center text-5xl font-bold h-[200px] lg:h-[500px]",
        className
      )}
      ref={mapContainer}
    >
      <button onClick={toggleMapStyle}>Toggle Map Style</button>
      {children}
    </div>
  );
};
