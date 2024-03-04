import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  DeleteIcon,
  HeadTitle,
  Modal,
  Paragraph,
  PenIcon,
  PrimaryButton,
  SecondaryButton,
  SelectBox,
  Tiny,
  Title,
} from "src/components";
import { Layout } from "src/layout";

const UserManagement = () => {
  const [deleteModal, SetDeleteModal] = useState(false);
  return (
    <Layout>
      <Modal
        className={"flex flex-col gap-4 items-center text-center"}
        onClose={() => SetDeleteModal(false)}
        open={deleteModal}
      >
        <svg
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="33.9991"
            cy="33.8096"
            rx="33.21"
            ry="33.2099"
            fill="#ED7A37"
          />
          <g clipPath="url(#clip0_626_114414)">
            <mask
              id="mask0_626_114414"
              maskUnits="userSpaceOnUse"
              x="13"
              y="12"
              width="43"
              height="43"
            >
              <path d="M55.5 12.417H13.5V54.417H55.5V12.417Z" fill="white" />
            </mask>
            <g mask="url(#mask0_626_114414)">
              <path
                d="M24 45.6738C24 47.5988 25.575 49.1738 27.5 49.1738H41.5C43.425 49.1738 45 47.5988 45 45.6738V24.6738H24V45.6738ZM28.305 33.2138L30.7725 30.7463L34.5 34.4563L38.21 30.7463L40.6775 33.2138L36.9675 36.9238L40.6775 40.6338L38.21 43.1013L34.5 39.3913L30.79 43.1013L28.3225 40.6338L32.0325 36.9238L28.305 33.2138ZM40.625 19.4238L38.875 17.6738H30.125L28.375 19.4238H22.25V22.9238H46.75V19.4238H40.625Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_626_114414">
              <rect
                width="42"
                height="42"
                fill="white"
                transform="translate(13.5 12.4277)"
              />
            </clipPath>
          </defs>
        </svg>
        <Title>
          Si vous supprimez cet utilisateur, vous devez réattribuer ses annonces
          à un autre utilisateur
        </Title>
        <SelectBox
          option={[
            "Choisir un utilisateur ...",
            "Julie POUPAT",
            "Olivier ROUX",
          ]}
        />
        <Paragraph>
          Attention ! Cette action est{" "}
          <span className="text-[#E33535]">irréversible.</span>
        </Paragraph>
        <div className="flex gap-2 justify-center w-full">
          <SecondaryButton
            data={{
              name: (
                <div className="text-primary whitespace-nowrap">X Annuler</div>
              ),
              primary: true,
            }}
          />
          <PrimaryButton
            data={{
              name: (
                <div className="flex gap-2 items-center">
                  <DeleteIcon color={"white"} /> Supprimer
                </div>
              ),
            }}
            className={"!bg-[#E33535]"}
          />
        </div>
      </Modal>
      <HeadTitle className={"text-start"}>Gestion des utilisateurs</HeadTitle>
      <div className="flex flex-col lg:flex-row justify-between w-full lg:items-center mb-10">
        <Paragraph className={"w-full text-start lg:w-[50%]"}>
          DirectMandat va vous permettre d'affecter des fichiers à des
          utilisateurs et consulter des statistiques sur chacun d'eux. Pour cela
          vous devez inscrire les utilisateurs de votre agence.
        </Paragraph>
        <NavLink to={"/edit-profile"}>
          <PrimaryButton
            className={"self-end"}
            primary={true}
            data={{
              name: (
                <div className="flex gap-2 items-center">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1982_29098)">
                      <mask
                        id="mask0_1982_29098"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="21"
                        height="21"
                      >
                        <path
                          d="M20.4591 0.826172H0.503906V20.7813H20.4591V0.826172Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1982_29098)">
                        <path
                          d="M11.3135 7.47723C11.3135 5.63969 9.82519 4.15137 7.98765 4.15137C6.15012 4.15137 4.6618 5.63969 4.6618 7.47723C4.6618 9.31476 6.15012 10.8031 7.98765 10.8031C9.82519 10.8031 11.3135 9.31476 11.3135 7.47723ZM12.9764 9.14015V10.8031H15.4708V13.2975H17.1338V10.8031H19.6282V9.14015H17.1338V6.64576H15.4708V9.14015H12.9764ZM1.33594 15.7919V17.4548H14.6394V15.7919C14.6394 13.5802 10.2077 12.466 7.98765 12.466C5.76764 12.466 1.33594 13.5802 1.33594 15.7919Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1982_29098">
                        <rect
                          width="19.9551"
                          height="19.9551"
                          fill="white"
                          transform="translate(0.505859 0.825195)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Créer un nouvel utilisateur
                </div>
              ),
              primary: true,
            }}
          />
        </NavLink>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between bg-[#F0F0F0] items-center self-end text-start rounded-lg p-3"
            >
              <div className="border rounded-full border-primary flex items-center justify-center h-[80px] w-[80px] ">
                <div className="bg-primary rounded-full h-[70px] flex items-center justify-center w-[70px] text-white text-2xl">
                  LG
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-start">
                <Paragraph className={"!font-bold !text-black"}>
                  Lionel Ginestet
                </Paragraph>
                <Tiny>olivier.roux@directannonces.com</Tiny>
              </div>
              <div className="flex flex-col justify-around gap-1">
                <NavLink to={"/edit-profile"}>
                  <div className="w-[30px] h-[30px]  rounded-full bg-neutral-600 text-2xl text-white font-bold flex items-center justify-center">
                    <PenIcon color={"white"} />
                  </div>
                </NavLink>
                <div
                  onClick={() => {
                    SetDeleteModal(true);
                  }}
                  className="w-[30px] h-[30px]  rounded-full bg-neutral-600 text-2xl text-white font-bold flex items-center justify-center"
                >
                  <DeleteIcon color={"white"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default UserManagement;
