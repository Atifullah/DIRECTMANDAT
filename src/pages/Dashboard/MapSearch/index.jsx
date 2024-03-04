import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { getInsee, getListCommunes } from "src/apiService";
import {
  HeadSubtitle,
  HeadTitle,
  MapboxMap,
  Paragraph,
  PenIcon,
  PrimaryButton,
  SearchBox,
  SecondaryButton,
  SecondaryInputField,
  TickIcon,
  Tiny,
  Title,
} from "src/components";
import { Layout } from "src/layout";

const MapSearch = () => {
  const [mapButton, setMapButton] = useState(false);
  const [otherMap, setOtherMap] = useState(false);
  const [list, setList] = useState(0);
  const [nameZipCode, setNameZipCode] = useState([]);
  const [coordinates, setCoordinates] = useState([
    [2.232762486, 48.869499704],
    [2.232762486, 48.869499704],
    [2.236465452, 48.870850995],
  ]);

  const handleSelection = async (insee) => {
    const data = await getInsee(insee);
    if (data) {
      console.log("dataxxx",data)
      setCoordinates(data);
    } else {
      alert("No Coordinates available");
    }
  };

  const getSearchNom = async () => {
    const data = await getListCommunes();
    console.log("zip",data)
    setNameZipCode(data);
  };

  useEffect(() => {
    getSearchNom();
  }, []);

  return (
    <Layout>
      <div className="lg:flex flex-col hidden">
        <HeadTitle className={"text-start"}>Recherche cartographique</HeadTitle>
        <Paragraph className={"w-full text-start "}>
          Localisation géographique par surface parcellaire
        </Paragraph>
        <Paragraph className={"w-full !font-bold  mb-2 text-end !text-primary"}>
          Recherche terminée, 223 parcelle(s) trouvée(s) !
        </Paragraph>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="hidden lg:flex flex-col gap-4 bg-[#F0F0F0] text-start rounded-lg p-4 w-full lg:w-[25%]">
          <SearchBox data={nameZipCode} onSelection={handleSelection} />
          <Title className={"text-start"}>Sélectionnez une zone</Title>
          <Paragraph className={"w-full text-start "}>
            Si je connais le quartier ou le secteur du bien, je dessine une
            zone.
          </Paragraph>
          <SecondaryButton
            onClick={() => {
              setMapButton(true);
            }}
            className="!py-0 !h-auto"
            data={{
              name: (
                <div className="flex items-center gap-2">
                  <PenIcon color={"#ED7A37"} />
                  Editer la zone géographique
                </div>
              ),
              primary: true,
            }}
          />
          <Tiny>Sinon, toute la commune sera analysée.</Tiny>
          <Title className={"w-full text-start !font-bold"}>
            Parcelle(s) dans la sélection :{" "}
            <span className="!font-thin">223</span>
          </Title>
          <div className="w-full h-px bg-black my-5"></div>
          <div className="flex flex-col gap-2 flex-1 items-start ">
            <HeadSubtitle>Surface du terrain</HeadSubtitle>
            <div className="flex flex-col gap-2 w-full">
              <SecondaryInputField
                icon={"m2"}
                name={"Minimum"}
                placeholder="00"
              />
              <SecondaryInputField
                icon={"m2"}
                name={"Maximum"}
                placeholder="00"
              />
            </div>
          </div>
          <Tiny>
            NB : Plus la fourchette est fine, plus la recherche le sera.
          </Tiny>{" "}
          <PrimaryButton
            onClick={() => {
              setOtherMap(true);
            }}
            data={{
              name: (
                <div className="flex items-center gap-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2079_4722)">
                      <mask
                        id="mask0_2079_4722"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="17"
                        height="17"
                      >
                        <path
                          d="M16.5794 0.542969H0.615234V16.5071H16.5794V0.542969Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_2079_4722)">
                        <path
                          d="M10.926 9.854H10.4005L10.2142 9.6744C10.8661 8.9161 11.2586 7.93165 11.2586 6.86072C11.2586 4.47276 9.32291 2.53711 6.93494 2.53711C4.54698 2.53711 2.61133 4.47276 2.61133 6.86072C2.61133 9.24869 4.54698 11.1843 6.93494 11.1843C8.00587 11.1843 8.99032 10.7919 9.74862 10.14L9.92822 10.3263V10.8518L13.2541 14.171L14.2452 13.1799L10.926 9.854ZM6.93494 9.854C5.27867 9.854 3.94167 8.517 3.94167 6.86072C3.94167 5.20445 5.27867 3.86745 6.93494 3.86745C8.59122 3.86745 9.92822 5.20445 9.92822 6.86072C9.92822 8.517 8.59122 9.854 6.93494 9.854Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_2079_4722">
                        <rect
                          width="15.9641"
                          height="15.9641"
                          fill="white"
                          transform="translate(0.616211 0.542969)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Lancer la recherche
                </div>
              ),
              primary: true,
            }}
          />
          <SecondaryButton
            onClick={() => {
              setOtherMap(false);
            }}
            data={{
              name: (
                <div className="flex items-center gap-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2079_11795)">
                      <mask
                        id="mask0_2079_11795"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="17"
                        height="17"
                      >
                        <path
                          d="M16.0794 0.226562H0.115234V16.1907H16.0794V0.226562Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_2079_11795)">
                        <path
                          d="M11.4305 9.53759H10.8984L10.7188 9.35799C11.3706 8.5997 11.7631 7.6219 11.7631 6.54432C11.7631 4.15635 9.82745 2.2207 7.43949 2.2207C5.05152 2.2207 3.11587 4.21622 3.11587 6.54432H1.44629L4.00055 9.20501L6.76766 6.54432H4.44621C4.44621 4.88139 5.78986 3.55105 7.43949 3.55105C9.08911 3.55105 10.4328 4.88804 10.4328 6.54432C10.4328 8.19394 9.08911 9.53759 7.43949 9.53759C7.00712 9.53759 6.60137 9.44447 6.22887 9.28483L5.24442 10.2693C5.88964 10.6484 6.63463 10.8679 7.43949 10.8679C8.51041 10.8679 9.48821 10.4755 10.2465 9.82362L10.4261 10.0032V10.5287L13.7586 13.8479L14.7497 12.8634L11.4305 9.53759Z"
                          fill="#ED7A37"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_2079_11795">
                        <rect
                          width="15.9641"
                          height="15.9641"
                          fill="white"
                          transform="translate(0.116211 0.226562)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Nouvelle recherche
                </div>
              ),
              primary: true,
            }}
          />
        </div>
        <div className="flex lg:hidden flex-col gap-2">
          <div className="justify-between flex">
            <div
              className={clsx(
                "border-2 w-full border-transparent  font-bold pb-2",
                list === 0
                  ? "border-b-primary text-primary"
                  : "border-b-slate-800 text-slate-800"
              )}
            >
              1
            </div>
            <div
              className={clsx(
                "border-2 w-full border-transparent  font-bold pb-2",
                list === 1
                  ? "border-b-primary text-primary"
                  : "border-b-slate-800 text-slate-800"
              )}
            >
              2
            </div>
            <div
              onClick={() => {
                setList(2);
              }}
              className={clsx(
                "border-2 w-full border-transparent  font-bold pb-2",
                list === 2
                  ? "border-b-primary text-primary"
                  : "border-b-slate-800 text-slate-800"
              )}
            >
              3
            </div>
          </div>
          {list === 0 && (
            <div className="flex flex-col gap-2">
              <SearchBox data={nameZipCode} onSelection={handleSelection} />
              <Title className={"text-start"}>Sélectionnez une zone</Title>
              <Paragraph className={"w-full text-start "}>
                Si je connais le quartier ou le secteur du bien, je dessine une
                zone.
              </Paragraph>
              <SecondaryButton
                onClick={() => {
                  setList(1);
                  setMapButton(true);
                }}
                className="!py-0 !h-auto"
                data={{
                  name: (
                    <div className="flex items-center gap-2">
                      <PenIcon color={"#ED7A37"} />
                      Ajouter une indisponibilité
                    </div>
                  ),
                  primary: true,
                }}
              />
              <Tiny>Sinon, toute la commune sera analysée.</Tiny>
            </div>
          )}
          {list === 1 && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 flex-1 items-start ">
                <HeadSubtitle>Surface du terrain</HeadSubtitle>
                <div className="flex flex-col gap-2 w-full">
                  <SecondaryInputField
                    icon={"m2"}
                    name={"Minimum"}
                    placeholder="00"
                  />
                  <SecondaryInputField
                    icon={"m2"}
                    name={"Maximum"}
                    placeholder="00"
                  />
                </div>
              </div>
              <Tiny>
                NB : Plus la fourchette est fine, plus la recherche le sera.
              </Tiny>{" "}
              <PrimaryButton
                onClick={() => {
                  setList(2);
                  setOtherMap(true);
                }}
                data={{
                  name: (
                    <div className="flex items-center gap-2">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2079_4722)">
                          <mask
                            id="mask0_2079_4722"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="17"
                            height="17"
                          >
                            <path
                              d="M16.5794 0.542969H0.615234V16.5071H16.5794V0.542969Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask0_2079_4722)">
                            <path
                              d="M10.926 9.854H10.4005L10.2142 9.6744C10.8661 8.9161 11.2586 7.93165 11.2586 6.86072C11.2586 4.47276 9.32291 2.53711 6.93494 2.53711C4.54698 2.53711 2.61133 4.47276 2.61133 6.86072C2.61133 9.24869 4.54698 11.1843 6.93494 11.1843C8.00587 11.1843 8.99032 10.7919 9.74862 10.14L9.92822 10.3263V10.8518L13.2541 14.171L14.2452 13.1799L10.926 9.854ZM6.93494 9.854C5.27867 9.854 3.94167 8.517 3.94167 6.86072C3.94167 5.20445 5.27867 3.86745 6.93494 3.86745C8.59122 3.86745 9.92822 5.20445 9.92822 6.86072C9.92822 8.517 8.59122 9.854 6.93494 9.854Z"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_2079_4722">
                            <rect
                              width="15.9641"
                              height="15.9641"
                              fill="white"
                              transform="translate(0.616211 0.542969)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Lancer la recherche
                    </div>
                  ),
                  primary: true,
                }}
              />
            </div>
          )}
          {list === 2 && (
            <SecondaryButton
              onClick={() => {
                setOtherMap(false);
              }}
              data={{
                name: (
                  <div className="flex items-center gap-2">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2079_11795)">
                        <mask
                          id="mask0_2079_11795"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="17"
                          height="17"
                        >
                          <path
                            d="M16.0794 0.226562H0.115234V16.1907H16.0794V0.226562Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_2079_11795)">
                          <path
                            d="M11.4305 9.53759H10.8984L10.7188 9.35799C11.3706 8.5997 11.7631 7.6219 11.7631 6.54432C11.7631 4.15635 9.82745 2.2207 7.43949 2.2207C5.05152 2.2207 3.11587 4.21622 3.11587 6.54432H1.44629L4.00055 9.20501L6.76766 6.54432H4.44621C4.44621 4.88139 5.78986 3.55105 7.43949 3.55105C9.08911 3.55105 10.4328 4.88804 10.4328 6.54432C10.4328 8.19394 9.08911 9.53759 7.43949 9.53759C7.00712 9.53759 6.60137 9.44447 6.22887 9.28483L5.24442 10.2693C5.88964 10.6484 6.63463 10.8679 7.43949 10.8679C8.51041 10.8679 9.48821 10.4755 10.2465 9.82362L10.4261 10.0032V10.5287L13.7586 13.8479L14.7497 12.8634L11.4305 9.53759Z"
                            fill="#ED7A37"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_2079_11795">
                          <rect
                            width="15.9641"
                            height="15.9641"
                            fill="white"
                            transform="translate(0.116211 0.226562)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Nouvelle recherche
                  </div>
                ),
                primary: true,
              }}
            />
          )}
        </div>
        <div
          className={clsx("w-full flex flex-col gap-10 lg:w-[75%] -mt-5 mb-5")}
        >
          <div className="h-full ">
            <MapboxMap
              coordinates={coordinates}
              centerArea={[coordinates[0][0], coordinates[0][1]]}
              settings={true}
            >
              {mapButton && (
                <div className="absolute bottom-4 right-4">
                  <PrimaryButton
                    onClick={() => {
                      setMapButton(false);
                    }}
                    data={{
                      name: (
                        <div className="flex items-center gap-2">
                          <TickIcon />
                          Lancer la recherche
                        </div>
                      ),
                      primary: true,
                    }}
                  />
                </div>
              )}
            </MapboxMap>
          </div>
          {otherMap && (
            <div className="flex gap-5">
              <div className="bg-slate-300  w-full h-[100px] flex justify-center items-center lg:h-[200px] rounded-lg p-4">
                Selected Map
              </div>
              <div className="bg-slate-300  w-full h-[100px] flex justify-center items-center lg:h-[200px] rounded-lg p-4">
                Selected Map
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MapSearch;
