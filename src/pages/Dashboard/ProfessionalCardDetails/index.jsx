import React from "react";
import {
  BackIcon,
  CustomLineChart,
  HeadSubtitle,
  MapboxMap,
  Paragraph,
  PrimaryButton,
  SelectBox,
  Subtitle,
  Title,
  TradeIcon,
} from "src/components";
import { Layout } from "src/layout";
import CardImg from "../../../assets/images/cardPic.png";
import { Link } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProfessionalCardDetails = () => {
  return (
    <Layout>
      <div className={`flex flex-col gap-4 lg:p-2 rounded-lg w-full`}>
        <div className="hidden lg:flex gap-2 items-center ">
          <Link to={"/professional-section"}>
            <BackIcon />
          </Link>
          <HeadSubtitle>Retour aux annonces</HeadSubtitle>
        </div>
        <div
          className={`flex flex-col lg:flex-row lg:w-auto gap-3 lg:gap-5 justify-between w-full`}
        >
          <div className="relative rounded-b-3xl lg:rounded-none flex lg:block justify-center lg:w-[75%]">
            <div className="bg-secondary hidden lg:block p-1 rounded-r-lg  absolute text-white top-2 lg:top-5">
              PROFESSIONNEL
            </div>
            <div className="bg-secondary block lg:hidden p-1 text-[12px] lg:text-md rounded-r-lg  absolute text-white top-2 lg:top-5">
              PRO
            </div>
            <Link
              to={"/professional-section"}
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
            <div className="bg-slate-200 p-1 px-3 rounded-l-lg absolute text-[12px] lg:text-lg text-black font-bold right-0 top-2 lg:top-5">
              30.06.2023 (30 jours)
            </div>
            <div className="bg-slate-200 p-1 rounded-l-lg absolute text-black font-bold right-0 top-10 lg:top-20">
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
          </div>
          <div className="flex flex-1 justify-between">
            <div className="hidden lg:flex flex-col gap-5 bg-white w-full lg:p-4 rounded-lg ">
              <div className="flex flex-col gap-3 w-full text-start">
                <Title>Gestion de l’annonce</Title>
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
              <div className="flex flex-col gap-5">
                <PrimaryButton
                  data={{
                    name: (
                      <div className="flex items-center justify-center">
                        Annonces de part. similaires
                      </div>
                    ),
                    secondary: true,
                  }}
                />
                <PrimaryButton
                  data={{
                    name: (
                      <div className="flex items-center justify-center">
                        Annonces de pro. similaires
                      </div>
                    ),
                    secondary: true,
                  }}
                />
                <PrimaryButton
                  data={{
                    name: (
                      <div className="flex items-center justify-center">
                        Voir sur « Le Bon coin »
                      </div>
                    ),
                    primary: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex lg:gap-10">
          <div className="w-full lg:w-[75%] ">
            <div className="hidden lg:flex flex-col gap-3 justify-around  items-start text-start">
              <Paragraph>Capifrance</Paragraph>
              <Subtitle>Alfortville, 94 140 </Subtitle>
              <Paragraph>43m² • 2 Pieces</Paragraph>
              <Subtitle className={"!font-medium"}>
                <span className="font-bold">239 900€ 5</span>
                579,07€/m²
              </Subtitle>
              <Paragraph> indisponible</Paragraph>
              <Paragraph>
                <span className="font-bold">Tel :</span> indisponible.
              </Paragraph>
              <Title>Historique de parution</Title>
              <CustomLineChart />
              <Title>Description</Title>
              <Paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                architecto rerum facilis harum reiciendis aliquam, fugiat
                possimus velit perspiciatis illum corrupti nesciunt illo tenetur
                nisi sequi reprehenderit ea sapiente perferendis.
              </Paragraph>
              <Title>Alfortvillie 94140</Title>
              <MapboxMap />
            </div>
            <div className="lg:hidden flex flex-col items-start gap-1">
              <Paragraph>Capifrance</Paragraph>
              <Subtitle>Alfortville, 94 140 </Subtitle>
              <Paragraph>43m² • 2 Pieces</Paragraph>
              <Subtitle className={"!font-medium"}>
                <span className="font-bold">239 900€ 5</span>
                579,07€/m²
              </Subtitle>
              <Paragraph> indisponible</Paragraph>
              <Paragraph>
                <span className="font-bold">Tel :</span> indisponible.
              </Paragraph>
              <Accordion className="w-full">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Title>Gestion de l’annonce</Title>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3 w-full text-start">
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
                    <div className="flex flex-col gap-5">
                      <PrimaryButton
                        data={{
                          name: (
                            <div className="flex items-center justify-center">
                              Annonces de part. similaires
                            </div>
                          ),
                          secondary: true,
                        }}
                      />
                      <PrimaryButton
                        data={{
                          name: (
                            <div className="flex items-center justify-center">
                              Annonces de pro. similaires
                            </div>
                          ),
                          secondary: true,
                        }}
                      />
                      <PrimaryButton
                        data={{
                          name: (
                            <div className="flex items-center justify-center">
                              Voir sur « Le Bon coin »
                            </div>
                          ),
                          primary: true,
                        }}
                      />
                    </div>
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
            </div>
          </div>
          <div className="w-0 lg:w-[25%]"></div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfessionalCardDetails;
