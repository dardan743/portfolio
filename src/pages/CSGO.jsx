import React from "react";
import { RxCrosshair2 } from "react-icons/rx";
import { FaRegHandPaper } from "react-icons/fa";
import { MdOutlineCopyAll, MdOutlineRocketLaunch } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import benq from "assets/images/benq.png";

const CSGO = () => {
  const [copiedVM, setCopiedVM] = React.useState(false);
  const copyVM = () => setCopiedVM(true);
  const [copiedCH, setCopiedCH] = React.useState(false);
  const copyCH = () => setCopiedCH(true);
  const [copiedLO, setCopiedLO] = React.useState(false);
  const copyLO = () => setCopiedLO(true);

  const Sector = ({ img, title, text }) => (
    <div>
      <img src={img} alt="" />
      <p className="text-gray font-[500]">{title}</p>
      <span className="text-gray font-[800] text-center">{text}</span>
    </div>
  );

  return (
    <div>
      <div className="bg-white p-5">
        <div className="flex items-center justify-between border-b-2 border-[#eee] pb-5">
          <div className="flex items-center gap-2">
            <FaRegHandPaper size={25} />
            <p>Viewmodels</p>
          </div>
          <div className="flex items-center gap-2">
            <p>{copiedVM ? "Copied" : "Copy"}</p>
            <CopyToClipboard
              text="viewmodel_fov 68; viewmodel_offset_x -1; viewmodel_offset_y 2; viewmodel_offset_z -1; viewmodel_presetpos 0; cl_viewmodel_shift_left_amt 1.5; cl_viewmodel_shift_right_amt 0.75; viewmodel_recoil 0; cl_bob_lower_amt 5; cl_bobamt_lat 0.33; cl_bobamt_vert 0.14; cl_bobcycle 0.98;"
              onCopy={copyVM}
            >
              <MdOutlineCopyAll size={25} className="cursor-pointer	" />
            </CopyToClipboard>
          </div>
        </div>
        <div className="flex items-center gap-14 pt-5 flex-wrap">
          <Sector title="FOV" text="68" />
          <Sector title="Offset X" text="-1" />
          <Sector title="Offset Y" text="2" />
          <Sector title="Offset Z" text="-1" />
          <Sector title="Presetpos" text="0" />
          <Sector title="Shift Left Amt" text="1.5" />
          <Sector title="Shift Right Amt" text="0.75" />
          <Sector title="Recoil" text="0" />
          <Sector title="Lower Amt" text="5" />
          <Sector title="Amt Lat" text=" 0.33" />
          <Sector title="Amt Vert" text="0.14" />
          <Sector title="Cycle" text="0.98" />
        </div>
      </div>

      <div className="bg-white p-5 mt-5">
        <div className="flex items-center justify-between border-b-2 border-[#eee] pb-5">
          <div className="flex items-center gap-2">
            <RxCrosshair2 size={25} />
            <p>Crosshair</p>
          </div>
          <div className="flex items-center gap-2">
            <p>{copiedCH ? "Copied" : "Copy"}</p>
            <CopyToClipboard
              text="CSGO-PuG8E-w3sLs-S9GOC-GNrLm-rEwzF"
              onCopy={copyCH}
            >
              <MdOutlineCopyAll size={25} className="cursor-pointer	" />
            </CopyToClipboard>
          </div>
        </div>
        <div className="flex items-center gap-14 pt-5 flex-wrap">
          <Sector text="CSGO-PuG8E-w3sLs-S9GOC-GNrLm-rEwzF" title={"Main"} />
          <Sector
            text="CSGO-ja2tq-AzaKW-3FycW-hvens-Ei2pH"
            title={"Secondary"}
          />
          <Sector text="CSGO-PV8Rb-KsaK9-Rhp3O-wCMtK-xpuCQ" title={"Troll"} />
        </div>
      </div>

      <div className="bg-white p-5 mt-5">
        <div className="flex items-center justify-between border-b-2 border-[#eee] pb-5">
          <div className="flex items-center gap-2">
            <MdOutlineRocketLaunch size={25} />
            <p>Launch Options</p>
          </div>
          <div className="flex items-center gap-2">
            <p>{copiedLO ? "Copied" : "Copy"}</p>
            <CopyToClipboard text="" onCopy={copyLO}>
              <MdOutlineCopyAll size={25} className="cursor-pointer	" />
            </CopyToClipboard>
          </div>
        </div>
        <div className="flex items-center gap-14 pt-5 flex-wrap">
          <Sector
            title={" "}
            text="-freq 240 -novid -console -tickrate 128 +fps_max 400 -allow_third_party_software +clientport 27022"
          />
        </div>
      </div>

      <div className="bg-white p-5 mt-5">
        <div className="flex items-center justify-between border-b-2 border-[#eee] pb-5">
          <div className="flex items-center gap-2">
            <FiBox size={25} />
            <p>Gear</p>
          </div>
          <div className="flex items-center gap-2">
            <p>{copiedLO ? "Copied" : "Copy"}</p>
            <CopyToClipboard text="" onCopy={copyLO}>
              <MdOutlineCopyAll size={25} className="cursor-pointer	" />
            </CopyToClipboard>
          </div>
        </div>
        <div className="flex items-center gap-14 pt-5 flex-wrap">
          <Sector img={benq} title={" "} text="BenQ Zowie XL2566K" />
        </div>
      </div>
    </div>
  );
};

export default CSGO;
