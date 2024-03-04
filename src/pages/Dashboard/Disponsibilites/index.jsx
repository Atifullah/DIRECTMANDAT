import React from "react";
import {
  CustomCalender,
  HeadTitle,
  Modal,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  SecondaryInputField,
  SelectBox,
  SettingCalender,
  Subtitle,
  TimeIcon,
  Title,
  WorkBagIcon,
} from "src/components";
import { Layout } from "src/layout";

import { useState } from "react";
import { Alarm } from "@mui/icons-material";
import CustomizedSwitches from "src/styles";

const Disponsibilities = () => {
  const [date, setDate] = useState({
    intial: false,
    final: false,
  });
  const [addAvailable, setAddAvailable] = useState({
    first: false,
    second: false,
  });
  const [modifyAvailable, setModifyAvailable] = useState({
    first: false,
    second: false,
  });
  const [changeHours, setChangeHours] = useState({
    first: false,
    second: false,
  });
  const [agencyModal, SetAgencyModal] = useState(false);
  return (
    <Layout>
      <Modal
        title={"Modifier mes indisponibilités"}
        className={"flex flex-col gap-4 items-center text-center"}
        onClose={() =>
          setModifyAvailable({ ...modifyAvailable, second: false })
        }
        open={modifyAvailable.second}
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

        <Title>Vos indisponibilités ont bien été modifiées</Title>
        <PrimaryButton
          data={{
            name: "Voir mon calendrier",
            primary: true,
          }}
        />
      </Modal>
      <Modal
        title={"Modifier mes indisponibilités"}
        onClose={() => setModifyAvailable({ ...modifyAvailable, first: false })}
        open={modifyAvailable.first}
      >
        <div className="flex flex-col gap-3 mb-5">
          <div className="border border-transparent border-b-primary flex justify-between">
            <Paragraph>Indisponible du 10.07.23 au 27.07.23</Paragraph>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_626_112320)">
                <rect
                  x="0.400391"
                  y="0.200195"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#ED7A37"
                />
                <mask
                  id="mask0_626_112320"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="25"
                  height="25"
                >
                  <path
                    d="M24.4004 0.200195H0.400391V24.2002H24.4004V0.200195Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_626_112320)">
                  <path
                    d="M19.4004 6.6102L17.9904 5.2002L12.4004 10.7902L6.81039 5.2002L5.40039 6.6102L10.9904 12.2002L5.40039 17.7902L6.81039 19.2002L12.4004 13.6102L17.9904 19.2002L19.4004 17.7902L13.8104 12.2002L19.4004 6.6102Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_626_112320">
                  <rect
                    x="0.400391"
                    y="0.200195"
                    width="24"
                    height="24"
                    rx="5"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="border border-transparent border-b-primary flex justify-between">
            <Paragraph>Indisponible du 10.07.23 au 27.07.23</Paragraph>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_626_112320)">
                <rect
                  x="0.400391"
                  y="0.200195"
                  width="24"
                  height="24"
                  rx="5"
                  fill="#ED7A37"
                />
                <mask
                  id="mask0_626_112320"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="25"
                  height="25"
                >
                  <path
                    d="M24.4004 0.200195H0.400391V24.2002H24.4004V0.200195Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_626_112320)">
                  <path
                    d="M19.4004 6.6102L17.9904 5.2002L12.4004 10.7902L6.81039 5.2002L5.40039 6.6102L10.9904 12.2002L5.40039 17.7902L6.81039 19.2002L12.4004 13.6102L17.9904 19.2002L19.4004 17.7902L13.8104 12.2002L19.4004 6.6102Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_626_112320">
                  <rect
                    x="0.400391"
                    y="0.200195"
                    width="24"
                    height="24"
                    rx="5"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
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
            onClick={() => setModifyAvailable({ second: true, first: false })}
            data={{
              name: "Enregistrer",
              primary: true,
            }}
          />
        </div>
      </Modal>
      <Modal
        className={"flex flex-col gap-4 items-center text-center"}
        onClose={() => SetAgencyModal(false)}
        open={agencyModal}
      >
        <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_626_113242)">
            <mask
              id="mask0_626_113242"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="61"
              height="61"
            >
              <path
                d="M60.2002 0.484375H0.200195V60.4844H60.2002V0.484375Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_626_113242)">
              <path
                d="M22.7002 52.9844C22.7002 54.3594 23.8252 55.4844 25.2002 55.4844H35.2002C36.5752 55.4844 37.7002 54.3594 37.7002 52.9844V50.4844H22.7002V52.9844ZM30.2002 5.48438C20.5502 5.48438 12.7002 13.3344 12.7002 22.9844C12.7002 28.9344 15.6752 34.1594 20.2002 37.3344V42.9844C20.2002 44.3594 21.3252 45.4844 22.7002 45.4844H37.7002C39.0752 45.4844 40.2002 44.3594 40.2002 42.9844V37.3344C44.7252 34.1594 47.7002 28.9344 47.7002 22.9844C47.7002 13.3344 39.8502 5.48438 30.2002 5.48438ZM35.2002 34.7344V40.4844H25.2002V34.7344C21.4002 32.0594 17.7002 29.3094 17.7002 22.9844C17.7002 16.0844 23.3002 10.4844 30.2002 10.4844C37.1002 10.4844 42.7002 16.0844 42.7002 22.9844C42.7002 29.2094 38.9252 32.1094 35.2002 34.7344Z"
                fill="#323232"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_626_113242">
              <rect
                width="60"
                height="60"
                fill="white"
                transform="translate(0.200195 0.484375)"
              />
            </clipPath>
          </defs>
        </svg>

        <Title>
          Vous souhaitez rendre toute la journée ou tout un horaire indisponible
          ?
        </Title>
        <Paragraph>Cliquez sur le jour ou sur l’heure</Paragraph>
        <PrimaryButton
          data={{
            name: "J’ai compris",
            primary: true,
          }}
        />
      </Modal>
      <Modal
        title={"Ajouter une indisponibilité"}
        className={"flex flex-col gap-4 items-center text-center"}
        onClose={() => setAddAvailable({ ...addAvailable, second: false })}
        open={addAvailable.second}
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

        <Title>
          Votre indisponibilité a bien été ajoutée à votre calendrier
        </Title>
        <PrimaryButton
          data={{
            name: "Voir mon calendrier",
            primary: true,
          }}
        />
        <SecondaryButton
          data={{
            name: (
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Alarm /> Ajouter une autre indisponibilité
              </div>
            ),
            primary: true,
          }}
        />
      </Modal>
      <Modal
        title={"Ajouter une indisponibilité"}
        className={"flex flex-col gap-4 items-center text-center"}
        onClose={() => setAddAvailable({ ...addAvailable, first: false })}
        open={addAvailable.first}
      >
        <SecondaryInputField
          onClick={() => {
            setDate({ intial: true, final: false });
          }}
          className={"flex flex-row-reverse gap-2 py-1"}
          icon={<WorkBagIcon />}
          placeholder={"jeu. 27 juil. 2023"}
          name={"Date de début"}
        />
        {date.intial && <CustomCalender />}
        <SecondaryInputField
          onClick={() => {
            setDate({ intial: false, final: true });
          }}
          className={"flex flex-row-reverse gap-2 py-1"}
          icon={<WorkBagIcon />}
          placeholder={"jeu. 27 juil. 2023"}
          name={"Date de fin"}
        />
        {date.final && <CustomCalender />}
        <div className="flex justify-end gap-3">
          <SecondaryButton
            data={{
              name: "Annuler",
              primary: true,
            }}
          />
          <PrimaryButton
            onClick={() => {
              setAddAvailable({ first: false, second: true });
            }}
            data={{
              name: "Enregistrer",
              primary: true,
            }}
          />
        </div>
      </Modal>
      <Modal
        title={"Modifier les horaires d’ouverture"}
        className={"flex flex-col gap-4 !px-2 items-center text-center"}
        onClose={() =>
          setChangeHours({
            ...changeHours,
            first: false,
          })
        }
        open={changeHours.first}
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
                setChangeHours({
                  first: false,
                  second: true,
                });
              }}
              data={{
                name: "Enregistrer",
                primary: true,
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal
        title={"Modifier les horaires d’ouverture"}
        className={"flex flex-col gap-4 items-center text-center"}
        onClose={() =>
          setChangeHours({
            ...changeHours,
            second: false,
          })
        }
        open={changeHours.second}
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

        <Title>Les horaires d’ouverture ont bien été modifiées</Title>
        <PrimaryButton
          data={{
            name: "Voir mon calendrier",
            primary: true,
          }}
        />
      </Modal>
      <HeadTitle className={"text-start"}>Disponibilités</HeadTitle>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex justify-center lg:w-[70%] mt-3">
          {" "}
          <SettingCalender />
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 lg:w-[30%]">
          <div className="rounded-lg bg-slate-200 p-2">
            <div className="flex gap-2 items-center">
              <div className="h-5 w-5 bg-[#FFCBA5] rounded-full"></div>
              <Paragraph>Disponible</Paragraph>
            </div>
            <div className="flex gap-2 items-center">
              <div className="h-5 w-5 bg-[#ED7A37] rounded-full"></div>
              <Paragraph>Indisponible (rendez-vous)</Paragraph>
            </div>
            <div className="flex gap-2 items-center">
              <div className="h-5 w-5 bg-[#8C8C8C] rounded-full"></div>
              <Paragraph>Fermeture</Paragraph>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            {" "}
            <PrimaryButton
              onClick={() => {
                setAddAvailable({ first: true, second: false });
              }}
              data={{
                name: (
                  <div className="flex items-center gap-2">
                    <Alarm color={"white"} />
                    Ajouter une indisponibilité
                  </div>
                ),
                primary: true,
              }}
            />
            <SecondaryButton
              onClick={() => {
                setModifyAvailable({ first: true, second: false });
              }}
              data={{
                name: (
                  <div className="flex items-center gap-2">
                    Modifier mes indisponibilités
                  </div>
                ),
                primary: true,
              }}
            />
            <SecondaryButton
              onClick={() => {
                setChangeHours({ first: true, second: false });
              }}
              data={{
                name: (
                  <div className="flex items-center gap-2">
                    Modifier les horaires d’ouverture
                  </div>
                ),
                primary: true,
              }}
            />
          </div>
          <Paragraph className={"!font-bold text-start px-2"}>
            Fonctionnalité à prendre en compte :
            <br /> Si je clique sur 8h00, toute la ligne est en indispo
            <br /> Si je clique sur Dimanche 23, toute la colonne est en indispo
          </Paragraph>
        </div>
      </div>
    </Layout>
  );
};

export default Disponsibilities;
