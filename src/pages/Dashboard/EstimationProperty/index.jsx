import clsx from "clsx";
import React from "react";
import { useState } from "react";
import {
  AdTheRate,
  BackIcon,
  EmailIcon,
  EstimationCard,
  HeadSubtitle,
  HeadTitle,
  LocationIcon,
  MapIcon,
  Paragraph,
  PrimaryButton,
  RadioButton,
  SecondaryButton,
  SecondaryInputField,
  SelectBox,
  Subtitle,
  TelephoneIcon,
  TickIcon,
  WorkBagIcon,
} from "src/components";
import { Layout } from "src/layout";
import Imge from "../../../assets/images/streetView.png";
export const EstimationProperty = () => {
  // eslint-disable-next-line no-unused-vars
  const [listItem, setListItem] = useState([
    {
      title: "Le négociateur",
      active: true,
      id: 0,
    },
    {
      title: "Le client",
      active: false,
      id: 1,
    },
    {
      title: "Le bien & la photo immeuble",
      active: false,
      id: 2,
    },
    {
      title: "Caractéristiques",
      active: false,
      id: 3,
    },
    {
      title: "État / Situation & prix",
      active: false,
      id: 4,
    },
    {
      title: "Loyer & descriptif",
      active: false,
      id: 5,
    },
    {
      title: "Notre estimation",
      active: false,
      id: 6,
    },
    {
      title: "Annonces comparables",
      active: false,
      id: 7,
    },
  ]);
  const [customerBool, setCustomerBool] = useState();
  const [featureBool, setFeatureBool] = useState(true);
  const [drc, setDrc] = useState();
  const [lift, setLift] = useState();
  const [situation, setSituation] = useState();
  const [id, setId] = useState(0);
  const [select, setSelect] = useState(false);
  const [image, setImage] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="h-full flex flex-col text-start lg:w-[40%]">
          <HeadTitle className={"hidden lg:block"}>Estimer un bien</HeadTitle>
          <HeadSubtitle>Nouvelle estimation</HeadSubtitle>
          <div className="h-px w-[97%] mx-auto my-5 bg-slate-400 hidden lg:block"></div>
          <div className="flex flex-row lg:flex-col">
            {listItem?.map((item, index) => {
              return (
                <Subtitle
                  className={clsx(
                    "!w-full border-2 text-start border-transparent py-3 px-3 cursor-pointer",
                    item.id === id
                      ? "border-b-primary lg:border-b-transparent lg:border-l-primary text-primary"
                      : "border-b-slate-400 lg:border-b-transparent lg:border-l-slate-400 text-slate-400"
                  )}
                >
                  <div className="hidden lg:block">{item.title}</div>
                  <div className="block lg:hidden">{item.id}</div>
                </Subtitle>
              );
            })}
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col gap-4 w-full items-start p-1 lg:p-8 rounded-lg bg-[#F6F6F6]",
            id === 2
              ? "lg:h-[calc(77vh)]"
              : id === 0
              ? " h-[calc(65vh)]"
              : id === 6 && !drc
              ? " h-[calc(65vh)]"
              : " h-full"
          )}
        >
          <HeadSubtitle>{listItem[id].title}</HeadSubtitle>
          {id === 0 ? (
            <div className="w-[50%]">
              <SelectBox
                option={[
                  "Choisir ...",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                ]}
              />
            </div>
          ) : id === 1 ? (
            <div className="w-full flex flex-col gap-2">
              <div className="w-[49%]">
                <SelectBox
                  name={"Civilité"}
                  option={[
                    "Choisir ...",
                    "option1",
                    "option2",
                    "option3",
                    "option4",
                  ]}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                  <SecondaryInputField
                    className={"flex flex-row-reverse gap-2 py-1"}
                    icon={<WorkBagIcon />}
                    placeholder={"Prénom"}
                    name={"Prénom"}
                  />
                  <SecondaryInputField
                    className={"flex flex-row-reverse gap-2 py-1"}
                    icon={<WorkBagIcon />}
                    placeholder={"Nom"}
                    name={"Nom"}
                  />
                </div>
                <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                  <SecondaryInputField
                    className={"flex flex-row-reverse gap-2 py-1"}
                    icon={<TelephoneIcon />}
                    placeholder={"06 00 00 00 00"}
                    name={"N° de téléphone"}
                  />
                  <SecondaryInputField
                    className={"flex flex-row-reverse gap-2 py-1"}
                    icon={<AdTheRate />}
                    placeholder={"nomprenom@gmail.com"}
                    name={"Email"}
                  />
                </div>
                <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                  <div className="flex gap-1 w-full">
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1 w-full"}
                      icon={<EmailIcon />}
                      placeholder={"75 008"}
                      name={"Code Postal"}
                    />
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1 w-full"}
                      icon={<LocationIcon />}
                      placeholder={"Paris"}
                      name={"Ville"}
                    />
                  </div>
                  <SecondaryInputField
                    className={"flex flex-row-reverse gap-2 py-1 w-full"}
                    icon={<MapIcon />}
                    placeholder={"N°"}
                    name={"Adresse"}
                  />
                </div>
                <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                  <Paragraph className={"!text-start w-[50%]"}>
                    <span className="font-bold">NB</span> : Ce service est
                    uniquement disponible sur votre zone habituelle de pige et
                    n'est pas encore disponible pour les départements 57, 67,
                    68.
                  </Paragraph>
                  <Paragraph className={"!text-start w-[50%]"}>
                    <span className="font-bold">NB</span> : Laissez-vous guider
                    par l’écriture suggestive.
                  </Paragraph>
                </div>
              </div>
            </div>
          ) : id === 2 ? (
            <div className="flex flex-col text-start gap-5 w-full">
              <Subtitle className={"!font-bold"}>
                Même adresse que le client ?
              </Subtitle>
              <div className="flex justify-between w-full">
                <div className="flex gap-3 flex-wrap lg:flex-nowrap w-[50%]">
                  <RadioButton
                    title={"Oui"}
                    op={true}
                    state={customerBool}
                    setState={setCustomerBool}
                  />
                  <RadioButton
                    title={"Non"}
                    op={false}
                    state={customerBool}
                    setState={setCustomerBool}
                  />
                </div>
                {customerBool && (
                  <div className="w-[50%] flex justify-start">
                    <div className="flex flex-col gap-2">
                      <RadioButton
                        onClick={() => {
                          setDrc(false);
                          setFeatureBool(true);
                        }}
                        title={"Utiliser la photo Google"}
                        op={true}
                        state={featureBool}
                      />
                      <RadioButton
                        onClick={() => {
                          setDrc(false);
                          setFeatureBool(false);
                        }}
                        title={"Charger ma photo"}
                        op={false}
                        state={featureBool}
                      />
                      <RadioButton
                        onClick={() => {
                          setDrc(true);
                          setFeatureBool(null);
                        }}
                        title={"Aucune image"}
                        state={drc}
                        op={true}
                      />
                      {featureBool ? (
                        <img src={Imge} className="h-[40%] " alt="Png" />
                      ) : (
                        !drc && (
                          <div className="flex justify-center">
                            <PrimaryButton
                              data={{
                                name: (
                                  <div className="text-lg flex items-center px-3 lg:px-5 gap-3">
                                    Télécharger
                                    <svg
                                      width="23"
                                      height="23"
                                      viewBox="0 0 23 23"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_918_40613)">
                                        <mask
                                          id="mask0_918_40613"
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="23"
                                          height="23"
                                        >
                                          <path
                                            d="M22.7429 0H0V22.7429H22.7429V0Z"
                                            fill="white"
                                          />
                                        </mask>
                                        <g mask="url(#mask0_918_40613)">
                                          <path
                                            d="M8.52876 15.1618H14.2145V9.47611H18.0049L11.3716 2.84277L4.73828 9.47611H8.52876V15.1618ZM4.73828 17.0571H18.0049V18.9523H4.73828V17.0571Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_918_40613">
                                          <rect
                                            width="22.7429"
                                            height="22.7429"
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                ),
                                primary: true,
                              }}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row w-full gap-4">
                {customerBool === false && (
                  <div className="lg:w-[50%] flex flex-col gap-2 h-full">
                    <div className="flex gap-5 flex-wrap lg:flex-nowrap w-full ">
                      <SecondaryInputField
                        className={"flex flex-row-reverse gap-2 py-1"}
                        icon={<WorkBagIcon />}
                        placeholder={"75 008"}
                        name={"Code Postal"}
                      />
                      <SecondaryInputField
                        className={"flex flex-row-reverse gap-2 py-1"}
                        icon={<WorkBagIcon />}
                        placeholder={"Paris"}
                        name={"Ville"}
                      />
                    </div>
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"N°"}
                      name={"Adresse"}
                    />
                    <Paragraph>
                      <span className="font-bold">NB :</span> Laissez-vous
                      guider par l’écriture suggestive.
                    </Paragraph>
                    <div
                      onClick={() => {
                        setImage(true);
                      }}
                      className="lg:mt-28"
                    >
                      <PrimaryButton
                        data={{
                          name: (
                            <div className="text-lg flex items-center px-3 lg:px-5 gap-3">
                              <TickIcon />
                              Confirmer l’adresse
                            </div>
                          ),
                          primary: true,
                        }}
                      />
                    </div>
                  </div>
                )}
                {image && !customerBool && (
                  <div className="w-[50%] flex justify-start">
                    <div className="flex flex-col gap-2">
                      <RadioButton
                        onClick={() => {
                          setDrc(false);
                          setFeatureBool(true);
                        }}
                        title={"Utiliser la photo Google"}
                        op={true}
                        state={featureBool}
                      />
                      <RadioButton
                        onClick={() => {
                          setDrc(false);
                          setFeatureBool(false);
                        }}
                        title={"Charger ma photo"}
                        op={false}
                        state={featureBool}
                      />
                      <RadioButton
                        onClick={() => {
                          setDrc(true);
                          setFeatureBool(null);
                        }}
                        title={"Aucune image"}
                        state={drc}
                        op={true}
                      />
                      {featureBool ? (
                        <img src={Imge} className="w-full" alt="Png" />
                      ) : (
                        !drc && (
                          <div className="flex justify-center">
                            <PrimaryButton
                              data={{
                                name: (
                                  <div className="text-lg flex items-center px-3 lg:px-5 gap-3">
                                    Télécharger
                                    <svg
                                      width="23"
                                      height="23"
                                      viewBox="0 0 23 23"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_918_40613)">
                                        <mask
                                          id="mask0_918_40613"
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="23"
                                          height="23"
                                        >
                                          <path
                                            d="M22.7429 0H0V22.7429H22.7429V0Z"
                                            fill="white"
                                          />
                                        </mask>
                                        <g mask="url(#mask0_918_40613)">
                                          <path
                                            d="M8.52876 15.1618H14.2145V9.47611H18.0049L11.3716 2.84277L4.73828 9.47611H8.52876V15.1618ZM4.73828 17.0571H18.0049V18.9523H4.73828V17.0571Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_918_40613">
                                          <rect
                                            width="22.7429"
                                            height="22.7429"
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                ),
                                primary: true,
                              }}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : id === 3 ? (
            <div className="flex flex-col text-start gap-5 w-full">
              <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                <RadioButton
                  title={"Appartement"}
                  op={true}
                  state={featureBool}
                  setState={setFeatureBool}
                />
                <RadioButton
                  title={"Maison"}
                  op={false}
                  state={featureBool}
                  setState={setFeatureBool}
                />
              </div>
              {featureBool === false ? (
                <div className="w-full flex flex-col gap-5">
                  <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Surface du terrain"}
                    />
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Surface habitable"}
                    />
                  </div>
                  <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Nombre de pièces"}
                    />
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Nombre de chambres"}
                    />
                  </div>
                  <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Nombre de salles de bain / eau"}
                    />
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Nombre de places de parking"}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-5">
                  <div className="flex gap-5 w-full">
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1 w-full"}
                      icon={<WorkBagIcon />}
                      placeholder={"N°"}
                      name={"Étage"}
                    />
                    <div className="flex flex-col gap-5 w-full items-start">
                      <Subtitle className={"!font-bold"}>
                        Si RDC, indiquez :
                      </Subtitle>
                      <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                        <RadioButton
                          title={"RDC sur rue"}
                          op={true}
                          state={drc}
                          setState={setDrc}
                        />
                        <RadioButton
                          title={"RDC sur cour"}
                          op={false}
                          state={drc}
                          setState={setDrc}
                        />
                      </div>
                    </div>
                  </div>
                  <Paragraph className={"!text-start"}>
                    Indiquer 0 pour RDC
                  </Paragraph>
                  <div className="flex gap-5 w-full">
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1 w-full"}
                      icon={<WorkBagIcon />}
                      placeholder={"N°"}
                      name={"Nombre d’étages de l’immeuble"}
                    />
                    <div className="flex flex-col gap-5 w-full items-start">
                      <Subtitle className={"!font-bold"}>
                        Même adresse que le client ?
                      </Subtitle>
                      <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                        <RadioButton
                          title={"Oui"}
                          op={true}
                          state={lift}
                          setState={setLift}
                        />
                        <RadioButton
                          title={"Non"}
                          op={false}
                          state={lift}
                          setState={setLift}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Surface carrez "}
                    />
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Surface terrasse / jardin"}
                    />
                  </div>
                  <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Nombre de pièces"}
                    />
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Nombre de chambres"}
                    />
                  </div>
                  <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Nombre de salles de bain / eau"}
                    />
                    <SecondaryInputField
                      className={"flex flex-row-reverse gap-2 py-1"}
                      icon={<WorkBagIcon />}
                      placeholder={"00"}
                      name={"Nombre de places de parking"}
                    />
                  </div>
                </div>
              )}
            </div>
          ) : id === 4 ? (
            <div className="text-start flex flex-col gap-5">
              <Subtitle>État / Situation</Subtitle>
              <Paragraph>
                Pensez-vous que ce bien :
                <br />• compte tenu de son état (-30% à +20%)
                <br />• de l'état des parties communes, de son emplacement, de
                sa vue (+5% à +20%)
                <br />• ou d’autres caractéristiques : immense terrain,
                nuisances sonores, vis-à-vis (-15% à +20%) est dans la moyenne
                des autres biens du secteur, au-dessus ou au-dessous ?
              </Paragraph>
              <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                <RadioButton
                  state={situation}
                  title={"Dans la moyenne (=)"}
                  setState={setSituation}
                  op={true}
                />
                <RadioButton
                  state={situation}
                  title={"Au-dessus (+)"}
                  setState={setSituation}
                  op={false}
                />
                <RadioButton
                  state={situation}
                  title={"En-dessous (-)"}
                  setState={setSituation}
                  op={false}
                />
              </div>
              <Subtitle>Prix</Subtitle>
              <div className="flex gap-5 w-full">
                <div className="flex flex-col gap-5 w-full items-start">
                  <Subtitle className={"!font-bold"}>
                    Indiquer le prix :
                  </Subtitle>
                  <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                    <RadioButton
                      title={"Brut"}
                      op={true}
                      state={lift}
                      setState={setLift}
                    />
                    <RadioButton
                      title={"Net vendeur"}
                      op={false}
                      state={lift}
                      setState={setLift}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-full items-start">
                  <Subtitle className={"!font-bold"}>
                    Afficher le calcul dans le dossier du client
                  </Subtitle>
                  <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                    <RadioButton
                      title={"Oui"}
                      op={true}
                      state={customerBool}
                      setState={setCustomerBool}
                    />
                    <RadioButton
                      title={"Non"}
                      op={false}
                      state={customerBool}
                      setState={setCustomerBool}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <div className="flex flex-col gap-5 w-full items-start">
                  <Subtitle className={"!font-bold"}>
                    État de la comission
                  </Subtitle>
                  <div className="flex flex-col gap-3">
                    <RadioButton
                      title={"Ajoutée à l’estimation (+)"}
                      op={true}
                      state={featureBool}
                      setState={setFeatureBool}
                    />
                    <RadioButton
                      title={"Retirée de l’estimation (-)"}
                      op={false}
                      state={featureBool}
                      setState={setFeatureBool}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-full items-start">
                  <Subtitle className={"!font-bold"}>
                    Format de la comission
                  </Subtitle>
                  <div className="flex flex-col gap-3">
                    <RadioButton
                      title={"En pourcentage du prix (%)"}
                      op={true}
                      state={drc}
                      setState={setDrc}
                    />
                    <RadioButton
                      title={"Fixe (€)"}
                      op={false}
                      state={drc}
                      setState={setDrc}
                    />
                  </div>
                </div>
              </div>
              <SecondaryInputField
                className={"flex flex-row-reverse gap-2 py-1 w-[60%]"}
                icon={<WorkBagIcon />}
                placeholder={"- 00"}
                name={"Prix de la commission"}
              />
            </div>
          ) : id === 5 ? (
            <div className="flex flex-col text-start gap-5 w-full ">
              <Subtitle>Loyer</Subtitle>
              <div className="flex flex-col gap-5 w-full items-start">
                <Subtitle className={"!font-bold"}>
                  Faire apparaître une valeur locative mensuelle
                </Subtitle>
                <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                  <RadioButton
                    title={"Oui"}
                    op={true}
                    state={drc}
                    setState={setDrc}
                  />
                  <RadioButton
                    title={"Non"}
                    op={false}
                    state={drc}
                    setState={setDrc}
                  />
                </div>
              </div>
              <SecondaryInputField
                className={"flex flex-row-reverse gap-2 py-1 w-full"}
                placeholder={"Remplissez votre description ici."}
                name={"Descriptif"}
              />
            </div>
          ) : id === 6 ? (
            <div className="flex flex-col text-start gap-5 w-full ">
              <Subtitle>
                Brut :{" "}
                <span className="font-medium">
                  <span className={clsx(!drc && "text-primary font-bold")}>
                    59 000 €
                  </span>{" "}
                  soit 5 900 €/m2
                </span>
                <br /> Valeur de la comission :{" "}
                <span className="font-medium">5 900€</span>
                <br /> Net vendeur :{" "}
                <span className="font-medium">53 100 €</span>
              </Subtitle>
              <div className="flex flex-col gap-5 w-full items-start">
                <Subtitle className={"!font-bold"}>
                  Voulez-vous corriger cette estimation?
                </Subtitle>
                <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                  <RadioButton
                    title={"Oui"}
                    op={true}
                    state={drc}
                    setState={setDrc}
                  />
                  <RadioButton
                    title={"Non"}
                    op={false}
                    state={drc}
                    setState={setDrc}
                  />
                </div>
              </div>
              {drc && (
                <>
                  <SecondaryInputField
                    className={"flex  py-1 w-[50%]"}
                    placeholder={"0 000"}
                    icon={"€"}
                    name={"Votre estimation"}
                  />
                  <Paragraph>
                    <span className="font-bold">NB :</span> Dans le dossier
                    final, c’est votre estimation qui sera toujours prise en
                    compte
                  </Paragraph>
                  <div>
                    <PrimaryButton
                      data={{
                        name: (
                          <div className="text-lg flex items-center px-3 lg:px-5 gap-3">
                            <TickIcon />
                            Valider le montant
                          </div>
                        ),
                        color: "#A0A0A0",
                      }}
                    />
                  </div>
                </>
              )}
              <Paragraph>
                <span className="font-bold">NB :</span> Retrouvez toutes vos
                estimations dans l‘historique des biens estimés (lien vers page)
              </Paragraph>
            </div>
          ) : (
            id === 7 && (
              <div className="flex flex-col gap-2 text-start">
                <Paragraph>
                  Des annonces de biens comparables vont être incluses dans le
                  dossier, merci de les{" "}
                  <span className="font-bold">
                    sélectionner parmi celles ci-dessous.
                  </span>
                  <br />
                  Nous vous recommandons de sélectionner un{" "}
                  <span className="font-bold">minimum de 4 annonces.</span> Pour
                  une meilleur mise en page, un{" "}
                  <span className="font-bold">multiple de 4</span> annonces.
                  <br />
                  Validez ensuite votre sélection.
                </Paragraph>
                <div className="h-[calc(100vh-500px)] overflow-y-scroll flex flex-col gap-2">
                  {listItem.map((item, index) => {
                    return (
                      <EstimationCard select={select} setSelect={setSelect} />
                    );
                  })}
                </div>
              </div>
            )
          )}
          <div className="flex-1 w-full p-1 lg:p-3 self-end flex flex-col justify-end">
            <div
              className={clsx(
                "flex gap-3",
                id === 6
                  ? "justify-center lg:justify-between flex-wrap"
                  : "justify-between flex-nowrap"
              )}
            >
              <SecondaryButton
                onClick={() => {
                  id > 0 &&
                    setId((prev) => {
                      return prev - 1;
                    });
                }}
                data={{
                  name: (
                    <div className="text-primary flex items-center">
                      {id === 0 ? (
                        "Créer un nouveau négociateur"
                      ) : (
                        <div className="flex items-center">
                          {" "}
                          <BackIcon color={"#ED7A37"} /> Précédent
                        </div>
                      )}
                    </div>
                  ),
                  primary: true,
                }}
              />
              <div className="flex-1 flex justify-end items-center">
                {select && (
                  <div className="bg-slate-500 font-bold px-2 py-2 text-sm flex items-center rounded-lg">
                    1 annonce sélectionnée
                  </div>
                )}
              </div>
              <PrimaryButton
                onClick={() => {
                  id < 7 &&
                    setId((prev) => {
                      return prev + 1;
                    });
                }}
                data={{
                  name: (
                    <div className="flex items-center px-3 lg:px-5 gap-3">
                      {" "}
                      {id === 6 ? "" : id === 7 ? "" : "Suivant"}{" "}
                      {id === 6 ? (
                        <TickIcon />
                      ) : id === 7 ? (
                        <TickIcon />
                      ) : (
                        <svg
                          width="11"
                          height="18"
                          viewBox="0 0 11 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.463835 2.53119L6.81068 8.8919L0.463834 15.2526L2.41778 17.2065L10.7324 8.8919L2.41778 0.577253L0.463835 2.53119Z"
                            fill="white"
                          />
                        </svg>
                      )}
                      {id === 6
                        ? "Sélectionner les annonces comparables"
                        : id === 7 && "Générer le PDF"}
                    </div>
                  ),
                  primary: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
