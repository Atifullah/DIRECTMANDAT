import React from "react";
import { useState } from "react";
import {
  DeleteIcon,
  HeadTitle,
  Modal,
  Paragraph,
  PrimaryButton,
  ProfileIcon,
  SecondaryButton,
  SecondaryInputField,
  SelectBox,
  SelectedIcon,
  TickIcon,
  Tiny,
  Title,
  UploadIcon,
  WorkBagIcon,
} from "src/components";
import { Layout } from "src/layout";

const EditProfile = () => {
  const [selectedPermission, setSelectedPermission] = useState([
    {
      data: 1,
      isSelected: false,
    },
    {
      data: 2,
      isSelected: false,
    },
    {
      data: 3,
      isSelected: false,
    },
    {
      data: 4,
      isSelected: false,
    },
  ]);

  const [deactive, setDeactive] = useState(false);
  return (
    <Layout>
      <Modal
        className={"flex flex-col gap-4 items-center text-center"}
        onClose={() => setDeactive(false)}
        open={deactive}
      >
        <svg
          width="68"
          height="67"
          viewBox="0 0 68 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="33.9991"
            cy="33.792"
            rx="33.21"
            ry="33.2099"
            fill="#ED7A37"
          />
          <mask
            id="mask0_654_144297"
            maskUnits="userSpaceOnUse"
            x="13"
            y="13"
            width="42"
            height="42"
          >
            <rect x="13" y="13" width="42" height="42" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_654_144297)">
            <path
              d="M47.6043 52.5932L43.0105 47.9994H19.998V43.0994C19.998 42.1077 20.2533 41.1963 20.7637 40.365C21.2741 39.5338 21.9522 38.8994 22.798 38.4619C24.1105 37.7911 25.4449 37.2515 26.8012 36.8432C28.1574 36.4348 29.5355 36.1286 30.9355 35.9244L15.4043 20.3932L17.898 17.8994L50.098 50.0994L47.6043 52.5932ZM23.498 44.4994H39.5105L34.2605 39.2494H33.998C32.3647 39.2494 30.746 39.4463 29.1418 39.84C27.5376 40.2338 25.948 40.8244 24.373 41.6119C24.1105 41.7577 23.8991 41.9619 23.7387 42.2244C23.5783 42.4869 23.498 42.7786 23.498 43.0994V44.4994ZM45.198 38.4619C46.0439 38.8702 46.7147 39.49 47.2105 40.3213C47.7064 41.1525 47.9689 42.0494 47.998 43.0119L42.1355 37.1494C42.6605 37.3536 43.1783 37.5577 43.6887 37.7619C44.1991 37.9661 44.7022 38.1994 45.198 38.4619ZM37.848 32.8619L35.2668 30.2807C35.9376 30.0182 36.4772 29.588 36.8855 28.99C37.2939 28.3921 37.498 27.7286 37.498 26.9994C37.498 26.0369 37.1553 25.213 36.4699 24.5275C35.7845 23.8421 34.9605 23.4994 33.998 23.4994C33.2689 23.4994 32.6053 23.7036 32.0074 24.1119C31.4095 24.5202 30.9793 25.0598 30.7168 25.7307L28.1355 23.1494C28.8064 22.1577 29.6522 21.3848 30.673 20.8307C31.6939 20.2765 32.8022 19.9994 33.998 19.9994C35.923 19.9994 37.571 20.6848 38.9418 22.0557C40.3126 23.4265 40.998 25.0744 40.998 26.9994C40.998 28.1952 40.721 29.3036 40.1668 30.3244C39.6126 31.3452 38.8397 32.1911 37.848 32.8619Z"
              fill="white"
            />
          </g>
        </svg>
        <Title>
          Si vous désactivez cet utilisateur, vous devez réattribuer ses
          annonces à un autre utilisateur
        </Title>
        <SelectBox
          option={[
            "Choisir un utilisateur ...",
            "Julie POUPAT",
            "Olivier ROUX",
          ]}
        />
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
                  <ProfileIcon color={"white"} /> Désactiver cet utilisateur
                </div>
              ),
              primary: true,
            }}
          />
        </div>
      </Modal>
      <HeadTitle className={"text-start"}>Gestion des utilisateurs</HeadTitle>
      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-10 lg:gap-0">
        <div className="shadow-xl w-full lg:w-[67%] bg-[#F6F6F6] rounded-xl p-4 flex flex-col gap-6 items-start">
          <HeadTitle>Modifier un utilisateur</HeadTitle>
          <div className="flex flex-col-reverse gap-5 lg:flex-row justify-between w-full h-full">
            <div className="flex flex-col gap-2 w-full lg:w-[50%] h-full">
              {" "}
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
              <SecondaryInputField
                type="password"
                className={"flex flex-row-reverse gap-2 py-1"}
                icon={<WorkBagIcon />}
                placeholder={"Mot de passe"}
                name={"Mot de passe"}
              />
              <SecondaryInputField
                className={"flex flex-row-reverse gap-2 py-1"}
                icon={"@"}
                placeholder={"olivier@directannonces.com"}
                name={"Email"}
              />
              <div className="w-full flex flex-1 items-center justify-center gap-5">
                <PrimaryButton
                  primary={true}
                  data={{
                    name: (
                      <div className="flex gap-2 items-center">
                        <TickIcon />
                        Enregistrer
                      </div>
                    ),
                    primary: true,
                  }}
                />
                <SecondaryButton
                  primary={true}
                  data={{
                    name: (
                      <div className="flex items-center gap-2 whitespace-nowrap text-primary">
                        X Annuler
                      </div>
                    ),
                    primary: true,
                  }}
                />
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col items-center justify-around">
              <div className="rounded-full border border-primary h-[200px] w-[200px] relative flex justify-center items-center">
                <div className="bg-black text-white flex justify-center items-center h-[90%] w-[90%] text-4xl rounded-full">
                  PICTURE
                </div>
                <div className="top-3 right-3 bg-primary rounded-full p-2 absolute">
                  <UploadIcon />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <SecondaryButton
                  primary={true}
                  data={{
                    name: (
                      <div className="flex items-center gap-2 text-primary">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_626_114438"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="25"
                            height="25"
                          >
                            <rect
                              x="0.599609"
                              y="0.200195"
                              width="24"
                              height="24"
                              fill="#D9D9D9"
                            />
                          </mask>
                          <g mask="url(#mask0_626_114438)">
                            <path
                              d="M20.3746 22.825L17.7496 20.2H4.59961V17.4C4.59961 16.8333 4.74544 16.3125 5.03711 15.8375C5.32878 15.3625 5.71628 15 6.19961 14.75C6.94961 14.3667 7.71211 14.0583 8.48711 13.825C9.26211 13.5917 10.0496 13.4167 10.8496 13.3L1.97461 4.425L3.39961 3L21.7996 21.4L20.3746 22.825ZM6.59961 18.2H15.7496L12.7496 15.2H12.5996C11.6663 15.2 10.7413 15.3125 9.82461 15.5375C8.90794 15.7625 7.99961 16.1 7.09961 16.55C6.94961 16.6333 6.82878 16.75 6.73711 16.9C6.64544 17.05 6.59961 17.2167 6.59961 17.4V18.2ZM18.9996 14.75C19.4829 14.9833 19.8663 15.3375 20.1496 15.8125C20.4329 16.2875 20.5829 16.8 20.5996 17.35L17.2496 14C17.5496 14.1167 17.8454 14.2333 18.1371 14.35C18.4288 14.4667 18.7163 14.6 18.9996 14.75ZM14.7996 11.55L13.3246 10.075C13.7079 9.925 14.0163 9.67917 14.2496 9.3375C14.4829 8.99583 14.5996 8.61667 14.5996 8.2C14.5996 7.65 14.4038 7.17917 14.0121 6.7875C13.6204 6.39583 13.1496 6.2 12.5996 6.2C12.1829 6.2 11.8038 6.31667 11.4621 6.55C11.1204 6.78333 10.8746 7.09167 10.7246 7.475L9.24961 6C9.63294 5.43333 10.1163 4.99167 10.6996 4.675C11.2829 4.35833 11.9163 4.2 12.5996 4.2C13.6996 4.2 14.6413 4.59167 15.4246 5.375C16.2079 6.15833 16.5996 7.1 16.5996 8.2C16.5996 8.88333 16.4413 9.51667 16.1246 10.1C15.8079 10.6833 15.3663 11.1667 14.7996 11.55Z"
                              fill="#ED7A37"
                            />
                          </g>
                        </svg>
                        Désactiver cet utilisateur
                      </div>
                    ),
                    primary: true,
                  }}
                />
                <PrimaryButton
                  onClick={() => {
                    setDeactive(true);
                  }}
                  primary={true}
                  data={{
                    name: (
                      <div className="flex gap-2 items-center">
                        <DeleteIcon />
                        Supprimer cet utilisateur
                      </div>
                    ),
                  }}
                  className="bg-[#E33535]"
                />
                <Paragraph>
                  Attention ! Cette action est{" "}
                  <span className="text-[#E33535]">irréversible..</span>
                </Paragraph>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="shadow-xl h-[60vh] w-full lg:w-[30%] bg-[#F6F6F6] rounded-xl p-4 flex flex-col gap-6 items-start">
          <HeadTitle>Permissions</HeadTitle>
          <div className="overflow-y-scroll w-full flex flex-col gap-2">
            {selectedPermission.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-3 w-full">
                  <div
                    onClick={() =>
                      setSelectedPermission((prevState) =>
                        prevState.map((e) =>
                          e.data === item.data
                            ? { ...item, isSelected: !item.isSelected }
                            : e
                        )
                      )
                    }
                  >
                    {!item.isSelected ? (
                      <SelectedIcon />
                    ) : (
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 34 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1.00977"
                          width="32"
                          height="32"
                          rx="7"
                          stroke="#B3B3B3"
                          stroke-width="2"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex justify-between w-full self-end text-start  p-2">
                    <div className="flex flex-col gap-2 justify-start">
                      <Paragraph className={"!font-bold !text-black"}>
                        Dispatcher
                      </Paragraph>
                      <Tiny>
                        Donne à l'utilisateur le droit d'attribuer, de
                        reattribuer ou de voir les fiches attribuées aux autres
                        utilisateurs
                      </Tiny>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
