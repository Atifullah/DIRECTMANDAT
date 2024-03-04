import React, { useState } from "react";
import { FilterBox, HeadTitle, OptionCard, Subtitle } from "src/components";
import { Layout } from "src/layout";
import Pagination from "@mui/material/Pagination";

const OptionProspect = () => {
  const [filterBox, setFilterBox] = useState(false);
  // eslint-disable-next-line no-unused-vars
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

  return (
    <Layout>
      <FilterBox
        open={filterBox}
        onClose={() => {
          setFilterBox(false);
        }}
      />
      <div className="flex flex-col items-start ">
        <HeadTitle className={"hidden lg:block"}>
          Annonces à téléprospecter
        </HeadTitle>
        <Subtitle className={"font-medium"}>
          Vous avez 4 annonces à téléprospecter.
        </Subtitle>
        <div className="flex flex-col gap-4 w-full py-4">
          {selectedCard.map((item, index) => {
            return <OptionCard key={index} bg={item.data} />;
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

export default OptionProspect;
