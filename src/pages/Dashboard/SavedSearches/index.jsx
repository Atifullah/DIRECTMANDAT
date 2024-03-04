import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HeadTitle,
  Paragraph,
  PrimaryButton,
  SavedCard,
  SearchZoomIcon,
  SecondaryButton,
  Subtitle,
} from "src/components";
import { Layout } from "src/layout";

const SavedSearches = () => {
  const [cards, setCards] = useState([
    {
      isSelected: false,
      id: 1,
    },
    {
      isSelected: false,
      id: 2,
    },
    {
      isSelected: false,
      id: 3,
    },
    {
      isSelected: false,
      id: 4,
    },
    {
      isSelected: false,
      id: 5,
    },
    {
      isSelected: false,
      id: 6,
    },
  ]);

  return (
    <Layout>
      <HeadTitle className={"text-start"}>
        {cards ? "Mes recherches enregistrées" : "Recherches enregistrées"}
      </HeadTitle>
      <Paragraph className={"text-start !font-bold"}>
        {cards ? "Vous avez 6 recherches enregistrées" : ""}
      </Paragraph>
      <div className="flex justify-end mt-5">
        <NavLink to={"/edit-filters"}>
          <SecondaryButton
            onClick={() => {}}
            data={{
              primary: true,
              name: (
                <div className="text-primary whitespace-nowrap flex gap-2">
                  <SearchZoomIcon /> Créer une recherche enregistrée
                </div>
              ),
            }}
          />
        </NavLink>
      </div>
      {cards ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6">
          {cards.map((item, index) => {
            return (
              <SavedCard
                readOnly={false}
                setState={setCards}
                key={index}
              ></SavedCard>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-300px)] flex flex-col justify-center items-center">
          <Subtitle>Vous n’avez aucune recherche enregistrée</Subtitle>
          <PrimaryButton
            data={{
              primary: true,
              name: "Créer une recherche enregistrée",
            }}
          />
        </div>
      )}
    </Layout>
  );
};

export default SavedSearches;
