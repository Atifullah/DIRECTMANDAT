import React, { useState } from "react";
import {
  BackIcon,
  CalenderIcon,
  CustomLineChart,
  ForwardIcon,
  HeadSubtitle,
  HeadTitle,
  HeadsetIcon,
  InputField,
  LocationIcon,
  MapboxMap,
  Modal,
  NotifyIcon,
  Paragraph,
  PenIcon,
  PrimaryButton,
  ScanIcon,
  SecondaryButton,
  SecondaryInputField,
  SelectBox,
  Subtitle,
  TimeIcon,
  Tiny,
  Title,
  TradeIcon,
} from "src/components";
import { Layout } from "src/layout";
import CardImg from "../../../assets/images/cardPic.png";
import { Link } from "react-router-dom";
import CustomizedSwitches from "src/styles";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CardDetail = () => {
  const [reminderModal, setReminderModal] = useState({
    first: false,
    second: false,
  });
  const [appointment, setAppointment] = useState({
    first: false,
    second: false,
  });
  const [edit, setEdit] = useState(false);
  // const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 });
  return (
    <Layout>
      {/* appointment modal */}
      <Modal
        className={"flex flex-col items-center text-center gap-4 w-full"}
        title={"Créer un rendez-vous"}
        open={appointment.first}
        onClose={() => {
          setAppointment({ ...appointment, first: false });
        }}
      >
        <InputField placeholder={"Titre du rendez-vous"} />
        <SecondaryInputField
          type={"date"}
          className={"flex-row-reverse !justify-end gap-2"}
          icon={<CalenderIcon />}
          placeholder={"lun. 10 juil. 2023"}
        />
        <div className="flex w-full items-center gap-3 flex-wrap lg:flex-nowrap">
          <SecondaryInputField
            type={"time"}
            defaultValue={"10:00"}
            className={"flex-row-reverse !justify-end gap-2"}
            icon={<TimeIcon />}
          />
          <div className="hidden lg:block">
            <ForwardIcon />
          </div>
          <SecondaryInputField
            type={"time"}
            defaultValue={"10:00"}
            className={"flex-row-reverse !justify-end gap-2"}
            icon={<TimeIcon />}
          />
        </div>
        <SecondaryInputField
          className={"flex-row-reverse !justify-end gap-2"}
          icon={<NotifyIcon />}
          placeholder={"10 minutes avant"}
        />
        <SecondaryInputField
          className={"flex-row-reverse !justify-end gap-2"}
          icon={<LocationIcon />}
          placeholder={"Emplacement"}
        />
        <div className="flex gap-2 justify-end w-full">
          <SecondaryButton
            data={{
              name: <div className="text-primary">Annuler</div>,
              primary: true,
            }}
          />
          <PrimaryButton
            onClick={(event) => {
              setAppointment({ first: false, second: true });
            }}
            data={{
              name: "Enregistrer",
              primary: true,
            }}
          />
        </div>
      </Modal>
      <Modal
        className={"flex flex-col items-center text-center gap-2"}
        title={"Créer un rendez-vous"}
        open={appointment.second}
        onClose={() => {
          setAppointment({ ...appointment, second: false });
        }}
      >
        <svg
          width="64"
          height="63"
          viewBox="0 0 64 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="31.6494" cy="31.5" r="30.75" fill="#ED7A37" />
          <mask
            id="mask0_626_99207"
            maskUnits="userSpaceOnUse"
            x="6"
            y="5"
            width="52"
            height="52"
          >
            <path
              d="M57.9261 5.17578H6.17871V56.9232H57.9261V5.17578Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_626_99207)">
            <path
              d="M25.5841 40.0406L16.593 31.0494L13.5312 34.0896L25.5841 46.1424L51.4579 20.2687L48.4177 17.2285L25.5841 40.0406Z"
              fill="white"
            />
          </g>
        </svg>

        <Title>
          Votre rendez-vous a bien été ajouté à votre liste de rendez-vous
        </Title>
        <PrimaryButton
          data={{
            name: "Voir ma liste de rendez-vous",
            primary: true,
          }}
        />
        <SecondaryButton
          data={{
            name: <div className="text-primary">Retour à l’annonce</div>,
            primary: true,
          }}
        />
      </Modal>

      {/* reminder modal */}
      <Modal
        className={"flex flex-col items-center text-center gap-4 w-full"}
        title={"Créer un rappel"}
        open={reminderModal.first}
        onClose={() => {
          setReminderModal({ ...reminderModal, first: false });
        }}
      >
        <InputField placeholder={"Titre du rappel"} />
        <InputField placeholder={"Description"} />
        <div className="flex w-full relative items-center justify-between ">
          <SecondaryInputField
            type={"date"}
            className={"flex-row-reverse w-full !justify-end gap-2"}
            icon={<TimeIcon />}
            placeholder={"Toute la journée"}
          />
          <div className="absolute -right-3 bottom-1">
            <CustomizedSwitches />
          </div>
        </div>
        <SecondaryInputField
          type="date"
          className={"flex-row-reverse !justify-end gap-2"}
          icon={<TimeIcon />}
          placeholder={"lun. 10 juil. 2023"}
        />
        <SecondaryInputField
          className={"flex-row-reverse !justify-end gap-2"}
          icon={<NotifyIcon />}
          placeholder={"10 minutes avant"}
        />
        <div className="flex justify-end w-full gap-4">
          <SecondaryButton
            data={{
              name: <div className="text-primary">Annuler</div>,
              primary: true,
            }}
          />
          <PrimaryButton
            onClick={(event) => {
              setReminderModal({ first: false, second: true });
            }}
            data={{
              name: "Enregistrer",
              primary: true,
            }}
          />
        </div>
      </Modal>
      <Modal
        className={"flex flex-col items-center text-center gap-2"}
        title={"Créer un rappel"}
        open={reminderModal.second}
        onClose={() => {
          setReminderModal({ ...reminderModal, second: false });
        }}
      >
        <svg
          width="64"
          height="63"
          viewBox="0 0 64 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="31.6494" cy="31.5" r="30.75" fill="#ED7A37" />
          <mask
            id="mask0_626_99207"
            maskUnits="userSpaceOnUse"
            x="6"
            y="5"
            width="52"
            height="52"
          >
            <path
              d="M57.9261 5.17578H6.17871V56.9232H57.9261V5.17578Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_626_99207)">
            <path
              d="M25.5841 40.0406L16.593 31.0494L13.5312 34.0896L25.5841 46.1424L51.4579 20.2687L48.4177 17.2285L25.5841 40.0406Z"
              fill="white"
            />
          </g>
        </svg>
        <Title>Votre rappel a bien été ajouté à votre liste de rappels</Title>
        <PrimaryButton
          data={{
            name: "Voir ma liste de rappels",
            primary: true,
          }}
        />
        <SecondaryButton
          data={{
            name: <div className="text-primary">Retour à l’annonce</div>,
            primary: true,
          }}
        />
      </Modal>
      <div className={`flex flex-col gap-4 lg:p-2 rounded-lg w-full`}>
        <div className="hidden lg:flex gap-2 items-center ">
          <Link to={"/home"}>
            <BackIcon />
          </Link>
          <HeadSubtitle>Retour aux annonces</HeadSubtitle>
        </div>
        <div
          className={`flex flex-col lg:flex-row lg:w-auto gap-3 lg:gap-5 justify-between w-full`}
        >
          <div className="relative rounded-b-3xl lg:rounded-none flex lg:block justify-center lg:w-[75%]">
            <div className="bg-primary p-1 rounded-r-lg  absolute text-white top-2 lg:top-5">
              PARTICULIER
            </div>
            <Link
              to={"/home"}
              className="bg-slate-300 rounded-full lg:hidden absolute left-2 top-2 lg:top-5"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_626_99221"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                >
                  <path d="M31.3846 0H0V31.3846H31.3846V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_626_99221)">
                  <path
                    d="M20.1509 21.6942L14.1617 15.6919L20.1509 9.68955L18.3071 7.8457L10.4609 15.6919L18.3071 23.538L20.1509 21.6942Z"
                    fill="#323232"
                  />
                </g>
              </svg>
            </Link>
            <div className="bg-pink-200 p-1 rounded-r-lg absolute text-black font-bold left-0 top-16 hidden lg:block">
              Annonces intéressantes
            </div>
            <div className="bg-slate-200 p-1 rounded-l-lg absolute text-black font-bold right-0 top-2 lg:top-20">
              <TradeIcon />
            </div>
            <div className="flex justify-center w-full bottom-1 lg:bottom-5 absolute">
              <div className="bg-slate-200 px-2 lg:px-10 text-xs lg:text-lg py-2 rounded-lg text-black font-bold ">
                Vente - Appartement
              </div>
            </div>
            <img
              alt="IMG"
              src={CardImg}
              className="h-full rounded-b-3xl lg:rounded-none w-full"
            />
            {!edit && (
              <div className="hidden lg:flex justify-between pt-2 w-full items-center">
                <HeadTitle>Burgundy - 3000</HeadTitle>
                <div
                  onClick={(event) => {
                    // const buttonRect =
                    //   event.currentTarget.getBoundingClientRect();
                    // setDialogPosition({
                    //   top: buttonRect.top - 10,
                    //   left: buttonRect.left,
                    // });
                    setEdit(true);
                  }}
                  className="bg-primary cursor-pointer whitespace-nowrap rounded-3xl px-2 pr-5 text-white flex gap-2 items-center justify-center"
                >
                  <PenIcon />
                  Editer I'annonce
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-1 justify-between">
            <div className="hidden lg:flex flex-col gap-5 bg-white w-full lg:p-4 rounded-lg ">
              <div className="flex flex-col gap-3 w-full text-start">
                <Title>Gestion de l’annonce</Title>
                <SelectBox
                  name={"Attribuer à"}
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
              <div className="flex flex-col gap-3">
                <PrimaryButton
                  data={{
                    name: (
                      <div className="flex items-center justify-center">
                        <HeadsetIcon />
                        Prospecter l’annonce
                      </div>
                    ),
                    secondary: true,
                  }}
                />
                <div className="flex gap-4">
                  <PrimaryButton
                    className="w-full"
                    onClick={(event) => {
                      setAppointment({ ...appointment, first: true });
                    }}
                    data={{
                      name: "Créer un RDV",
                      primary: true,
                    }}
                  />
                  <PrimaryButton
                    className="w-full"
                    onClick={(event) => {
                      setReminderModal({ ...reminderModal, first: true });
                    }}
                    data={{
                      name: "Créer un rappel",
                      primary: true,
                    }}
                  />
                </div>
                <PrimaryButton
                  data={{
                    name: "Voir sur « le Bon coin »",
                    primary: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {edit ? (
          <div className="flex flex-col  gap-5 w-full lg:w-[65%] text-start">
            <HeadTitle>Édition de l’annonce</HeadTitle>
            <div className="flex gap-4 ">
              <InputField name={"Ville"} defaultValue={"Alfortvillie"} />
              <InputField name={"Code postal"} defaultValue={"109999"} />
            </div>
            <div className="flex gap-4 text-start flex-wrap lg:flex-nowrap">
              <SecondaryInputField
                icon={"m2"}
                name={"Surface habitable"}
                defaultValue={"43"}
              />
              <SecondaryInputField
                icon={"pieces"}
                name={"Nb de pièces"}
                defaultValue={"2"}
              />
            </div>
            <SecondaryInputField
              icon={"$"}
              name={"Prix"}
              defaultValue={"239,000"}
            />
            <InputField
              name={"Adresse"}
              defaultValue={"14 Rue de Deaduvillie"}
            />
            <InputField name={"N° de téléphone"} defaultValue={"03123234423"} />
            <HeadTitle>Criteres</HeadTitle>
            <div className="flex gap-4 flex-wrap lg:flex-nowrap">
              <SecondaryInputField
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1814_19273)">
                      <mask
                        id="mask0_1814_19273"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M16.0007 0H0.414062V15.7184H16.0007V0Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1814_19273)">
                        <path
                          d="M5.22626 5.625L8.20721 8.62461L11.1882 5.625L12.1039 6.54846L8.20721 10.4781L4.31055 6.54846L5.22626 5.625Z"
                          fill="#323232"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1814_19273">
                        <rect
                          width="15.5867"
                          height="15.7184"
                          fill="white"
                          transform="translate(0.414062)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
                name={"Type de bein"}
                defaultValue={"Appartement"}
              />
              <SecondaryInputField
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1814_19273)">
                      <mask
                        id="mask0_1814_19273"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M16.0007 0H0.414062V15.7184H16.0007V0Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1814_19273)">
                        <path
                          d="M5.22626 5.625L8.20721 8.62461L11.1882 5.625L12.1039 6.54846L8.20721 10.4781L4.31055 6.54846L5.22626 5.625Z"
                          fill="#323232"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1814_19273">
                        <rect
                          width="15.5867"
                          height="15.7184"
                          fill="white"
                          transform="translate(0.414062)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
                name={"Ascenseur"}
                defaultValue={"Non"}
              />
              <InputField name={"Etage du bien"} defaultValue={"2"} />
            </div>
            <div className="flex gap-4 flex-wrap lg:flex-nowrap">
              <InputField name={"Nb de chambres"} defaultValue={"2"} />
              <InputField name={"Etage immeuble"} defaultValue={"4"} />
              <InputField name={"Nb Salle de bain"} defaultValue={"1"} />
              <InputField name={"Nb place parking"} defaultValue={"0"} />
            </div>
            <HeadTitle>Notes personnelles</HeadTitle>
            <InputField
              placeholder={
                "Écrivez une note personnelle ici, cette note n'est visible que par vous"
              }
            />
            <div className="flex flex-row-reverse gap-5">
              <div className="flex gap-2">
                <SecondaryButton
                  onClick={(event) => {
                    setEdit(false);
                  }}
                  data={{
                    primary: true,
                    name: (
                      <div className="whitespace-nowrap text-primary">
                        X {"  "}Annuler
                      </div>
                    ),
                  }}
                />
                <PrimaryButton
                  onClick={() => {
                    setEdit(false);
                  }}
                  data={{
                    primary: true,
                    name: <div className="mx-10">Enresgister</div>,
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full lg:pt-10 flex ">
            <div className="w-full lg:w-[75%] ">
              <div className="hidden lg:flex flex-col gap-1 justify-around  items-start text-start">
                <div className="lg:hidden flex justify-between gap-2 w-full items-center">
                  <HeadTitle>Burgundy - 3000</HeadTitle>
                  <div
                    onClick={(event) => {
                      setEdit(true);
                    }}
                    className="bg-primary cursor-pointer whitespace-nowrap rounded-3xl px-2 pr-5 text-white flex gap-2 items-center justify-center"
                  >
                    <PenIcon />
                    Editer I'annonce
                  </div>
                </div>
                <Subtitle>43m² • 2 Rooms</Subtitle>
                <Subtitle>239 900€ • 5 579,07€/m²</Subtitle>
                <Paragraph>Adresse : indisponible</Paragraph>
                <div>
                  <PrimaryButton
                    data={{
                      name: (
                        <div className="flex gap-1 items-center justify-center -my-1">
                          <ScanIcon />
                          Faites une recherche cartographique
                        </div>
                      ),
                      primary: true,
                    }}
                  />
                </div>
                <Paragraph>Tel : indisponible.</Paragraph>
                <div className="p-1 bg-green-300 rounded-lg">
                  <Tiny className={"!font-bold"}>
                    Statut Bloctel : Démarchage autorisé
                  </Tiny>
                </div>
                <Title>Historique de parution</Title>
                <CustomLineChart />
                <Title>Description</Title>
                <Paragraph>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero architecto rerum facilis harum reiciendis aliquam,
                  fugiat possimus velit perspiciatis illum corrupti nesciunt
                  illo tenetur nisi sequi reprehenderit ea sapiente perferendis.
                </Paragraph>
                <Title>Alfortvillie 94140</Title>
                <MapboxMap />
                <Title>Note Personnale</Title>
                <Paragraph
                  className={"p-2 bg-slate-300 rounded-lg !text-black"}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero architecto rerum facilis harum reiciendis aliquam,
                  fugiat possimus velit perspiciatis illum corrupti nesciunt
                  illo tenetur nisi sequi reprehenderit ea sapiente perferendis.
                </Paragraph>
                <Title className={"flex justify-between w-full"}>
                  Informations prospection{" "}
                  <div className="bg-secondary !text-sm flex items-center px-2 rounded-lg text-white">
                    appointment 26.05 at 80:00 pm. ecouter
                  </div>
                </Title>
                <Paragraph
                  className={"p-2 bg-secondary rounded-lg !text-sm !text-black"}
                >
                  Hello Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Reiciendis, adipisci.
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero architecto rerum facilis harum reiciendis aliquam,
                  fugiat possimus velit perspiciatis illum corrupti nesciunt
                  illo tenetur nisi sequi reprehenderit ea sapiente perferendis.
                </Paragraph>
              </div>
              <div className="lg:hidden flex flex-col items-start ">
                <div className="flex justify-between gap-2 w-full items-center">
                  <HeadSubtitle>Burgundy - 3000</HeadSubtitle>
                  <div
                    onClick={(event) => {
                      setEdit(true);
                    }}
                    className="bg-primary cursor-pointer whitespace-nowrap rounded-3xl text-sm px-2  text-white flex gap-2 items-center justify-center"
                  >
                    <PenIcon />
                    Editer I'annonce
                  </div>
                </div>
                <Subtitle>43m² • 2 Rooms</Subtitle>
                <Subtitle>239 900€ • 5 579,07€/m²</Subtitle>
                <Paragraph>Adresse : indisponible</Paragraph>

                <Paragraph>Tel : indisponible.</Paragraph>
                <div className="p-1 mb-5 bg-green-300 rounded-lg">
                  <Tiny className={"!font-bold"}>
                    Statut Bloctel : Démarchage autorisé
                  </Tiny>
                </div>
                <Accordion className="w-full">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Title>Gestion de l’annonce</Title>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="flex flex-col gap-3 w-full text-start">
                      <SelectBox
                        name={"Attribuer à"}
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
                    <div className="flex flex-col mt-2 gap-5">
                      <PrimaryButton
                        data={{
                          name: (
                            <div className="flex items-center justify-center">
                              <HeadsetIcon />
                              Prospecter l’annonce
                            </div>
                          ),
                          secondary: true,
                        }}
                      />
                      <div className="flex gap-4">
                        <PrimaryButton
                          className="w-full"
                          onClick={(event) => {
                            setAppointment({ ...appointment, first: true });
                          }}
                          data={{
                            name: "Créer un RDV",
                            primary: true,
                          }}
                        />
                        <PrimaryButton
                          className="w-full"
                          onClick={(event) => {
                            setReminderModal({ ...reminderModal, first: true });
                          }}
                          data={{
                            name: "Créer un rappel",
                            primary: true,
                          }}
                        />
                      </div>
                      <PrimaryButton
                        data={{
                          name: "Voir sur « le Bon coin »",
                          primary: true,
                        }}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="w-full">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Title>Historique de parution</Title>
                  </AccordionSummary>
                  <AccordionDetails>
                    <CustomLineChart />
                  </AccordionDetails>
                </Accordion>
                <Accordion className="w-full">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Title>Description</Title>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Paragraph>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Libero architecto rerum facilis harum reiciendis aliquam,
                      fugiat possimus velit perspiciatis illum corrupti nesciunt
                      illo tenetur nisi sequi reprehenderit ea sapiente
                      perferendis.
                    </Paragraph>
                  </AccordionDetails>
                </Accordion>

                <Accordion className="w-full">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Title>Alfortvillie 94140</Title>
                  </AccordionSummary>
                  <AccordionDetails>
                    <MapboxMap />
                  </AccordionDetails>
                </Accordion>

                <Accordion className="w-full">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Title>Note Personnale</Title>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Paragraph
                      className={"p-2 bg-slate-300 rounded-lg !text-black"}
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Libero architecto rerum facilis harum reiciendis aliquam,
                      fugiat possimus velit perspiciatis illum corrupti nesciunt
                      illo tenetur nisi sequi reprehenderit ea sapiente
                      perferendis.
                    </Paragraph>
                  </AccordionDetails>
                </Accordion>

                <Accordion className="w-full">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Title className={"flex justify-between w-full"}>
                      Informations prospection{" "}
                    </Title>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Paragraph
                      className={
                        "p-2 bg-secondary rounded-lg !text-sm !text-black"
                      }
                    >
                      Hello Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Reiciendis, adipisci.
                      <br />
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Libero architecto rerum facilis harum reiciendis aliquam,
                      fugiat possimus velit perspiciatis illum corrupti nesciunt
                      illo tenetur nisi sequi reprehenderit ea sapiente
                      perferendis.
                    </Paragraph>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className="w-0 lg:w-[25%]"></div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CardDetail;
