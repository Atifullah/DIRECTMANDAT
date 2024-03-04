import clsx from "clsx";
import React, { useState } from "react";
import {
  EyeIcon,
  FreelanceCard,
  HeadTitle,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  SelectedIcon,
  Subtitle,
} from "src/components";
import { ProfessionalFreelancerCard } from "src/components/Widgets/Cards";
import { Layout } from "src/layout";

const HiddenAdsSection = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedCard, setSelectedCard] = useState([
    {
      isSelected: false,
      card: <ProfessionalFreelancerCard />,
      id: 1,
    },
    {
      isSelected: false,
      card: <FreelanceCard data={"bg-[#B4E4EE]"} />,
      id: 2,
    },
    {
      isSelected: false,
      card: <ProfessionalFreelancerCard />,
      id: 3,
    },
    {
      isSelected: false,
      card: <FreelanceCard data={"bg-[#F1F1F1]"} />,
      id: 4,
    },
  ]);

  return (
    <Layout>
      <HeadTitle className={"text-start"}>Annonces masquées</HeadTitle>
      <Paragraph className={"text-start !font-bold"}>
        {selectedCard
          ? " Vous avez 12 annonces masquées"
          : "Vous n’avez aucune annonce masquée"}
      </Paragraph>

      {selectedCard ? (
        <>
          <div className={clsx("flex justify-end flex-wrap mt-5 w-full gap-2")}>
            <SecondaryButton
              data={{
                primary: true,
                name: (
                  <div className="text-primary flex gap-2 whitespace-nowrap">
                    <EyeIcon /> Tout démasquer
                  </div>
                ),
              }}
            />
            <PrimaryButton
              data={{
                primary: true,
                name: (
                  <div className="flex items-center gap-2">
                    <EyeIcon color={"white"} />
                    IDémasquer les annonces sélectionnées (0)
                  </div>
                ),
              }}
            />
          </div>
          <div className="flex flex-col gap-3 mt-6">
            {selectedCard.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-1 lg:gap-2">
                  <div
                    onClick={() =>
                      setSelectedCard((prevState) =>
                        prevState.map((e) =>
                          e.id === item.id
                            ? { ...item, isSelected: !item.isSelected }
                            : e
                        )
                      )
                    }
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
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                  </div>
                  {item.card}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="w-full h-[calc(100vh-300px)] flex flex-col justify-center items-center">
          <Subtitle>Vous n’avez aucune annonce masquée</Subtitle>
          <PrimaryButton
            data={{
              primary: true,
              name: "Revenir aux annonces des particuliers",
            }}
          />
        </div>
      )}
    </Layout>
  );
};

export default HiddenAdsSection;
