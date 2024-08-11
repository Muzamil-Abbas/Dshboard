import React from "react";

interface MedicineComponentProps {
  title: string;
  configLink: string;
  configText: string;
  totalMedicines: number;
  groups: number;
  totalMedicinesLabel: string;
  groupsLabel: string;
}

const MedicineComponent: React.FC<MedicineComponentProps> = ({
  title,
  configLink,
  configText,
  totalMedicines,
  groups,
  totalMedicinesLabel,
  groupsLabel,
}) => {
  return (
    <div className="bg-white border border-neutral-400  rounded-lg w-full flex flex-col shadow-md">
      <div className="flex p-2 text-center items-center justify-between border-b border-neutral-400">
        <h4 className="text-base">{title}</h4>
        <a
          href={configLink}
          className="flex items-center text-blue-500 hover:underline"
        >
          {configText}
          <span className="text-lg ml-2">&raquo;</span>
        </a>
      </div>
      <div className="flex p-5 justify-between">
        <div className="flex flex-col justify-between">
          <span className="text-xl font-bold">{totalMedicines}</span>
          <span className="text-sm text-gray-600">{totalMedicinesLabel}</span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-xl font-bold">{groups}</span>
          <span className="text-sm text-gray-600">{groupsLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default MedicineComponent;
