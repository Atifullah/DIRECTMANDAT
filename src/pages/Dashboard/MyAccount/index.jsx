import React from "react";
import { NavLink } from "react-router-dom";
import {
  CalenderIcon,
  HeadSubtitle,
  HeadTitle,
  Paragraph,
  PrimaryButton,
  ProfileIcon,
} from "src/components";
import { Layout } from "src/layout";

const MyAccount = () => {
  return (
    <Layout>
      <HeadTitle className={"text-start"}>Mon compte</HeadTitle>
      <div className="flex flex-col gap-4 w-full items-center">
        <div className="flex flex-col gap-5 justify-between bg-[#F0F0F0] w-full self-end text-start rounded-lg py-4 px-3">
          <div className="flex gap-2 items-center justify-start">
            <ProfileIcon />
            <HeadSubtitle className={"!font-bold"}>
              Configuration du profil
            </HeadSubtitle>
          </div>
          <Paragraph>
            Renseigner les informations de votre profil, de votre agence,
            configurer vos horaires d’ouveture et faites une présentation rapide
            de vos services.
          </Paragraph>
          <div className="flex justify-center">
            <NavLink to={"/agency-setup"}>
              <PrimaryButton
                className={"self-center"}
                primary={true}
                data={{
                  name: "Configurer mon profil",
                  primary: true,
                }}
              />
            </NavLink>
          </div>
        </div>
        <div className="grid h-full md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
          <div className="flex h-full flex-col gap-5 justify-between bg-[#F0F0F0] w-full self-end text-start rounded-lg py-4 px-3">
            <div className="flex gap-2 items-center justify-start">
              <CalenderIcon />
              <HeadSubtitle className={"!font-bold"}>
                Disponibilités
              </HeadSubtitle>
            </div>
            <Paragraph>
              Renseigner vos disponibiités / celle de votre agence.
            </Paragraph>
            <NavLink to={"/disponsibilities"}>
              <PrimaryButton
                className="w-full"
                primary={true}
                data={{
                  name: "Configurer mes disponibilités",
                  primary: true,
                }}
              />
            </NavLink>
          </div>
          <div className="flex h-full flex-col gap-5 justify-between bg-[#F0F0F0] w-full self-end text-start rounded-lg py-4 px-3">
            <div className="flex gap-2 items-center justify-start">
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_626_115583)">
                  <mask
                    id="mask0_626_115583"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="-1"
                    width="30"
                    height="30"
                  >
                    <path
                      d="M29.134 -0.00244141H0.333984V28.7976H29.134V-0.00244141Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_626_115583)">
                    <path
                      d="M17.1348 2.39893H7.53477C6.21477 2.39893 5.14677 3.47893 5.14677 4.79893L5.13477 23.9989C5.13477 25.3189 6.20277 26.3989 7.52277 26.3989H21.9348C23.2548 26.3989 24.3348 25.3189 24.3348 23.9989V9.59893L17.1348 2.39893ZM19.5348 21.5989H9.93477V19.1989H19.5348V21.5989ZM19.5348 16.7989H9.93477V14.3989H19.5348V16.7989ZM15.9348 10.7989V4.19893L22.5348 10.7989H15.9348Z"
                      fill="#323232"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_626_115583">
                    <rect
                      width="28.8"
                      height="28.8"
                      fill="white"
                      transform="translate(0.333984)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <HeadSubtitle className={"!font-bold"}>Factures</HeadSubtitle>
            </div>
            <Paragraph>Consulter vos factures.</Paragraph>
            <NavLink to={"/invoices"} className={"w-full"}>
              <PrimaryButton
                className="w-full"
                primary={true}
                data={{
                  name: "Consulter mes factures",
                  primary: true,
                }}
              />
            </NavLink>
          </div>
          <div className="flex h-full flex-col gap-5 justify-between bg-[#F0F0F0] w-full self-end text-start rounded-lg py-4 px-3">
            <div className="flex gap-2 items-center justify-start">
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_626_115595)">
                  <mask
                    id="mask0_626_115595"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="-1"
                    width="30"
                    height="30"
                  >
                    <path
                      d="M29.466 -0.00244141H0.666016V28.7976H29.466V-0.00244141Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_626_115595)">
                    <path
                      d="M28.2652 9.59824C28.2652 10.9182 27.1852 11.9982 25.8652 11.9982C25.6492 11.9982 25.4452 11.9742 25.2532 11.9142L20.9812 16.1742C21.0412 16.3662 21.0652 16.5822 21.0652 16.7982C21.0652 18.1182 19.9852 19.1982 18.6652 19.1982C17.3452 19.1982 16.2652 18.1182 16.2652 16.7982C16.2652 16.5822 16.2892 16.3662 16.3492 16.1742L13.2892 13.1142C13.0972 13.1742 12.8812 13.1982 12.6652 13.1982C12.4492 13.1982 12.2332 13.1742 12.0412 13.1142L6.58123 18.5862C6.64123 18.7782 6.66523 18.9822 6.66523 19.1982C6.66523 20.5182 5.58523 21.5982 4.26523 21.5982C2.94523 21.5982 1.86523 20.5182 1.86523 19.1982C1.86523 17.8782 2.94523 16.7982 4.26523 16.7982C4.48123 16.7982 4.68523 16.8222 4.87723 16.8822L10.3492 11.4222C10.2892 11.2302 10.2652 11.0142 10.2652 10.7982C10.2652 9.47824 11.3452 8.39824 12.6652 8.39824C13.9852 8.39824 15.0652 9.47824 15.0652 10.7982C15.0652 11.0142 15.0412 11.2302 14.9812 11.4222L18.0412 14.4822C18.2332 14.4222 18.4492 14.3982 18.6652 14.3982C18.8812 14.3982 19.0972 14.4222 19.2892 14.4822L23.5492 10.2102C23.4892 10.0182 23.4652 9.81424 23.4652 9.59824C23.4652 8.27824 24.5452 7.19824 25.8652 7.19824C27.1852 7.19824 28.2652 8.27824 28.2652 9.59824Z"
                      fill="#323232"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_626_115595">
                    <rect
                      width="28.8"
                      height="28.8"
                      fill="white"
                      transform="translate(0.666016)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <HeadSubtitle className={"!font-bold"}>Statistiques</HeadSubtitle>
            </div>
            <Paragraph>
              Consulter vos statistiques ou celles de vos collaborateurs.
            </Paragraph>
            <NavLink to={"/statistics"}>
              <PrimaryButton
                className="w-full"
                primary={true}
                data={{
                  name: "Consulter les statistiques",
                  primary: true,
                }}
              />
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-between bg-[#F0F0F0] w-full self-end text-start rounded-lg py-4 px-3">
          <div className="flex gap-2 items-center justify-start">
            <ProfileIcon />
            <HeadSubtitle className={"!font-bold"}>
              Gestion des utilisateurs
            </HeadSubtitle>
          </div>
          <Paragraph>
            Gérer les utilisateurs de votre agence en toute sérénité. Vous
            pouvez configurer leurs accès ainsi que les désactiver / supprimer
            si nécessaire.
          </Paragraph>
          <div className="w-full flex justify-center">
            <NavLink to={"/user-management"}>
              <PrimaryButton
                className={"self-center"}
                primary={true}
                data={{
                  name: "Gérer les utilisateurs",
                  primary: true,
                }}
              />
            </NavLink>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <NavLink to={"/"}>
            <PrimaryButton
              className={"self-center !bg-[#E33535]"}
              primary={true}
              data={{
                name: (
                  <div
                    onClick={() => {
                      localStorage.removeItem("ses");
                    }}
                    className="flex items-center gap-3"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_626_115615"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      >
                        <path
                          d="M29.3996 0.600586H0.599609V29.4006H29.3996V0.600586Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_626_115615)">
                        <path
                          d="M16.1992 4.20117H13.7992V16.2012H16.1992V4.20117ZM21.9952 6.80517L20.2912 8.50917C22.1872 10.0332 23.3992 12.3732 23.3992 15.0012C23.3992 19.6452 19.6432 23.4012 14.9992 23.4012C10.3552 23.4012 6.59922 19.6452 6.59922 15.0012C6.59922 12.3732 7.81122 10.0332 9.69522 8.49717L8.00322 6.80517C5.67522 8.78517 4.19922 11.7132 4.19922 15.0012C4.19922 20.9652 9.03522 25.8012 14.9992 25.8012C20.9632 25.8012 25.7992 20.9652 25.7992 15.0012C25.7992 11.7132 24.3232 8.78517 21.9952 6.80517Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    Déconnexion
                  </div>
                ),
              }}
            />
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default MyAccount;
