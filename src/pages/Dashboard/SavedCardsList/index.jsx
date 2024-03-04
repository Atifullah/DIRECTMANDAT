import React, { useState } from "react";
import {
  HeadTitle,
  Paragraph,
  SavedCard,
  SavedFreelanceCard,
} from "src/components";
import { Layout } from "src/layout";

const SavedCardLists = () => {
  const [savedList, setSavedList] = useState([
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
  // eslint-disable-next-line no-unused-vars
  const [savedFreelanceList, setSavedFreelanceList] = useState([
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
      id: 4,
    },
    {
      isSelected: false,
      id: 4,
    },
  ]);

  return (
    <Layout>
      <HeadTitle className={"text-start"}>
        Mes recherches enregistrées
      </HeadTitle>
      <Paragraph className={"text-start !font-bold"}>
        Vous avez 6 recherches enregistrées
      </Paragraph>
      <div className="flex flex-col lg:flex-row gap-2 w-full my-5 lg:my-10">
        <div className="flex flex-col gap-3 w-full lg:w-[35%] h-full lg:h-[calc(100vh-200px)] overflow-y-scroll">
          {savedList.map((item, index) => {
            return (
              <SavedCard
                item={item}
                readOnly={true}
                state={item.isSelected}
                setState={setSavedList}
                key={index}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-3 w-full lg:w-[65%] h-full lg:h-[calc(100vh-200px)] overflow-y-scroll">
          {savedFreelanceList.map((item, index) => {
            return <SavedFreelanceCard key={index}></SavedFreelanceCard>;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SavedCardLists;
