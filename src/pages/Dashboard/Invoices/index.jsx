import React from "react";
import {
  HeadTitle,
  InputField,
  Paragraph,
  RadioButton,
  Subtitle,
  TopBottomIcon,
  UploadIcon,
} from "src/components";
import { Layout } from "src/layout";

export const Invoices = () => {
  const filterItems = [
    {
      icon: "#",
      title: "Numéro",
    },
    {
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_626_113679"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="25"
            height="24"
          >
            <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_626_113679)">
            <path
              d="M6.5 22C5.66667 22 4.95833 21.7083 4.375 21.125C3.79167 20.5417 3.5 19.8333 3.5 19V16H6.5V2L8 3.5L9.5 2L11 3.5L12.5 2L14 3.5L15.5 2L17 3.5L18.5 2L20 3.5L21.5 2V19C21.5 19.8333 21.2083 20.5417 20.625 21.125C20.0417 21.7083 19.3333 22 18.5 22H6.5ZM18.5 20C18.7833 20 19.0208 19.9042 19.2125 19.7125C19.4042 19.5208 19.5 19.2833 19.5 19V5H8.5V16H17.5V19C17.5 19.2833 17.5958 19.5208 17.7875 19.7125C17.9792 19.9042 18.2167 20 18.5 20ZM9.5 9V7H15.5V9H9.5ZM9.5 12V10H15.5V12H9.5ZM17.5 9C17.2167 9 16.9792 8.90417 16.7875 8.7125C16.5958 8.52083 16.5 8.28333 16.5 8C16.5 7.71667 16.5958 7.47917 16.7875 7.2875C16.9792 7.09583 17.2167 7 17.5 7C17.7833 7 18.0208 7.09583 18.2125 7.2875C18.4042 7.47917 18.5 7.71667 18.5 8C18.5 8.28333 18.4042 8.52083 18.2125 8.7125C18.0208 8.90417 17.7833 9 17.5 9ZM17.5 12C17.2167 12 16.9792 11.9042 16.7875 11.7125C16.5958 11.5208 16.5 11.2833 16.5 11C16.5 10.7167 16.5958 10.4792 16.7875 10.2875C16.9792 10.0958 17.2167 10 17.5 10C17.7833 10 18.0208 10.0958 18.2125 10.2875C18.4042 10.4792 18.5 10.7167 18.5 11C18.5 11.2833 18.4042 11.5208 18.2125 11.7125C18.0208 11.9042 17.7833 12 17.5 12ZM6.5 20H15.5V18H5.5V19C5.5 19.2833 5.59583 19.5208 5.7875 19.7125C5.97917 19.9042 6.21667 20 6.5 20Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      ),
      title: "Facture",
    },
    {
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_626_113679"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="25"
            height="24"
          >
            <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_626_113679)">
            <path
              d="M6.5 22C5.66667 22 4.95833 21.7083 4.375 21.125C3.79167 20.5417 3.5 19.8333 3.5 19V16H6.5V2L8 3.5L9.5 2L11 3.5L12.5 2L14 3.5L15.5 2L17 3.5L18.5 2L20 3.5L21.5 2V19C21.5 19.8333 21.2083 20.5417 20.625 21.125C20.0417 21.7083 19.3333 22 18.5 22H6.5ZM18.5 20C18.7833 20 19.0208 19.9042 19.2125 19.7125C19.4042 19.5208 19.5 19.2833 19.5 19V5H8.5V16H17.5V19C17.5 19.2833 17.5958 19.5208 17.7875 19.7125C17.9792 19.9042 18.2167 20 18.5 20ZM9.5 9V7H15.5V9H9.5ZM9.5 12V10H15.5V12H9.5ZM17.5 9C17.2167 9 16.9792 8.90417 16.7875 8.7125C16.5958 8.52083 16.5 8.28333 16.5 8C16.5 7.71667 16.5958 7.47917 16.7875 7.2875C16.9792 7.09583 17.2167 7 17.5 7C17.7833 7 18.0208 7.09583 18.2125 7.2875C18.4042 7.47917 18.5 7.71667 18.5 8C18.5 8.28333 18.4042 8.52083 18.2125 8.7125C18.0208 8.90417 17.7833 9 17.5 9ZM17.5 12C17.2167 12 16.9792 11.9042 16.7875 11.7125C16.5958 11.5208 16.5 11.2833 16.5 11C16.5 10.7167 16.5958 10.4792 16.7875 10.2875C16.9792 10.0958 17.2167 10 17.5 10C17.7833 10 18.0208 10.0958 18.2125 10.2875C18.4042 10.4792 18.5 10.7167 18.5 11C18.5 11.2833 18.4042 11.5208 18.2125 11.7125C18.0208 11.9042 17.7833 12 17.5 12ZM6.5 20H15.5V18H5.5V19C5.5 19.2833 5.59583 19.5208 5.7875 19.7125C5.97917 19.9042 6.21667 20 6.5 20Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      ),
      title: "Prix HT",
    },
    {
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_626_113679"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="25"
            height="24"
          >
            <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_626_113679)">
            <path
              d="M6.5 22C5.66667 22 4.95833 21.7083 4.375 21.125C3.79167 20.5417 3.5 19.8333 3.5 19V16H6.5V2L8 3.5L9.5 2L11 3.5L12.5 2L14 3.5L15.5 2L17 3.5L18.5 2L20 3.5L21.5 2V19C21.5 19.8333 21.2083 20.5417 20.625 21.125C20.0417 21.7083 19.3333 22 18.5 22H6.5ZM18.5 20C18.7833 20 19.0208 19.9042 19.2125 19.7125C19.4042 19.5208 19.5 19.2833 19.5 19V5H8.5V16H17.5V19C17.5 19.2833 17.5958 19.5208 17.7875 19.7125C17.9792 19.9042 18.2167 20 18.5 20ZM9.5 9V7H15.5V9H9.5ZM9.5 12V10H15.5V12H9.5ZM17.5 9C17.2167 9 16.9792 8.90417 16.7875 8.7125C16.5958 8.52083 16.5 8.28333 16.5 8C16.5 7.71667 16.5958 7.47917 16.7875 7.2875C16.9792 7.09583 17.2167 7 17.5 7C17.7833 7 18.0208 7.09583 18.2125 7.2875C18.4042 7.47917 18.5 7.71667 18.5 8C18.5 8.28333 18.4042 8.52083 18.2125 8.7125C18.0208 8.90417 17.7833 9 17.5 9ZM17.5 12C17.2167 12 16.9792 11.9042 16.7875 11.7125C16.5958 11.5208 16.5 11.2833 16.5 11C16.5 10.7167 16.5958 10.4792 16.7875 10.2875C16.9792 10.0958 17.2167 10 17.5 10C17.7833 10 18.0208 10.0958 18.2125 10.2875C18.4042 10.4792 18.5 10.7167 18.5 11C18.5 11.2833 18.4042 11.5208 18.2125 11.7125C18.0208 11.9042 17.7833 12 17.5 12ZM6.5 20H15.5V18H5.5V19C5.5 19.2833 5.59583 19.5208 5.7875 19.7125C5.97917 19.9042 6.21667 20 6.5 20Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      ),
      title: "Prix TTC",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_626_113712"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_626_113712)">
            <path
              d="M11 17H7C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H11V9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H13V7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H13Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      ),
      title: "Lien",
    },
  ];
  return (
    <Layout>
      <div className="text-start flex flex-col">
        <HeadTitle>Factures</HeadTitle>
        <div className="flex flex-col w-full gap-5">
          <Subtitle className={"text-start"}>
            Consulter les statistiques par période
          </Subtitle>
          <div className="flex flex-wrap gap-5">
            <RadioButton disable={true} state={false} title={"Aujourd’hui"} />
            <RadioButton
              disable={true}
              state={false}
              title={"7 derniers jours"}
            />
            <RadioButton
              disable={true}
              state={false}
              title={"30 derniers jours"}
            />
            <div className="flex gap-1 items-center flex-wrap lg:flex-nowrap whitespace-nowrap font-bold">
              <RadioButton
                disable={true}
                state={false}
                title={"Annonces entre le "}
              />
              <div className="pl-4 lg:pl-0 w-full flex gap-2 lg:gap-1 font-medium ">
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
          <div className="flex justify-between px-3 w-full">
            {filterItems.map((item, index) => {
              return (
                <div key={index} className="flex gap-1 items-center">
                  {item.icon}
                  <Subtitle className={"hidden lg:block"}>
                    {item.title}
                  </Subtitle>
                  <TopBottomIcon />
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col gap-3">
            {[...Array(9)].map((item, index) => {
              return (
                <div className="bg-[#F0F0F0] px-3 py-4 w-full flex  justify-between rounded-lg">
                  <div
                    key={index}
                    className=" lg:items-center flex flex-col lg:flex-row w-full justify-between"
                  >
                    <Paragraph className={"!text-black "}>0100383</Paragraph>
                    <Paragraph
                      className={"!text-black !font-bold lg:!font-medium "}
                    >
                      Nom de la facture
                    </Paragraph>

                    <Paragraph className={"!text-black hidden lg:block"}>
                      10 000€
                    </Paragraph>
                    <Paragraph className={"!text-black hidden lg:block"}>
                      12 000€
                    </Paragraph>
                    <div className="flex gap-2 lg:hidden">
                      <Paragraph className={"!text-black"}>10 000€</Paragraph>
                      <Paragraph className={"!text-black"}>12 000€</Paragraph>
                    </div>
                    <div className="justify-end hidden lg:flex flex-row items-center gap-2 ">
                      <UploadIcon color={"black"} />
                      <Paragraph className={"!text-black "}>
                        Télécharger
                      </Paragraph>
                    </div>
                  </div>
                  <div className="justify-end flex lg:hidden rounded-lg bg-primary self-center p-2 flex-row items-center gap-2 ">
                    <UploadIcon color={"white"} />
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
