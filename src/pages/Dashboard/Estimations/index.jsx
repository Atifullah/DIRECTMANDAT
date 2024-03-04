import React, { useState } from "react";
import { BiBuildingHouse } from "react-icons/bi";
import {
  CalenderIcon,
  DeleteIcon,
  EyeIcon,
  HeadTitle,
  LocationIcon,
  Modal,
  Paragraph,
  PenIcon,
  PrimaryButton,
  ProfileIcon,
  SecondaryButton,
  Subtitle,
  Title,
  TopBottomIcon,
} from "src/components";
import { Layout } from "src/layout";

export const Estimations = () => {
  const filterItems = [
    {
      icon: <CalenderIcon />,
      title: "Date",
    },
    {
      icon: <LocationIcon />,
      title: "Adresse",
    },
    {
      icon: <ProfileIcon />,
      title: "Propriétaire",
    },
    {
      icon: <BiBuildingHouse size={20} />,
      title: "Bien / Surface / Prix",
    },
  ];
  const dataList = [{}, {}, {}, {}, {}];
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <Layout>
      <Modal
        title={""}
        onClose={() => {
          setDeleteModal(false);
        }}
        open={deleteModal}
        size={"xs"}
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-center">
            <div className="bg-primary rounded-full p-3">
              <DeleteIcon />
            </div>
          </div>
          <Title className={" mx-auto text-center"}>
            Êtes-vous sûr de vouloir supprimer cette estimation ?
          </Title>
          <div className="flex gap-2 justify-center w-full">
            <SecondaryButton
              onClick={() => {
                setDeleteModal(false);
              }}
              data={{
                name: (
                  <div className="text-primary whitespace-nowrap">
                    X Annuler
                  </div>
                ),
                primary: true,
              }}
            />
            <PrimaryButton
              onClick={() => {
                setDeleteModal(false);
              }}
              data={{
                name: (
                  <div className="flex gap-2 items-center">
                    <DeleteIcon /> Supprimer
                  </div>
                ),
              }}
              className="!bg-[#E33535]"
            />
          </div>
        </div>
      </Modal>
      <div className="text-start flex flex-col gap-5">
        <HeadTitle>Historique des biens estimés</HeadTitle>
        <div className="flex justify-between lg:justify-start">
          {filterItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex content-start lg:w-[20%] gap-1 items-center"
              >
                {item.icon}
                <Subtitle className={"hidden lg:block"}>{item.title}</Subtitle>
                <TopBottomIcon />
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col gap-2">
          {dataList.map((item, index) => {
            return (
              <div className="bg-[#F0F0F0] px-3 py-2 w-full flex  justify-between rounded-lg">
                <div
                  key={index}
                  className=" lg:items-center flex flex-col lg:flex-row w-full justify-between "
                >
                  <Paragraph className={"!text-black lg:w-[20%]"}>
                    10.07.2023
                  </Paragraph>
                  <Paragraph
                    className={
                      "!text-black !font-bold lg:!font-medium lg:w-[20%]"
                    }
                  >
                    Rue Alfonse Lubin
                    <br /> Alfortville - 94 140
                  </Paragraph>
                  <Paragraph className={"!text-black lg:w-[20%]"}>
                    Olivier Roux
                  </Paragraph>
                  <Paragraph className={"!text-black lg:w-[20%]"}>
                    Maison / 20m2 / 140 000€
                  </Paragraph>
                  <div className="justify-end hidden lg:flex flex-row items-center gap-2 lg:w-[20%]">
                    <div className="rounded-full p-3 bg-primary">
                      <EyeIcon color={"white"} />
                    </div>
                    <div className="rounded-full  bg-slate-700">
                      <PenIcon />
                    </div>
                    <div
                      onClick={() => setDeleteModal(true)}
                      className="rounded-full p-2 bg-slate-700"
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                </div>
                <div className="justify-end flex lg:hidden flex-col items-center gap-2 lg:w-[20%]">
                  <div className="rounded-full p-3 bg-primary">
                    <EyeIcon color={"white"} />
                  </div>
                  <div className="rounded-full  bg-slate-700">
                    <PenIcon />
                  </div>
                  <div className="rounded-full p-2 bg-slate-700">
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
