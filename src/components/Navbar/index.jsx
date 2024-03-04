import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiTodoLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { LiaSearchengin } from "react-icons/lia";
import { FaEuroSign } from "react-icons/fa";
import { RiMenuAddFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { MdOutlineGroup } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-full h-20  bg-white lg:bg-gray fixed z-[10] border-b-2 border-b-black border-solid lg:border-none">
        <div className="w-full relative flex justify-between items-center h-full px-4 xl:px-10">
          <div className="flex items-center gap-3">
            {!show ? (
              <FiMenu
                className="text-2xl text-primary font-bold lg:hidden"
                onClick={handleMenu}
              />
            ) : (
              <RxCross2
                className="text-2xl text-primary font-bold lg:hidden"
                onClick={handleMenu}
              />
            )}

            <Link className="text-xl xl:text-2xl font-bold ">
              DIRECT<span className="text-primary">M</span>ANDAT
            </Link>
          </div>
          <ul
            className={`flex items-start lg:items-center flex-col lg:flex-row z-30 lg:h-full w-full lg:w-fit absolute top-20 left-0 lg:static lg:top bg-[#f3f3f3] lg:bg-inherit px-5 lg:px-0 lg:gap-0 py-4 lg:py-0 lg:opacity-100 ${
              show ? "h-screen " : "h-[calc(100vh-80px)] hidden lg:flex"
            }`}
          >
            <li className="group h-auto lg:h-full lg:hover:text-primary lg:border-b-4 lg:border-b-transparent lg:hover:border-b-4 lg:hover:border-b-primary lg:hover:border-solid lg:h-full h-10 lg:flex lg:justify-center lg:items-center relative px-2 xl:px-5 py-2 lg:py-0 w-full lg:w-fit">
              <div className="flex items-center gap-2">
                <AiOutlineFire className="text-primary lg:text-black text-2xl lg:text-base block lg:hidden" />
                <Link className="font-bold w-full">Piges</Link>
              </div>
              <ul className="relative lg:absolute bg-[#f3f3f3]  lg:bg-gray top-0 lg:top-20 left-0 z-50 w-full lg:w-80 px-4 rounded-b-md hidden group-hover:block group-hover:text-black">
                <li className="flex gap-2 items-center py-2 hover:text-primary relative w-full">
                  <BiDonateHeart className="text-2xl" />
                  <Link to={"/home"} className="font-semibold">
                    Annonces des particuliers
                  </Link>
                </li>
                <li className="flex gap-2 items-center py-2 hover:text-primary relative w-full">
                  <BiDonateHeart className="text-2xl" />
                  <Link to={"/professional-section"} className="font-semibold">
                    Annonces des professionnels
                  </Link>
                </li>
                <li className="flex gap-2 items-center py-2 hover:text-primary relative w-full">
                  <AiFillEyeInvisible className="text-2xl" />
                  <Link to={"/hidden-ads-section"} className="font-semibold">
                    Annonces masquées
                  </Link>
                </li>
                <li className="flex gap-2 items-center py-2 hover:text-primary relative w-full">
                  <LiaSearchengin className="text-2xl" />
                  <Link to={"/saved-searches"} className="font-semibold">
                    Mes recherches enregistrées
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group h-auto lg:h-full lg:hover:text-primary lg:border-b-4 lg:border-b-transparent  lg:hover:border-b-4 lg:hover:border-b-primary lg:hover:border-solid lg:h-full h-10 lg:flex lg:justify-center lg:items-center relative px-2 xl:px-5 py-2 lg:py-0 w-full lg:w-fit">
              <div className="flex items-center gap-2">
                <BsCartPlus className="text-primary lg:text-black text-2xl lg:text-base block lg:hidden" />
                <Link className="font-bold w-full">Estimations</Link>
              </div>
              <ul className="relative lg:absolute bg-[#f3f3f3]  lg:bg-gray  top-0 lg:top-20 left-0 z-50 w-full lg:w-80 px-4 rounded-b-md hidden group-hover:block group-hover:text-black">
                <li className="flex gap-2 items-center py-2 hover:text-primary">
                  <FaEuroSign className="text-2xl" />
                  <Link to={"/estimations-property"} className="font-semibold">
                    Estimer un bien
                  </Link>
                </li>
                <li className="flex gap-2 items-center py-2 hover:text-primary">
                  <RiMenuAddFill className="text-2xl" />
                  <Link to={"/estimations"} className="font-semibold">
                    Historique des biens estimés
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group h-auto lg:h-full lg:hover:text-primary lg:border-b-4 lg:border-b-transparent  lg:hover:border-b-4 lg:hover:border-b-primary lg:hover:border-solid lg:h-full h-10 lg:flex lg:justify-center lg:items-center relative px-2 xl:px-5 py-2 lg:py-0 w-full lg:w-fit">
              <div className="flex items-center gap-2">
                <FaUserAstronaut className="text-primary lg:text-black text-2xl lg:text-base block lg:hidden" />
                <NavLink to={"/option-prospect"} className="font-bold w-full">
                  Option prospection
                </NavLink>
              </div>
            </li>
            <li className="group h-auto lg:h-full lg:hover:text-primary lg:border-b-4 lg:border-b-transparent  lg:hover:border-b-4 lg:hover:border-b-primary lg:hover:border-solid lg:h-full h-10 lg:flex lg:justify-center lg:items-center relative px-2 xl:px-5 py-2 lg:py-0 w-full lg:w-fit">
              <div className="flex items-center gap-2">
                <AiOutlineCodeSandbox className="text-primary lg:text-black text-2xl lg:text-base block lg:hidden" />
                <Link to={"/map-search"} className="font-bold w-full">
                  Recherche cartographique
                </Link>
              </div>
            </li>
            <li className="group h-auto lg:h-full lg:hover:text-primary lg:border-b-4 lg:border-b-transparent  lg:hover:border-b-4 lg:hover:border-b-primary lg:hover:border-solid lg:h-full h-10 lg:flex lg:justify-center lg:items-center relative px-2 xl:px-5 py-2 lg:py-0 w-full lg:w-fit lg:ml-12">
              <div className="flex items-center gap-2">
                <RiTodoLine className="text-primary lg:text-black text-2xl lg:text-base" />
                <Link to={"/todo-list"} className="font-bold w-full">
                  To-do list
                </Link>
              </div>
              <ul className="relative lg:absolute bg-[#f3f3f3]  lg:bg-gray  top-0 lg:top-20 left-0 z-50 w-full lg:w-80 px-4 rounded-b-md hidden group-hover:block group-hover:text-black">
                <li className="flex gap-2 items-center py-2 hover:text-primary">
                  <AiOutlineBell className="text-2xl" />
                  <Link to={"/my-reminders"} className="font-semibold">
                    Mes rappels
                  </Link>
                </li>
                <li className="flex gap-2 items-center py-2 hover:text-primary">
                  <RiTodoLine className="text-2xl" />
                  <Link to={"/my-appointments"} className="font-semibold">
                    Mes rendez-vous
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group h-auto lg:h-full lg:hover:text-primary lg:border-b-4 lg:border-b-transparent  lg:hover:border-b-4 lg:hover:border-b-primary lg:hover:border-solid lg:h-full h-10 lg:flex lg:justify-center lg:items-center relative px-2 xl:px-5 py-2 lg:py-0 w-full lg:w-fit">
              <div className="flex items-center gap-2">
                <FaRegUser className="text-primary lg:text-black text-2xl lg:text-base" />
                <Link to={"/my-account"} className="font-bold w-full">
                  Mon compte
                </Link>
              </div>
              <ul className="relative lg:absolute bg-[#f3f3f3]  lg:bg-gray top-0 lg:top-20 right-0 z-50 w-full lg:w-80 px-4 rounded-b-md hidden group-hover:block group-hover:text-black">
                <li className="flex gap-2 items-center py-2 hover:text-primary">
                  <RiUserSettingsLine className="text-2xl" />
                  <Link to={"/agency-setup"} className="font-semibold">
                    Configuration du profil
                  </Link>
                </li>
                <li className="flex gap-2 items-center py-2 hover:text-primary">
                  <RiTodoLine className="text-2xl" />
                  <Link to={"/disponsibilities"} className="font-semibold">
                    Disponibilités
                  </Link>
                </li>
                <li className="flex gap-2 items-center py-2 hover:text-primary">
                  <FaClipboardList className="text-2xl" />
                  <Link to={"/invoices"} className="font-semibold">
                    Factures
                  </Link>
                </li>
                <li className="flex gap-2 items-center py-2 hover:text-primary">
                  <AiOutlineRise className="text-2xl" />
                  <Link to={"/statistics"} className="font-semibold">
                    Statistiques
                  </Link>
                </li>
                <li className="flex gap-2 items-center py-2 hover:text-primary">
                  <MdOutlineGroup className="text-2xl" />
                  <Link to={"/user-management"} className="font-semibold">
                    Gestion des utilisateurs
                  </Link>
                </li>
                <li className="flex gap-2 items-center py-2 hover:text-primary">
                  <CiSaveDown1 className="text-2xl" />
                  <Link
                    onClick={() => {
                      localStorage.removeItem("ses");
                    }}
                    to={"/"}
                    className="font-semibold"
                  >
                    Déconnexion
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
