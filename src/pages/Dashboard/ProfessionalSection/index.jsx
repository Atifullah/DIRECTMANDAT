import Pagination from "@mui/material/Pagination";
import clsx from "clsx";
import React, { useState } from "react";
import {
  FilterBox,
  FilterIcon,
  HeadSubtitle,
  HeadTitle,
  PrimaryButton,
  PrintIcon,
  SecondaryButton,
  SecondarySelectBox,
  SelectedIcon,
  Title,
} from "src/components";
import { ProfessionalFreelancerCard } from "src/components/Widgets/Cards";
import { Layout } from "src/layout";

const ProfessionalPage = () => {
  const [filterBox, setFilterBox] = useState(false);
  const [selectedCard, setSelectedCard] = useState([
    {
      data: "bg-[#F1F1F1]",
      isSelected: false,
    },
    {
      data: "bg-[#B4E4EE]",
      isSelected: false,
    },
    {
      data: "bg-[#FFF1BE]",
      isSelected: false,
    },
    {
      data: "bg-[#F1F1F1]",
      isSelected: false,
    },
  ]);
  const [selected, setSelected] = useState(false);

  return (
    <Layout>
      <FilterBox
        open={filterBox}
        onClose={() => {
          setFilterBox(false);
        }}
      />
      <HeadTitle className={"hidden lg:block"}>
        Bienvenue sur Direct Mandat
      </HeadTitle>
      <div className="flex flex-col items-start ">
        <HeadSubtitle className={"hidden lg:block"}>
          Effectuer une recherche
        </HeadSubtitle>
        <div className="flex justify-between gap-2 w-full items-center lg:hidden">
          <SecondarySelectBox option={["Plage de date", "1", "2"]} />
          <div
            onClick={() => {
              setFilterBox(true);
            }}
            className="border border-slate-400 h-full p-2"
          >
            <FilterIcon />
          </div>
        </div>
        <div className="hidden justify-between w-full gap-5 mb-5 lg:flex">
          <SecondarySelectBox option={["Plage de date", "1", "2"]} />
          <SecondarySelectBox
            option={["Type de bien", "Home", "Apartment", "Loft", "Trade"]}
          />
          <SecondarySelectBox
            option={["Transactions", "Home", "Apartment", "Loft", "Trade"]}
          />
          <SecondarySelectBox
            option={["Trier par", "Home", "Apartment", "Loft", "Trade"]}
          />
          <div
            onClick={() => {
              setFilterBox(true);
            }}
            className="flex gap-2 font-bold whitespace-nowrap items-center border border-slate-400 px-2"
          >
            <FilterIcon />
            Filtres avancés
          </div>
        </div>
        <HeadSubtitle>Les piges professionnelles du jour</HeadSubtitle>
        <div className="flex flex-col lg:flex-row gap-4 justify-between w-full text-start ">
          <Title>12 nouvelles annonces depuis votre dernière connexion</Title>
          <div
            className={clsx(selected ? "hidden" : "block")}
            onClick={() => {
              setSelected(true);
            }}
          >
            <PrintIcon />
          </div>
          <div className={clsx(selected ? "flex gap-2" : "hidden")}>
            <SecondaryButton
              onClick={() => {
                setSelected(false);
              }}
              data={{
                primary: true,
                name: (
                  <div className="text-primary whitespace-nowrap">
                    X {"  "}Annuler
                  </div>
                ),
              }}
            />
            <PrimaryButton
              data={{
                primary: true,
                name: (
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1814_19064)">
                        <mask
                          id="mask0_1814_19064"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M19.2556 0.957031H0.9375V19.2751H19.2556V0.957031Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_1814_19064)">
                          <path
                            d="M15.4392 7.06431H4.75362C3.48663 7.06431 2.46387 8.08707 2.46387 9.35406V13.9336H5.51688V16.9866H14.6759V13.9336H17.7289V9.35406C17.7289 8.08707 16.7062 7.06431 15.4392 7.06431ZM13.1494 15.4601H7.04338V11.6438H13.1494V15.4601ZM15.4392 10.1173C15.0194 10.1173 14.6759 9.77385 14.6759 9.35406C14.6759 8.93428 15.0194 8.59081 15.4392 8.59081C15.8589 8.59081 16.2024 8.93428 16.2024 9.35406C16.2024 9.77385 15.8589 10.1173 15.4392 10.1173ZM14.6759 3.24805H5.51688V6.30106H14.6759V3.24805Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1814_19064">
                          <rect
                            width="18.3181"
                            height="18.3181"
                            fill="white"
                            transform="translate(0.938477 0.957031)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Imprimer les annonces sélectionnées
                  </div>
                ),
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full py-4">
          {selectedCard.map((item, index) => {
            return (
              <div className="flex items-center gap-3">
                <div
                  onClick={() =>
                    setSelectedCard((prevState) =>
                      prevState.map((e) =>
                        e.data === item.data
                          ? { ...item, isSelected: !item.isSelected }
                          : e
                      )
                    )
                  }
                  className={clsx(selected ? "block" : "hidden")}
                >
                  {!item.isSelected ? (
                    <SelectedIcon />
                  ) : (
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 34 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1"
                        y="1.00977"
                        width="32"
                        height="32"
                        rx="7"
                        stroke="#B3B3B3"
                        stroke-width="2"
                      />
                    </svg>
                  )}
                </div>
                <ProfessionalFreelancerCard data={item} key={index} />
              </div>
            );
          })}
          <div className="flex justify-center w-full">
            <Pagination
              sx={{
                li: {
                  borderRadius: "20px",
                  paddingY: "2px",
                  marginX: "2px",
                },
                ".Mui-selected": {
                  border: "2px solid #ED7A37 !important",
                  backgroundColor: "white",
                },
                ".MuiPaginationItem-previousNext": {
                  border: "white !important",
                },
                ".MuiPaginationItem-page": {
                  border: "2px solid black",
                },
                ".MuiPaginationItem-ellipsis": {
                  paddingY: "3px",
                  border: "2px solid black",
                },
                ".MuiPaginationItem-text": {
                  fontSize: "16px !important",
                  fontWeight: "bold !important",
                },
              }}
              count={10}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfessionalPage;
