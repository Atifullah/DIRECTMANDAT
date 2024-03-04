import React from "react";
import {
  CalenderIcon,
  EmailIcon,
  HeadTitle,
  Modal,
  Paragraph,
  PenIcon,
  PrimaryButton,
  SecondaryButton,
  SecondaryInputField,
  SelectBox,
  Subtitle,
  TickIcon,
  TimeIcon,
  Tiny,
  Title,
} from "src/components";
import { Layout } from "src/layout";

import CardImg from "../../../assets/images/cardPic.png";
import { useState } from "react";
import CustomizedSwitches from "src/styles";
import { NavLink } from "react-router-dom";

const AgencySetup = () => {
  const [agencyModal, SetAgencyModal] = useState(false);
  const [configureModal, setConfigureModal] = useState(false);
  return (
    <Layout>
      <Modal
        title={"Paramétrer mes horaires d’ouverture"}
        className={"flex flex-col gap-4 items-center text-center"}
        onClose={() => SetAgencyModal(false)}
        open={agencyModal}
      >
        <svg
          width="76"
          height="75"
          viewBox="0 0 76 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="37.7789"
            cy="37.9646"
            rx="36.9"
            ry="36.9001"
            fill="#ED7A37"
          />
          <mask
            id="mask0_626_109685"
            maskUnits="userSpaceOnUse"
            x="7"
            y="6"
            width="63"
            height="63"
          >
            <path
              d="M69.3118 6.37207H7.21484V68.4692H69.3118V6.37207Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_626_109685)">
            <path
              d="M30.5025 48.2105L19.7131 37.4211L16.0391 41.0693L30.5025 55.5328L61.551 24.4841L57.9028 20.8359L30.5025 48.2105Z"
              fill="white"
            />
          </g>
        </svg>
        <Title>Vos horaires d’ouverture ont bien été paramétrées</Title>
        <PrimaryButton
          data={{
            name: "Voir mon calendrier",
            primary: true,
          }}
        />
        <SecondaryButton
          data={{
            name: "Retourner à la configuration de l’agence",
            primary: true,
          }}
        />
      </Modal>
      <Modal
        title={"Modifier les horaires d’ouverture"}
        className={"flex flex-col gap-4 !px-2 items-center text-center"}
        onClose={() => setConfigureModal(false)}
        open={configureModal}
        size={"md"}
      >
        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between items-center w-full">
            <div className="w-[12%] lg:w-[24%]">
              <Paragraph className={"invisible !font-bold"}>
                OUVERTURE
              </Paragraph>
            </div>
            <div className="w-[24%]">
              <Paragraph className="!font-bold">OUVERTURE</Paragraph>
            </div>
            <div className="w-[24%]">
              <Paragraph className="!font-bold">FERMETURE</Paragraph>
            </div>
            <div className="w-[24%]">
              <Paragraph className="!font-bold">
                FERMÉ TOUTE LA JOURNÉE
              </Paragraph>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[12%] lg:w-[24%]">
              <Subtitle className={"hidden lg:block"}>LUNDI</Subtitle>
              <Subtitle className={"block lg:hidden"}>LUN</Subtitle>
            </div>
            <div className="w-[30%] lg:w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[15%] lg:w-[24%]">
              <CustomizedSwitches />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[12%] lg:w-[24%]">
              <Subtitle className={"hidden lg:block"}>MARDI</Subtitle>
              <Subtitle className={"block lg:hidden"}>MAR</Subtitle>
            </div>
            <div className="w-[30%] lg:w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[15%] lg:w-[24%]">
              <CustomizedSwitches />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[12%] lg:w-[24%]">
              <Subtitle className={"hidden lg:block"}>MERCREDI</Subtitle>
              <Subtitle className={"block lg:hidden"}>MER</Subtitle>
            </div>
            <div className="w-[30%] lg:w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[15%] lg:w-[24%]">
              <CustomizedSwitches />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[12%] lg:w-[24%]">
              <Subtitle className={"hidden lg:block"}>JEUDI</Subtitle>
              <Subtitle className={"block lg:hidden"}>JEU</Subtitle>
            </div>
            <div className="w-[30%] lg:w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[15%] lg:w-[24%]">
              <CustomizedSwitches />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[12%] lg:w-[24%]">
              <Subtitle className={"hidden lg:block"}>VENDREDI</Subtitle>
              <Subtitle className={"block lg:hidden"}>VEN</Subtitle>
            </div>
            <div className="w-[30%] lg:w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[15%] lg:w-[24%]">
              <CustomizedSwitches />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[12%] lg:w-[24%]">
              <Subtitle className={"hidden lg:block"}>SAMEDI</Subtitle>
              <Subtitle className={"block lg:hidden"}>SAM</Subtitle>
            </div>
            <div className="w-[30%] lg:w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[15%] lg:w-[24%]">
              <CustomizedSwitches />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[12%] lg:w-[24%]">
              <Subtitle className={"hidden lg:block"}>DIMANCHE</Subtitle>
              <Subtitle className={"block lg:hidden"}>DIM</Subtitle>
            </div>
            <div className="w-[30%] lg:w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[24%]">
              <SelectBox
                option={["9h00", "option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="w-[15%] lg:w-[24%]">
              <CustomizedSwitches />
            </div>
          </div>
          <div className="h-px bg-black w-full my-5"></div>
          <div className="flex w-full relative items-center justify-between ">
            <SecondaryInputField
              className={"flex-row-reverse w-full !justify-end gap-2"}
              icon={<TimeIcon />}
              placeholder={"Fermé pendant les jours fériés"}
            />
            <div className="absolute -right-3 bottom-1">
              <CustomizedSwitches />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <SecondaryButton
              data={{
                name: "Annuler",
                primary: true,
              }}
            />
            <PrimaryButton
              onClick={() => {
                setConfigureModal(false);
                SetAgencyModal(true);
              }}
              data={{
                name: "Enregistrer",
                primary: true,
              }}
            />
          </div>
        </div>
      </Modal>
      <HeadTitle className={"text-start"}>Configuration de l’agence</HeadTitle>
      <div className="flex flex-col lg:flex-row gap-4 w-full mt-6">
        <div className="flex flex-col gap-5 justify-between self-start bg-[#F0F0F0] w-full  text-start rounded-lg py-4 px-3">
          <Paragraph>Informations de l’agence</Paragraph>
          <SecondaryInputField
            className={"flex flex-row-reverse gap-2 py-1"}
            icon={<EmailIcon />}
            placeholder={"Agence X"}
            name={"Nom de l’agence"}
          />
          <SecondaryInputField
            className={"flex flex-row-reverse gap-2 py-1"}
            icon={<EmailIcon />}
            placeholder={"Nom du réseau"}
            name={"Réseau"}
          />
          <SecondaryInputField
            className={"flex flex-row-reverse gap-2 py-1"}
            icon={<EmailIcon />}
            placeholder={"11 Rue Arsène Houssaye"}
            name={"Adresse"}
          />
          <div className="flex gap-2 w-full justify-between items-center">
            <SecondaryInputField
              className={"flex flex-row-reverse gap-2 py-1"}
              icon={<EmailIcon />}
              placeholder={"75 008"}
              name={"Code Postal"}
            />
            <SecondaryInputField
              className={"flex flex-row-reverse gap-2 py-1"}
              icon={<EmailIcon />}
              placeholder={"Paris"}
              name={"Ville"}
            />
          </div>
          <div className="relative w-full">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img alt="image" src={CardImg} className="w-full" />
            <div className="flex gap-2 px-2 text-sm rounded-lg bg-slate-300 absolute right-3 top-2 items-center">
              <PenIcon color={"black"} /> Modifier l’image de l’agence
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-between self-start bg-[#F0F0F0] w-full  text-start rounded-lg py-4 px-3">
          <Paragraph>Informations du contact</Paragraph>
          <Tiny>
            Contact pour lequel on prend le rendez-vous. Nous indiquerons
            toujours ce nom. À vous d’expliquer si elle doit être remplacée lors
            du rendez-vous.
          </Tiny>
          <SecondaryInputField
            className={"flex flex-row-reverse gap-2 py-1"}
            icon={<EmailIcon />}
            placeholder={"Olivier Roux"}
            name={"Responsable"}
          />
          <SecondaryInputField
            className={"flex flex-row-reverse gap-2 py-1"}
            icon={<EmailIcon />}
            placeholder={"olivier@directannonces.com"}
            name={"Email"}
          />
          <SecondaryInputField
            className={"flex flex-row-reverse gap-2 py-1"}
            icon={<EmailIcon />}
            placeholder={"01 00 00 00 00"}
            name={"Téléphone Fixe"}
          />
          <SecondaryInputField
            className={"flex flex-row-reverse gap-2 py-1"}
            icon={<EmailIcon />}
            placeholder={"06 00 00 00 00"}
            name={"Mobile"}
          />
          <SecondaryInputField
            className={"flex flex-row-reverse gap-2 py-1"}
            icon={<EmailIcon />}
            placeholder={"01 00 00 00 00"}
            name={"Fax"}
          />
        </div>
        <div className="flex flex-col gap-5  justify-between self-start bg-[#F0F0F0] w-full  text-start rounded-lg py-4 px-3">
          <Paragraph>Paramétrer mon calendrier</Paragraph>
          <div className="flex justify-center w-full">
            <PrimaryButton
              onClick={() => setConfigureModal(true)}
              data={{
                name: (
                  <div className="flex items-center gap-2">
                    <CalenderIcon color={"white"} /> Paramétrer mes horaires
                    d’ouverture
                  </div>
                ),
                primary: true,
              }}
            />
          </div>
          <Paragraph>Présentation</Paragraph>
          <SecondaryInputField
            className={"flex flex-row-reverse gap-2 py-1"}
            placeholder={"Remplissez votre description ici."}
            name={"Description de votre agence"}
          />
          <Tiny>
            Services offerts, visibilité de vos annonces, taux de commission,
            puissance et/ou avantage de votre réseau (le cas échéant),
            emplacement privilegié de votre agence, ancienneté dans la
            profession, spécificités...
          </Tiny>
          <Tiny className={"!font-bold !text-lg"}>
            Ces informations seront reprises dans le dossier estimation.
          </Tiny>
          <div className="flex justify-center w-full">
            <NavLink to={"/estimations-property"}>
              <PrimaryButton
                data={{
                  name: (
                    <div className="flex items-center gap-2">
                      € Estimer un bien
                    </div>
                  ),
                  secondary: true,
                }}
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center w-full mt-5">
        <NavLink to={"/my-account"}>
          <PrimaryButton
            onClick={() => {
              SetAgencyModal(true);
            }}
            data={{
              name: (
                <div className="flex gap-2 items-center">
                  <TickIcon /> Enregistrer
                </div>
              ),
              primary: true,
            }}
          />
        </NavLink>
        <SecondaryButton
          data={{
            name: (
              <div className="text-primary whitespace-nowrap">X Annuler</div>
            ),
            primary: true,
          }}
        />
      </div>
    </Layout>
  );
};

export default AgencySetup;
