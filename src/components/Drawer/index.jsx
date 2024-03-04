import React from "react";
import Drawer from "@mui/material/Drawer";
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
  SettingIcon,
  TickIcon,
} from "..";

export const FilterBox = ({ open, onClose }) => {
  return (
    <Drawer
      anchor={"right"}
      open={open}
      onClose={() => {
        onClose();
      }}
    >
      <div className="py-7 w-screen lg:w-[700px] flex flex-col gap-10 px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <HeadTitle>Tous les filtres</HeadTitle>
          <div onClick={onClose} className="font-bold block lg:hidden">
            X
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2">
          <HeadSubtitle>Plage de date</HeadSubtitle>
          <CheckInput label={"Toutes les annonces"} />
          <CheckInput label={"Depuis la dernière visite"} />
          <CheckInput label={"Dernières annonces reçues"} />
          <CheckInput label={"Annonces datées d’aujourd’hui"} />
          <CheckInput label={"Annonces de cette semaine"} />
          <CheckInput label={"Annonces des 7 derniers jours"} />
          <CheckInput label={"Annonces du mois"} />
          <CheckInput label={"Annonces des 30 derniers jours"} />
          <div className="flex items-center justify-start  flex-wrap lg:flex-nowrap whitespace-nowrap font-bold">
            <div>
              <CheckInput label={"Annonces entre le "} />
            </div>
            <div className="pl-4  flex gap-2 lg:gap-1 ">
              <div className="relative ">
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
        <Divider />
        <div className="flex flex-col gap-2 ">
          <HeadSubtitle>Type de bien</HeadSubtitle>
          <div className="grid grid-cols-3 gap-2 ">
            <CheckInput label={"Maison"} />
            <CheckInput label={"Terrain"} />
            <CheckInput label={"Immeuble"} />
            <CheckInput label={"Appartement"} />
            <CheckInput label={"Commerce"} />
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2 ">
          <HeadSubtitle>Transaction</HeadSubtitle>
          <div className="grid grid-cols-1 gap-2 ">
            <CheckInput label={"Vente"} />
            <CheckInput label={"Location"} />
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2 ">
          <HeadSubtitle>Trier par</HeadSubtitle>
          <div className="grid grid-cols-2 gap-2 ">
            <CheckInput label={"Nouvelles annonces"} />
            <CheckInput label={"Surface"} />
            <CheckInput label={"Code postal"} />
            <CheckInput label={"Type"} />
            <CheckInput label={"Date"} />
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2 ">
          <HeadSubtitle>Zone géographique</HeadSubtitle>
          <div className="flex w-full gap-2 items-center flex-wrap lg:flex-nowrap">
            <div className="flex gap-2 flex-wrap lg:flex-nowrap">
              <InputField name={"Ville"} placeholder="00" type="number" />
              <InputField name={"Code postal"} placeholder="00" type="number" />
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
        <Divider />
        <div className="flex flex-col gap-2 ">
          <HeadSubtitle>Fiches attribuées à</HeadSubtitle>
          <SecondarySelectBox
            option={["Tout le monde", "Home", "Apartment", "Loft", "Trade"]}
          />
        </div>
        <Divider />
        <div className="flex flex-col gap-2 ">
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
        <Divider />
        <div className="flex flex-col gap-2 ">
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
        <Divider />
        <div className="flex flex-col gap-2 ">
          <HeadSubtitle>Prix</HeadSubtitle>
          <div className="flex gap-2 w-full flex-wrap lg:flex-nowrap">
            <SecondaryInputField icon={"$"} name={"Minimum"} placeholder="00" />
            <SecondaryInputField icon={"$"} name={"Maximum"} placeholder="00" />
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2 ">
          <HeadSubtitle>Mot-clé</HeadSubtitle>
          <div className="flex  gap-2 w-full">
            <InputField
              className="w-full"
              placeholder="Mot-clé"
              name={"Saisir 4 caractères minimum."}
            />
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2 ">
          <HeadSubtitle>Tri</HeadSubtitle>
          <div className="grid grid-cols-1 gap-2 ">
            <RadioInput label={"Pertinence"} />
            <RadioInput label={"Plus récentes"} />
            <RadioInput label={"Plus anciennes"} />
            <RadioInput label={"Prix croissants"} />
            <RadioInput label={"Prix décroissants"} />
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <HeadSubtitle>Pièces</HeadSubtitle>
          <div className="flex justify-around gap-2">
            <div className="p-2 border rounded-lg font-bold text-xl w-full text-center">
              1
            </div>
            <div className="p-2 border rounded-lg font-bold text-xl w-full text-center">
              2
            </div>
            <div className="p-2 border rounded-lg font-bold text-xl w-full text-center">
              3
            </div>
            <div className="p-2 border rounded-lg font-bold text-xl w-full text-center">
              4
            </div>
            <div className="p-2 border rounded-lg font-bold text-xl w-full text-center">
              5
            </div>
            <div className="p-2 border rounded-lg font-bold text-xl w-full text-center">
              6
            </div>
            <div className="p-2 border rounded-lg font-bold text-xl w-full text-center">
              7
            </div>
            <div className="p-2 border rounded-lg font-bold text-xl w-full text-center">
              8
            </div>
            <div className="p-2 border rounded-lg font-bold text-xl w-full">
              9+
            </div>
          </div>
          <CheckInput label={"Annonces sans nombre de pièces précisé"} />
        </div>
        <Divider />
        <div className="flex flex-col gap-2 ">
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
        <Divider />
        <div className="flex flex-col gap-2 ">
          <HeadSubtitle>AAnnonces avec adresse</HeadSubtitle>
          <div className="flex flex-col">
            <CheckInput label={"Annonces avec une adresse uniquement"} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-5">
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
          <SecondaryButton
            primary={true}
            data={{
              name: (
                <div className="flex items-center gap-2 text-primary">
                  <SettingIcon />
                  Annuler
                </div>
              ),
              primary: true,
            }}
          />
        </div>
      </div>
    </Drawer>
  );
};
