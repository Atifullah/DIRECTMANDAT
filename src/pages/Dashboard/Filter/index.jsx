import React from "react";
import {
  CheckInput,
  Divider,
  HeadSubtitle,
  HeadTitle,
  InputField,
  PrimaryButton,
  RadioInput,
  SecondaryButton,
  SecondaryInputField,
  SecondarySelectBox,
  TickIcon,
} from "src/components";
import { Layout } from "src/layout";

function EditFilter() {
  return (
    <Layout>
      <HeadTitle className={"!text-start"}>
        Créer une recherche enregistrée
      </HeadTitle>
      <div className="bg-[#F0F0F0] relative py-7 w-full flex flex-col mt-4 lg:mt-10 gap-10 px-4 lg:px-8">
        <div className="flex flex-col justify-between text-start">
          <HeadTitle>Nom de la recherche</HeadTitle>
          <InputField placeholder="Maison en Gironde" />
        </div>
        <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2 flex-1 items-start">
            <HeadSubtitle>Plage de date</HeadSubtitle>
            <CheckInput label={"Toutes les annonces"} />
            <CheckInput label={"Depuis la dernière visite"} />
            <CheckInput label={"Dernières annonces reçues"} />
            <CheckInput label={"Annonces datées d’aujourd’hui"} />
            <CheckInput label={"Annonces de cette semaine"} />
            <CheckInput label={"Annonces des 7 derniers jours"} />
            <CheckInput label={"Annonces du mois"} />
            <CheckInput label={"Annonces des 30 derniers jours"} />
            <div className="flex gap-1 items-center flex-wrap lg:flex-nowrap whitespace-nowrap font-bold">
              <CheckInput label={"Annonces entre le "} />
              <div className="pl-4 lg:pl-0 w-full flex gap-2 lg:gap-1">
                <div className="relative">
                  <InputField
                    type="date"
                    defaultValue={"2020-06-06"}
                    className={"!w-auto"}
                  />
                </div>
                et le
                <div className="relative">
                  <InputField
                    type="date"
                    defaultValue={"2020-06-06"}
                    className={"!w-auto"}
                  />
                </div>
              </div>
            </div>
          </div>
          <svg
            width="1"
            className="hidden lg:block"
            height="376"
            viewBox="0 0 1 376"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="2.18557e-08"
              x2="0.499984"
              y2="375.467"
              stroke="#828282"
            />
          </svg>
          <div className="flex flex-col items-start flex-1 gap-2 ">
            <HeadSubtitle>Type de bien</HeadSubtitle>
            <div className="grid grid-cols-3 gap-2 ">
              <CheckInput label={"Maison"} />
              <CheckInput label={"Terrain"} />
              <CheckInput label={"Immeuble"} />
              <CheckInput label={"Appartement"} />
              <CheckInput label={"Commerce"} />
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2 flex-1 items-start ">
            <HeadSubtitle>Transaction</HeadSubtitle>
            <div className="grid grid-cols-1 gap-2 ">
              <CheckInput label={"Vente"} />
              <CheckInput label={"Location"} />
            </div>
          </div>
          <svg
            width="1"
            className="hidden lg:block"
            height="184"
            viewBox="0 0 1 184"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.46875"
              x2="0.5"
              y2="183.869"
              stroke="#828282"
            />
          </svg>
          <div className="flex flex-col gap-2 flex-1 items-start ">
            <HeadSubtitle>Trier par</HeadSubtitle>
            <div className="grid grid-cols-2 gap-2 ">
              <CheckInput label={"Nouvelles annonces"} />
              <CheckInput label={"Surface"} />
              <CheckInput label={"Code postal"} />
              <CheckInput label={"Type"} />
              <CheckInput label={"Date"} />
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2 flex-1 items-start ">
            <HeadSubtitle>Zone géographique</HeadSubtitle>
            <div className="flex w-full gap-2 items-center flex-wrap lg:flex-nowrap">
              <div className="flex gap-2 flex-wrap  lg:flex-nowrap">
                <InputField name={"Ville"} placeholder="00" type="number" />
                <InputField
                  name={"Code postal"}
                  placeholder="00"
                  type="number"
                />
              </div>
              <div className="flex gap-2 text-white font-bold">
                <div className=" w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center">
                  -
                </div>
                <div className=" w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center">
                  +
                </div>
              </div>
            </div>
          </div>
          <svg
            width="1"
            className="hidden lg:block"
            height="102"
            viewBox="0 0 1 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.867188"
              x2="0.5"
              y2="101.667"
              stroke="#828282"
            />
          </svg>
          <div className="flex flex-col gap-2 flex-1 items-start ">
            <HeadSubtitle>Fiches attribuées à</HeadSubtitle>
            <SecondarySelectBox
              option={["Tout le monde", "Home", "Apartment", "Loft", "Trade"]}
            />
          </div>
        </div>
        <Divider />
        <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2 flex-1 items-start ">
            <HeadSubtitle>Surface habitable</HeadSubtitle>
            <div className="flex gap-2 w-full flex-wrap lg:flex-nowrap">
              <SecondaryInputField
                icon={"m2"}
                name={"Minimum"}
                placeholder="00"
              />
              <SecondaryInputField
                icon={"m2"}
                name={"Maximum"}
                placeholder="00"
              />
            </div>
          </div>
          <svg
            width="1"
            className="hidden lg:block"
            height="102"
            viewBox="0 0 1 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.667969"
              x2="0.5"
              y2="101.468"
              stroke="#828282"
            />
          </svg>
          <div className="flex flex-col gap-2 flex-1 items-start ">
            <HeadSubtitle>Surface du terrain</HeadSubtitle>
            <div className="flex gap-2 w-full flex-wrap lg:flex-nowrap">
              <SecondaryInputField
                icon={"m2"}
                name={"Minimum"}
                placeholder="00"
              />
              <SecondaryInputField
                icon={"m2"}
                name={"Maximum"}
                placeholder="00"
              />
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2 flex-1 items-start">
            <HeadSubtitle>Prix</HeadSubtitle>
            <div className="flex gap-2 w-full flex-wrap lg:flex-nowrap">
              <SecondaryInputField
                icon={"$"}
                name={"Minimum"}
                placeholder="00"
              />
              <SecondaryInputField
                icon={"$"}
                name={"Maximum"}
                placeholder="00"
              />
            </div>
          </div>
          <svg
            width="1"
            className="hidden lg:block"
            height="102"
            viewBox="0 0 1 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.46875"
              x2="0.5"
              y2="101.269"
              stroke="#828282"
            />
          </svg>
          <div className="flex flex-col gap-2 flex-1 items-start">
            <HeadSubtitle>Mot-clé</HeadSubtitle>
            <div className="flex  gap-2 w-full">
              <InputField
                className="w-full"
                placeholder="Mot-clé"
                name={"Saisir 4 caractères minimum."}
              />
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2 flex-1 items-start">
            <HeadSubtitle>Tri</HeadSubtitle>
            <div className="grid grid-cols-1 gap-2 ">
              <RadioInput label={"Pertinence"} />
              <RadioInput label={"Plus récentes"} />
              <RadioInput label={"Plus anciennes"} />
              <RadioInput label={"Prix croissants"} />
              <RadioInput label={"Prix décroissants"} />
            </div>
          </div>
          <svg
            width="1"
            className="hidden lg:block"
            height="233"
            viewBox="0 0 1 233"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.265625"
              x2="0.5"
              y2="232.586"
              stroke="#828282"
            />
          </svg>
          <div className="flex flex-col gap-2 flex-1 items-start">
            <HeadSubtitle>Pièces</HeadSubtitle>
            <div className="flex flex-wrap gap-2">
              <div className="p-2 border rounded-lg font-bold text-xl text-center">
                1
              </div>
              <div className="p-2 border rounded-lg font-bold text-xl text-center">
                2
              </div>
              <div className="p-2 border rounded-lg font-bold text-xl text-center">
                3
              </div>
              <div className="p-2 border rounded-lg font-bold text-xl text-center">
                4
              </div>
              <div className="p-2 border rounded-lg font-bold text-xl text-center">
                5
              </div>
              <div className="p-2 border rounded-lg font-bold text-xl text-center">
                6
              </div>
              <div className="p-2 border rounded-lg font-bold text-xl text-center">
                7
              </div>
              <div className="p-2 border rounded-lg font-bold text-xl text-center">
                8
              </div>
              <div className="p-2 border rounded-lg font-bold text-xl">9+</div>
            </div>
            <CheckInput label={"Annonces sans nombre de pièces précisé"} />
          </div>
        </div>
        <Divider />
        <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2 flex-1 items-start">
            <HeadSubtitle>Annonces avec téléphone</HeadSubtitle>
            <div className="flex flex-col">
              <CheckInput
                label={"Annonces avec un numéro de téléphone uniquement"}
              />
              <CheckInput
                label={"Annonces avec démarchage autorisé uniquement"}
              />
              <CheckInput label={"Annonces avec statut bloctel en attente"} />
            </div>
          </div>
          <svg
            width="1"
            className="hidden lg:block"
            height="145"
            viewBox="0 0 1 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.585938"
              x2="0.5"
              y2="144.586"
              stroke="#828282"
            />
          </svg>
          <div className="flex flex-col gap-2 flex-1 items-start">
            <HeadSubtitle>Annonces avec adresse</HeadSubtitle>
            <div className="flex flex-col ">
              <CheckInput label={"Annonces avec une adresse uniquement"} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-5">
          <SecondaryButton
            primary={true}
            data={{
              name: (
                <div className="flex items-center gap-2 text-primary">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1745_71678)">
                      <mask
                        id="mask0_1745_71678"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="19"
                        height="19"
                      >
                        <path
                          d="M18.4986 0.632812H0.501953V18.6295H18.4986V0.632812Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1745_71678)">
                        <path
                          d="M14.2242 4.91433C13.9318 4.62189 13.4594 4.62189 13.1669 4.91433L9.5001 8.57368L5.83329 4.90683C5.54084 4.61439 5.06842 4.61439 4.77598 4.90683C4.48353 5.19928 4.48353 5.67169 4.77598 5.96414L8.44279 9.63099L4.77598 13.2978C4.48353 13.5903 4.48353 14.0627 4.77598 14.3551C5.06842 14.6476 5.54084 14.6476 5.83329 14.3551L9.5001 10.6883L13.1669 14.3551C13.4594 14.6476 13.9318 14.6476 14.2242 14.3551C14.5167 14.0627 14.5167 13.5903 14.2242 13.2978L10.5574 9.63099L14.2242 5.96414C14.5092 5.67919 14.5092 5.19928 14.2242 4.91433Z"
                          fill="#ED7A37"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1745_71678">
                        <rect
                          width="17.9967"
                          height="17.9967"
                          fill="white"
                          transform="translate(0.50293 0.628906)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Annuler
                </div>
              ),
              primary: true,
            }}
          />
          <PrimaryButton
            primary={true}
            data={{
              name: (
                <div className="flex gap-2 items-center">
                  <TickIcon />
                  Enregistrer la recherche
                </div>
              ),
              primary: true,
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
export default EditFilter;
