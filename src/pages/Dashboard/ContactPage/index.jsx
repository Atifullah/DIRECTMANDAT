import { Phone } from "@mui/icons-material";
import clsx from "clsx";
import React, { useState } from "react";
import {
  HeadSubtitle,
  HeadTitle,
  InputBox,
  MapboxMap,
  PrimaryButton,
  SecondaryInputField,
  SelectBox,
} from "src/components";
import { Layout } from "src/layout";

const ContactPage = () => {
  const [send, setSend] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-10 lg:mt-10">
        <div className="flex flex-col gap-5 bg-[#F0F0F0] text-start border rounded-lg border-slate-300 p-4 w-full lg:w-[40%]">
          <HeadTitle className={"text-start"}>Nous contacter</HeadTitle>
          {send ? (
            <div className="flex flex-col gap-5 items-center">
              <div className="rounded-full p-3 bg-primary">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_626_115752"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="64"
                    height="64"
                  >
                    <path
                      d="M63.6971 0.302734H0.671875V63.3279H63.6971V0.302734Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_626_115752)">
                    <path
                      d="M24.3066 42.7661L13.3559 31.8155L9.62695 35.5182L24.3066 50.1978L55.8193 18.6852L52.1165 14.9824L24.3066 42.7661Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <HeadSubtitle className={"text-center"}>
                Votre message a bien été envoyé
              </HeadSubtitle>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <InputBox
                data={{
                  label: "N° de téléphone",
                  type: "number",
                  placeholder: "00 00 00 00 00",
                }}
                icon={<Phone />}
              />
              <SelectBox
                name={"Objet de la demande"}
                option={[
                  "Choisir ...",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                ]}
              />
              <SecondaryInputField
                name="Message"
                placeholder="Écrivez votre message ici."
              />
              <div className="flex justify-center">
                <PrimaryButton
                  onClick={() => {
                    setSend(true);
                  }}
                  data={{
                    name: (
                      <div className="flex items-center gap-2">
                        Envoyer
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_2202_6754)">
                            <mask
                              id="mask0_2202_6754"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="25"
                              height="25"
                            >
                              <path
                                d="M24.5013 0.669922H0.398438V24.7728H24.5013V0.669922Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_2202_6754)">
                              <path
                                d="M2.41825 21.7607L23.4982 12.7222L2.41825 3.68359L2.4082 10.7136L17.4725 12.7222L2.4082 14.7307L2.41825 21.7607Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_2202_6754">
                              <rect
                                width="24.1028"
                                height="24.1028"
                                fill="white"
                                transform="translate(0.400391 0.669922)"
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
            </div>
          )}
        </div>
        <div className={clsx("w-full lg:w-[60%] mb-5")}>
          <div className="border rounded-lg border-slate-300">
            <MapboxMap />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
