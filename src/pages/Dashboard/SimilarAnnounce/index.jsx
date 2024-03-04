import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BackIcon,
  FreelanceCard,
  HeadTitle,
  Paragraph,
  SelectedIcon,
} from "src/components";
import { ProfessionalFreelancerCard } from "src/components/Widgets/Cards";
import { Layout } from "src/layout";

const SimilarAnnounce = () => {
  // eslint-disable-next-line no-unused-vars
  const [professionalCard, setProfessionalCard] = useState([
    {
      data: "bg-[#F1F1F1]",
      isSelected: false,
    },
  ]);
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
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState(false);

  return (
    <Layout>
      <HeadTitle className={"text-start"}>
        Annonces particuliers similaires
      </HeadTitle>

      <Paragraph className={"text-start !font-bold"}>
        Annonce de référence :
      </Paragraph>
      <div className="flex flex-col items-start">
        <div className="flex flex-col gap-4 w-full py-4">
          {professionalCard.map((item, index) => {
            return (
              <div className="flex items-center gap-3">
                <ProfessionalFreelancerCard data={item} key={index} />
              </div>
            );
          })}
        </div>

        <Link to={"/professional-section"}>
          <button
            className={clsx(
              "rounded-full text-primary text-sm lg:text-lg font-semibold py-1 lg:py-2 px-4 lg:px-6 border w-auto"
            )}
          >
            <div className="flex gap-2 items-center text-primary">
              <BackIcon color={"#ED7A37"} />
              Retour à la recherche
            </div>
          </button>
        </Link>
      </div>
      <HeadTitle className={"text-center my-6"}>
        4 annonces “ particuliers “ similaires ont été trouvées :
      </HeadTitle>
      <div className="flex flex-col gap-3">
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
              <FreelanceCard data={item} key={index} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default SimilarAnnounce;
