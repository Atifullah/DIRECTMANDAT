import React, { useState } from "react";
import CardImg from "../../../assets/images/cardPic.png";
import {
  CloseEyeIcon,
  HeadSubtitle,
  HeadsetIcon,
  PenIcon,
  PrimaryButton,
  ScanIcon,
  SelectBox,
  Subtitle,
  Tiny,
  Title,
  TradeIcon,
  Modal,
  SecondaryButton,
  TradeIconGray,
  Paragraph,
  SettingIcon,
  HeadTitle,
  CheckInput,
} from "src/components";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export const FreelanceCard = ({ data, bg, type, index }) => {
  const [prospectModal, setProspectModal] = useState();
  return (
    <div
      className={clsx(
        `flex flex-col gap-4  p-2 rounded-lg w-full`,
        index % 2 === 0 ? "bg-[#FFF1BE]" : "bg-[#B4E4EE]"
      )}
    >
      <Modal
        className={"flex flex-col items-center text-center gap-4"}
        title={"Prospecter l’annonce"}
        open={prospectModal}
        onClose={() => {
          setProspectModal(false);
        }}
      >
        <svg
          width="64"
          height="63"
          viewBox="0 0 64 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="31.6484" cy="31.5" r="30.75" fill="#6FBAFF" />
          <g clipPath="url(#clip0_1040_41480)">
            <mask
              id="mask0_1040_41480"
              maskUnits="userSpaceOnUse"
              x="16"
              y="15"
              width="33"
              height="33"
            >
              <path
                d="M48.002 15.002H16.002V47.002H48.002V15.002Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_1040_41480)">
              <path
                d="M44.0033 31.2933C44.0033 23.9733 38.3233 19 32.0033 19C25.7499 19 20.0033 23.8667 20.0033 31.3733C19.2033 31.8267 18.6699 32.68 18.6699 33.6667V36.3333C18.6699 37.8 19.8699 39 21.3366 39H22.6699V30.8667C22.6699 25.7067 26.8433 21.5333 32.0033 21.5333C37.1633 21.5333 41.3366 25.7067 41.3366 30.8667V40.3333H30.6699V43H41.3366C42.8033 43 44.0033 41.8 44.0033 40.3333V38.7067C44.7899 38.2933 45.3366 37.48 45.3366 36.52V33.4533C45.3366 32.52 44.7899 31.7067 44.0033 31.2933Z"
                fill="white"
              />
              <path
                d="M28.0033 33.6667C28.7396 33.6667 29.3366 33.0697 29.3366 32.3333C29.3366 31.5969 28.7396 31 28.0033 31C27.2669 31 26.6699 31.5969 26.6699 32.3333C26.6699 33.0697 27.2669 33.6667 28.0033 33.6667Z"
                fill="white"
              />
              <path
                d="M36.0033 33.6667C36.7397 33.6667 37.3366 33.0697 37.3366 32.3333C37.3366 31.5969 36.7397 31 36.0033 31C35.2669 31 34.6699 31.5969 34.6699 32.3333C34.6699 33.0697 35.2669 33.6667 36.0033 33.6667Z"
                fill="white"
              />
              <path
                d="M40.0046 29.7067C39.3646 25.9067 36.0579 23 32.0712 23C28.0312 23 23.6845 26.3467 24.0312 31.6C27.3245 30.2533 29.8046 27.32 30.5112 23.7467C32.2579 27.2533 35.8446 29.6667 40.0046 29.7067Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1040_41480">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(16 15)"
              />
            </clipPath>
          </defs>
        </svg>
        <Title>
          Vous n’êtes pas abonné à notre service de prospection. Pour en savoir
          plus, contactez-nous.
        </Title>
        <PrimaryButton
          data={{
            name: (
              <div className="flex items-center gap-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1495_66437"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="24"
                  >
                    <path d="M24.5 0H0.5V24H24.5V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1495_66437)">
                    <path
                      d="M11.5 18H13.5V16H11.5V18ZM12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM12.5 20C8.09 20 4.5 16.41 4.5 12C4.5 7.59 8.09 4 12.5 4C16.91 4 20.5 7.59 20.5 12C20.5 16.41 16.91 20 12.5 20ZM12.5 6C10.29 6 8.5 7.79 8.5 10H10.5C10.5 8.9 11.4 8 12.5 8C13.6 8 14.5 8.9 14.5 10C14.5 12 11.5 11.75 11.5 15H13.5C13.5 12.75 16.5 12.5 16.5 10C16.5 7.79 14.71 6 12.5 6Z"
                      fill="white"
                    />
                  </g>
                </svg>{" "}
                Nous contacter
              </div>
            ),
            secondary: true,
          }}
        />
        <SecondaryButton
          data={{
            name: (
              <div className="text-secondary">
                Retour à la liste des annonces
              </div>
            ),
            secondary: true,
          }}
        />
      </Modal>
      <div className={`flex gap-3 lg:gap-5 justify-between w-full`}>
        <div className="relative  lg:h-[300px] w-[35%] lg:w-[40%]">
          <div className="bg-primary p-1 rounded-r-lg absolute text-white top-2 lg:top-5">
            GO
          </div>
          <div
            className={clsx(
              `p-1 rounded-r-lg absolute text-sm lg:text-lg font-bold text-black top-16 lg:top-20`,
              index % 2 === 0 ? "bg-[#FFF1BE]" : "bg-[#B4E4EE]"
            )}
          >
            {data.p_nom}
          </div>
          <div className="bg-slate-200 p-1 rounded-l-lg absolute text-black font-bold right-0 top-5 hidden lg:block">
            {data.ann_type} - {data.ann_datepar}
          </div>
          <div className="bg-slate-200 p-1 rounded-l-lg absolute text-black font-bold right-0 top-2 lg:top-20">
            <TradeIcon />
          </div>
          <div className="flex justify-center w-full bottom-1 lg:bottom-5 absolute">
            <div className="bg-slate-200 px-2 lg:px-10 text-xs lg:text-lg py-2 rounded-lg text-black font-bold ">
              {type} - Maison
            </div>
          </div>
          <img
            alt="IMG"
            src={data.ann_img ? data.ann_img : CardImg}
            className="h-full w-full"
          />
        </div>
        <div className="flex w-[65%] lg:w-full gap-2 justify-between">
          <div className="flex flex-col justify-between w-full items-start text-start">
            <HeadTitle>
              {data.p_nom} - {data.ann_cp}
            </HeadTitle>
            <HeadSubtitle>
              {data.ann_prix}€
              {/* • 43m² • 2P. • 5 579,07€/m² */}
            </HeadSubtitle>
            <Paragraph>
              Adresse:{" "}
              {data.p_ville || data.p_rue
                ? data.p_ville + "" + data.p_rue
                : "Adresse non disponible"}
            </Paragraph>
            <Paragraph>Tel : {data.p_telephone}</Paragraph>
            <a
              target="_blank"
              href={data.ann_code}
              className="p-1 bg-slate-300 rounded-lg"
              rel="noreferrer"
            >
              <Tiny>Contact via le site d’origine</Tiny>
            </a>
            <div className="flex justify-around w-full lg:hidden py-2">
              <div className="w-[40px] h-[40px] rounded-full bg-primary text-2xl text-white font-bold flex items-center justify-center">
                6
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                <CloseEyeIcon />
              </div>
              <NavLink
                to={"/card-detail"}
                className="w-[40px] h-[40px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center"
              >
                <PenIcon />
              </NavLink>
              <div className="w-[40px] h-[40px] rounded-full bg-primary text-2xl text-white font-bold flex items-center justify-center">
                <ScanIcon />
              </div>
            </div>
            <div className="hidden lg:flex gap-5 w-full">
              <PrimaryButton
                data={{
                  name: "Voir sur « Le Bon coin »",
                  primary: true,
                }}
                className={"w-full"}
              />
              <NavLink className={"w-full"} to={"/card-detail"}>
                <PrimaryButton
                  className={"w-full h-full"}
                  data={{
                    name: "Details",
                    primary: true,
                  }}
                />
              </NavLink>
              <PrimaryButton
                onClick={() => {
                  setProspectModal(true);
                }}
                className={"w-full"}
                data={{
                  name: (
                    <div className="flex items-center">
                      <HeadsetIcon />
                      Prospecter
                    </div>
                  ),
                  secondary: true,
                }}
              />
            </div>
          </div>
          <div className="hidden lg:flex gap-5 lg:w-[40%] bg-white px-4 py-2 rounded-lg ">
            <div className="flex flex-col justify-around w-full text-start">
              <Title>Gestion de l’annonce</Title>
              <SelectBox
                name={"Attribuer à "}
                option={[
                  "Choisir ...",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                ]}
              />
              <SelectBox
                name={"État de l’annonce"}
                option={[
                  "Choisir ...",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                ]}
              />
              <SelectBox
                name={"Étiquettes"}
                option={[
                  "Choisir ...",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                ]}
              />
            </div>
            <div className="flex flex-col justify-around">
              <div className="w-[50px] h-[50px] rounded-full bg-primary text-2xl text-white font-bold flex items-center justify-center">
                6
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                <CloseEyeIcon />
              </div>
              <NavLink
                to={"/card-detail"}
                className="w-[50px] h-[50px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center"
              >
                <PenIcon />
              </NavLink>
              <div className="w-[50px] h-[50px] rounded-full bg-primary text-2xl text-white font-bold flex items-center justify-center">
                <ScanIcon />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex lg:hidden gap-1 lg:gap-5">
        <NavLink className="w-full">
          <PrimaryButton
            data={{
              name: "Voir sur « Le Bon coin »",
              primary: true,
            }}
            className={"w-full lg:w-full"}
          />
        </NavLink>
        <NavLink className="w-full" to={"/card-detail"}>
          <PrimaryButton
            data={{
              name: "Details",
              primary: true,
            }}
            className={"w-full lg:w-full"}
          />
        </NavLink>
      </div>
    </div>
  );
};

export const ProfessionalFreelancerCard = ({ bg }) => {
  const [prospectModal, setProspectModal] = useState();
  return (
    <div className={`flex flex-col gap-4 bg-[#F1F1F1] p-2 rounded-lg w-full`}>
      <Modal
        className={"flex flex-col items-center text-center gap-4"}
        title={"Prospecter l’annonce"}
        open={prospectModal}
        onClose={() => {
          setProspectModal(false);
        }}
      >
        <svg
          width="64"
          height="63"
          viewBox="0 0 64 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="31.6484" cy="31.5" r="30.75" fill="#6FBAFF" />
          <g clipPath="url(#clip0_1040_41480)">
            <mask
              id="mask0_1040_41480"
              maskUnits="userSpaceOnUse"
              x="16"
              y="15"
              width="33"
              height="33"
            >
              <path
                d="M48.002 15.002H16.002V47.002H48.002V15.002Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_1040_41480)">
              <path
                d="M44.0033 31.2933C44.0033 23.9733 38.3233 19 32.0033 19C25.7499 19 20.0033 23.8667 20.0033 31.3733C19.2033 31.8267 18.6699 32.68 18.6699 33.6667V36.3333C18.6699 37.8 19.8699 39 21.3366 39H22.6699V30.8667C22.6699 25.7067 26.8433 21.5333 32.0033 21.5333C37.1633 21.5333 41.3366 25.7067 41.3366 30.8667V40.3333H30.6699V43H41.3366C42.8033 43 44.0033 41.8 44.0033 40.3333V38.7067C44.7899 38.2933 45.3366 37.48 45.3366 36.52V33.4533C45.3366 32.52 44.7899 31.7067 44.0033 31.2933Z"
                fill="white"
              />
              <path
                d="M28.0033 33.6667C28.7396 33.6667 29.3366 33.0697 29.3366 32.3333C29.3366 31.5969 28.7396 31 28.0033 31C27.2669 31 26.6699 31.5969 26.6699 32.3333C26.6699 33.0697 27.2669 33.6667 28.0033 33.6667Z"
                fill="white"
              />
              <path
                d="M36.0033 33.6667C36.7397 33.6667 37.3366 33.0697 37.3366 32.3333C37.3366 31.5969 36.7397 31 36.0033 31C35.2669 31 34.6699 31.5969 34.6699 32.3333C34.6699 33.0697 35.2669 33.6667 36.0033 33.6667Z"
                fill="white"
              />
              <path
                d="M40.0046 29.7067C39.3646 25.9067 36.0579 23 32.0712 23C28.0312 23 23.6845 26.3467 24.0312 31.6C27.3245 30.2533 29.8046 27.32 30.5112 23.7467C32.2579 27.2533 35.8446 29.6667 40.0046 29.7067Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1040_41480">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(16 15)"
              />
            </clipPath>
          </defs>
        </svg>
        <Title>
          Vous n’êtes pas abonné à notre service de prospection. Pour en savoir
          plus, contactez-nous.
        </Title>
        <PrimaryButton
          data={{
            name: (
              <div className="flex items-center gap-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1495_66437"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="24"
                  >
                    <path d="M24.5 0H0.5V24H24.5V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1495_66437)">
                    <path
                      d="M11.5 18H13.5V16H11.5V18ZM12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM12.5 20C8.09 20 4.5 16.41 4.5 12C4.5 7.59 8.09 4 12.5 4C16.91 4 20.5 7.59 20.5 12C20.5 16.41 16.91 20 12.5 20ZM12.5 6C10.29 6 8.5 7.79 8.5 10H10.5C10.5 8.9 11.4 8 12.5 8C13.6 8 14.5 8.9 14.5 10C14.5 12 11.5 11.75 11.5 15H13.5C13.5 12.75 16.5 12.5 16.5 10C16.5 7.79 14.71 6 12.5 6Z"
                      fill="white"
                    />
                  </g>
                </svg>{" "}
                Nous contacter
              </div>
            ),
            secondary: true,
          }}
        />
        <SecondaryButton
          data={{
            name: (
              <div className="text-secondary">
                Retour à la liste des annonces
              </div>
            ),
            secondary: true,
          }}
        />
      </Modal>
      <div className={`flex gap-3 lg:gap-5 lg:justify-between w-full`}>
        <div className="relative w-[35%] lg:w-[40%]">
          <div className="hidden lg:block bg-secondary p-1 rounded-r-lg absolute text-white top-2 lg:top-5">
            PROFESSIONNEL
          </div>
          <div className="lg:hidden bg-secondary p-1 rounded-r-lg absolute text-white top-2 lg:top-5">
            PRO
          </div>
          <div className="bg-slate-200 p-1 rounded-l-lg absolute text-black font-bold right-0 top-5 hidden lg:block">
            30.06.2023 (30 days)
          </div>
          <div className="bg-slate-200 p-1 rounded-l-lg absolute text-black font-bold right-0 top-2 lg:top-20">
            <TradeIconGray />
          </div>
          <div className="flex justify-center w-full bottom-1 lg:bottom-5 absolute">
            <div className="bg-slate-200 px-2 lg:px-10 text-xs lg:text-lg py-2 rounded-lg text-black font-bold ">
              Vente - Maison
            </div>
          </div>
          <img alt="IMG" src={CardImg} className="h-full w-full" />
        </div>
        <div className="flex w-[60%] lg:w-full gap-2 justify-between">
          <div className="flex flex-col justify-around text-start w-full">
            <Paragraph className={"!font-bold !text-black"}>
              Capifrance
            </Paragraph>
            <HeadTitle>Bordeaux - 33000</HeadTitle>
            <Subtitle>239 900€ 5 579,07€/m²</Subtitle>
            <Subtitle>43m² • 2P.</Subtitle>
            <div className="flex justify-around w-full lg:hidden py-2">
              <div className="w-[40px] h-[40px] rounded-full bg-slate-700 text-xl text-white font-bold flex items-center justify-center">
                3
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                <CloseEyeIcon />
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                <PenIcon />
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                <SettingIcon color={"white"} />
              </div>
            </div>
            <div className="flex flex-col lg:hidden items-center gap-2 w-full">
              <NavLink to={"/similar-announce"} className="w-full">
                <PrimaryButton
                  data={{
                    name: "Annonces de partIculiers similaires",
                    secondary: true,
                  }}
                  className={"w-auto lg:w-full"}
                />
              </NavLink>
              <PrimaryButton
                data={{
                  name: "Annonces de professionnels similaires",
                  secondary: true,
                }}
                className={"w-full"}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="hidden lg:flex w-full gap-5">
                <NavLink to={"/similar-announce"} className={"w-full"}>
                  <PrimaryButton
                    data={{
                      name: "Annonces de partIculiers similaires",
                      secondary: true,
                    }}
                    className={"w-full"}
                  />
                </NavLink>
                <NavLink className={"w-full"}>
                  <PrimaryButton
                    data={{
                      name: "Annonces de professionnels similaires",
                      secondary: true,
                    }}
                    className={"w-full "}
                  />
                </NavLink>
              </div>
              <div className="hidden lg:flex gap-5  w-full">
                <NavLink className={"w-full"}>
                  <PrimaryButton
                    data={{
                      name: "Voir sur « Le Bon coin »",
                      primary: true,
                    }}
                    className={"w-full"}
                  />
                </NavLink>
                <NavLink className={"w-full"} to={"/professional-card"}>
                  <PrimaryButton
                    data={{
                      name: "Details",
                      primary: true,
                    }}
                    className={"w-full "}
                  />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex  bg-white w-[40%] p-4 rounded-lg ">
            <div className="flex flex-col justify-around gap-3 w-full text-start">
              <Title>Gestion de l’annonce</Title>
              <SelectBox
                name={"Attribuer à "}
                option={[
                  "Choisir ...",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                ]}
              />{" "}
              <div className="flex justify-around">
                <div className="w-[50px] h-[50px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                  3
                </div>
                <div className="w-[50px] h-[50px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                  <CloseEyeIcon />
                </div>
                <div className="w-[50px] h-[50px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                  <PenIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex lg:hidden gap-1 lg:gap-5">
        <NavLink className="w-full">
          <PrimaryButton
            data={{
              name: "Voir sur « Le Bon coin »",
              primary: true,
            }}
            className={"w-full lg:w-full"}
          />
        </NavLink>
        <NavLink className="w-full" to={"/professional-card"}>
          <PrimaryButton
            data={{
              name: "Details",
              primary: true,
            }}
            className={"w-full lg:w-full"}
          />
        </NavLink>
      </div>
    </div>
  );
};

export const SavedFreelanceCard = ({ data, bg }) => {
  return (
    <div className={`flex flex-col gap-4 ${data} p-2 rounded-lg w-full`}>
      <div className={`flex gap-3 lg:gap-5 w-full`}>
        <div className="relative w-[35%] lg:w-auto">
          <div className="bg-primary p-1 rounded-r-lg absolute text-white top-2 ">
            PARTICULAR
          </div>
          <div className="bg-slate-200 p-1 rounded-l-lg absolute text-black font-bold right-0 top-2 hidden lg:block">
            30.06.2023 (30 days)
          </div>
          <div className="bg-slate-200 p-1 rounded-l-lg absolute text-black font-bold right-0 top-14">
            <TradeIcon />
          </div>
          <div className="flex justify-center w-full bottom-1 lg:bottom-3 absolute">
            <div className="bg-slate-200 px-2 lg:px-10 text-xs lg:text-lg py-2 rounded-lg text-black font-bold ">
              Vente - Maison
            </div>
          </div>
          <img alt="IMG" src={CardImg} className="h-full" />
        </div>
        <div className="flex flex-col w-[65%] gap-2 justify-around items-start text-start">
          <HeadSubtitle>Bordeaux - 33000</HeadSubtitle>
          <Subtitle>239 900€ • 43m² • 2P. • 5 579,07€/m²</Subtitle>
          <Tiny>
            Adresse : 14 Rue de Deauville 33 000 Bordeaux - voir sur la carte
          </Tiny>
          <Tiny>Tel : indisponible.</Tiny>
          <div className="p-1 bg-slate-300 rounded-lg">
            <Tiny>Contact via le site d’origine</Tiny>
          </div>
          <div className="hidden lg:flex gap-2 my-2 w-full">
            <PrimaryButton
              className={"w-full"}
              data={{
                name: "Voir sur « Le Bon coin »",
                primary: true,
              }}
              cl
            />
            <PrimaryButton
              className={"w-full"}
              data={{
                name: "Details",
                primary: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex lg:hidden gap-2 my-2 w-full">
        <PrimaryButton
          className={"w-full"}
          data={{
            name: "Voir sur « Le Bon coin »",
            primary: true,
          }}
          cl
        />
        <PrimaryButton
          className={"w-full"}
          data={{
            name: "Details",
            primary: true,
          }}
        />
      </div>
    </div>
  );
};

export const EstimationCard = ({ data, bg, select, setSelect }) => {
  return (
    <div className={`flex flex-col gap-4 bg-[#DDD] p-2 rounded-lg w-full `}>
      <div className={`flex gap-3 lg:gap-5 w-full`}>
        <div className="relative w-[35%] lg:w-[60%]">
          <div className="bg-primary p-1 rounded-lg absolute text-white top-2 left-2">
            PARTICULAR
          </div>
          <img alt="IMG" src={CardImg} className="h-full w-full" />
        </div>
        <div className="flex flex-col w-[65%] lg:w-[85%] justify-around items-start text-start">
          <HeadSubtitle>Appartement</HeadSubtitle>
          <Paragraph>
            <span className="font-bold text-black">239 900€</span> 5 579,07€/m²
          </Paragraph>
          <Paragraph>43m² • 2 pièces</Paragraph>
          <Tiny>94 140 Alfortville</Tiny>
          <Tiny className={"line-clamp-3"}>
            <span className="font-bold text-black">DESCRIPTION : </span>
            Charmant 2 pièces en plein centre-ville d alfortville. copropriété
            des années 1970 bien entretenue. l appartement est lumineux. il
            donne sur un espace dégagé sans vis-à-vis. entièrement rénové :
            fenêtres double vitrage, porte d entrée blindée avec isolation
            phonique,
          </Tiny>
          <Paragraph className={"!font-bold !text-black"}>
            Annonce parue sur
          </Paragraph>
          <Paragraph className={"!font-bold !text-black"}>
            « Le Bon coin »
          </Paragraph>
          <div>
            <CheckInput label={"Sélectionner l’annonce"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const OptionCard = ({ bg }) => {
  return (
    <div className={`flex flex-col gap-4 ${bg} p-2 rounded-lg w-full`}>
      <div className="bg-secondary p-1 rounded-r-lg text-white block lg:hidden top-2 lg:top-5">
        En cours de téléprospection
      </div>
      <div className={`flex gap-3 lg:gap-5 justify-between w-full`}>
        <div className="relative w-[35%] lg:w-[40%]">
          <div className="bg-secondary p-1 rounded-r-lg absolute text-white hidden lg:block top-2 lg:top-5">
            En cours de téléprospection
          </div>
          <div className="bg-primary p-1 rounded-lg lg:rounded-r-lg block lg:hidden absolute text-white left-2 lg:left-auto top-2 lg:top-16">
            PART
          </div>
          <div className="bg-primary p-1 rounded-lg lg:rounded-r-lg hidden lg:block absolute text-white left-2 lg:left-auto top-2 lg:top-16">
            PARTICULAR
          </div>
          <div
            className={`${bg} p-1 rounded-r-lg absolute text-sm lg:text-lg hidden lg:block  font-bold text-start text-black top-16 lg:top-28 line-clamp-1`}
          >
            Nom de l’étiquette
          </div>
          <div className="bg-slate-200 p-1 rounded-l-lg absolute text-black font-bold right-0 top-5 hidden lg:block">
            30.06.2023 (30 days)
          </div>
          <div className="bg-slate-200 p-1 rounded-lg lg:rounded-l-lg absolute text-black font-bold lg:right-0 top-2 right-2 lg:top-20">
            <TradeIcon />
          </div>
          <div className="flex justify-center w-full bottom-1 lg:bottom-5 absolute">
            <div className="bg-slate-200 px-2 lg:px-10 text-xs lg:text-lg py-2 rounded-lg text-black font-bold ">
              Vente - Maison
            </div>
          </div>
          <img alt="IMG" src={CardImg} className="h-full w-full" />
        </div>
        <div className="flex w-[65%] lg:w-full gap-2 justify-between">
          <div className="flex flex-col justify-between w-full items-start text-start">
            <HeadTitle>Bordeaux - 33000</HeadTitle>
            <HeadSubtitle>239 900€ • 43m² • 2P. • 5 579,07€/m²</HeadSubtitle>
            <Paragraph>
              Adresse : 14 Rue de Deauville 33 000 Bordeaux - voir sur la carte
            </Paragraph>
            <Paragraph>Tel : indisponible.</Paragraph>
            <div className="p-1 bg-slate-300 rounded-lg">
              <Tiny>Contact via le site d’origine</Tiny>
            </div>
            <div className="flex justify-around w-full lg:hidden py-2">
              <div className="w-[40px] h-[40px] rounded-full bg-primary text-2xl text-white font-bold flex items-center justify-center">
                6
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                <CloseEyeIcon />
              </div>
              <NavLink
                to={"/card-detail"}
                className="w-[40px] h-[40px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center"
              >
                <PenIcon />
              </NavLink>
              <div className="w-[40px] h-[40px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                <ScanIcon />
              </div>
            </div>
            <div className="hidden lg:flex gap-5 w-full">
              <PrimaryButton
                data={{
                  name: "Voir sur « Le Bon coin »",
                  primary: true,
                }}
                className={"w-full"}
              />
              <NavLink className={"w-full"} to={"/card-detail"}>
                <PrimaryButton
                  className={"w-full h-full"}
                  data={{
                    name: "Details",
                    primary: true,
                  }}
                />
              </NavLink>
            </div>
          </div>
          <div className="hidden lg:flex gap-5 lg:w-[40%] bg-white px-4 py-2 rounded-lg ">
            <div className="flex flex-col justify-around w-full text-start">
              <Title>Gestion de l’annonce</Title>
              <SelectBox
                name={"Attribuer à "}
                option={[
                  "Choisir ...",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                ]}
              />
              <SelectBox
                name={"État de l’annonce"}
                option={[
                  "Choisir ...",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                ]}
              />
              <SelectBox
                name={"Étiquettes"}
                option={[
                  "Choisir ...",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                ]}
              />
            </div>
            <div className="flex flex-col justify-around">
              <div className="w-[50px] h-[50px] rounded-full bg-primary text-2xl text-white font-bold flex items-center justify-center">
                6
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                <CloseEyeIcon />
              </div>
              <NavLink
                to={"/card-detail"}
                className="w-[50px] h-[50px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center"
              >
                <PenIcon />
              </NavLink>
              <div className="w-[50px] h-[50px] rounded-full bg-slate-700 text-2xl text-white font-bold flex items-center justify-center">
                <ScanIcon />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex lg:hidden gap-1 lg:gap-5">
        <NavLink className="w-full">
          <PrimaryButton
            data={{
              name: "Voir sur « Le Bon coin »",
              primary: true,
            }}
            className={"w-full lg:w-full"}
          />
        </NavLink>
        <NavLink className="w-full" to={"/card-detail"}>
          <PrimaryButton
            data={{
              name: "Details",
              primary: true,
            }}
            className={"w-full lg:w-full"}
          />
        </NavLink>
      </div>
    </div>
  );
};
