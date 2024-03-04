import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  DeleteIcon,
  FilterModal,
  HomeIcon,
  MessageIcon,
  Modal,
  Paragraph,
  PenIcon,
  PhoneIcon,
  PostalIcon,
  PrimaryButton,
  SaveIcon,
  SecondaryButton,
  SendIcon,
  Title,
} from "src/components";

export const SavedCard = ({ readOnly, state, setState, item }) => {
  const buttonList = [
    {
      icon: <HomeIcon color={state} />,
      title: "Appartment",
    },
    {
      icon: <SaveIcon color={state} />,
      title: "Location",
    },
    {
      icon: <PostalIcon color={state} />,
      title: "Code Postal",
    },
  ];

  const [phone, setPhone] = useState(false);
  const [message, setMessage] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  return (
    <div
      onClick={() => {
        readOnly &&
          setState((prevState) =>
            prevState.map((e) =>
              e.id === item.id ? { ...item, isSelected: !item.isSelected } : e
            )
          );
      }}
      className={clsx(
        "flex flex-col w-full gap-4 bg-[#F0F0F0] rounded-lg p-4",
        state && "!bg-[#FFF2E9]"
      )}
    >
      <FilterModal
        open={filterModal}
        onClose={() => {
          setFilterModal(false);
        }}
      />
      <Modal
        title={""}
        onClose={() => {
          setDeleteModal(false);
        }}
        open={deleteModal}
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-center">
            <div className="bg-primary rounded-full p-3">
              <DeleteIcon />
            </div>
          </div>
          <Title className={"w-[60%] mx-auto text-center"}>
            Êtes-vous sûr(e) de vouloir supprimer cette recherche enregistrée ?
          </Title>
          <div className="flex gap-2 justify-center w-full">
            <SecondaryButton
              onClick={() => {
                setDeleteModal(false);
              }}
              data={{
                name: <div className="text-primary whitespace-nowrap">X Annuler</div>,
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
                primary: true,
              }}
            />
          </div>
        </div>
      </Modal>
      <div className="flex gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap  gap-2 mr-2">
            {buttonList.map((item, index) => {
              return (
                <Button
                  bg={state}
                  key={index}
                  title={item.title}
                  icon={item.icon}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Title>Maisons en Gironde</Title>
            <Paragraph>Annonces des 7 derniers jours</Paragraph>
            <Paragraph>
              <span className="font-bold">Fiches attribuées à</span> : moi
            </Paragraph>
            <Paragraph>
              <span className="font-bold">Prix</span>: entre 200 000€ et 300
              000€
            </Paragraph>
            <Paragraph>
              <span className="font-bold">Pièces</span>: 4
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-col justify-evenly">
          <div
            onClick={() => {
              setFilterModal(true);
            }}
            className="cursor-pointer w-[40px] h-[40px] rounded-full bg-[#434343] text-2xl text-white font-bold flex items-center justify-center"
          >
            <PenIcon />
          </div>
          <div
            onClick={() => {
              setDeleteModal(true);
            }}
            className="w-[40px] cursor-pointer h-[40px] rounded-full bg-[#434343] text-2xl text-white font-bold flex items-center justify-center"
          >
            <DeleteIcon />
          </div>
          <NavLink
            to={"/saved-cards-list"}
            className="w-[40px] h-[40px] rounded-full bg-[#434343] text-2xl text-white font-bold flex items-center justify-center"
          >
            <SendIcon />
          </NavLink>
          <div className="w-[40px] h-[40px] rounded-full bg-[#434343] text-2xl text-white font-bold flex items-center justify-center">
            3
          </div>
        </div>
      </div>
      <div className="w-[98%] h-px bg-[#434343] rounded-full mx-auto"></div>
      <div className="flex justify-between">
        <Paragraph>Être alerté des nouvelles annonces</Paragraph>
        <div className="flex gap-3">
          <PhoneIcon
            onClick={() => {
              setPhone(!phone);
            }}
            color={phone && "#ED7A37"}
          />
          <MessageIcon
            onClick={() => {
              setMessage(!message);
            }}
            color={message && "#ED7A37"}
          />
        </div>
      </div>
    </div>
  );
};

const Button = ({ icon, title, bg }) => {
  return (
    <div
      className={clsx(
        "bg-[#D9D9D9] flex gap-2 rounded-lg px-3 text-[12px] whitespace-nowrap py-2 items-center font-semibold",
        bg && "!bg-[#ED7A37] text-white"
      )}
    >
      {icon} {title}
    </div>
  );
};
