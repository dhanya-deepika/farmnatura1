import React from "react";

interface FeatureIconProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon, title }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <p className="text-sm text-center text-gray-700">{title}</p>
  </div>
);

export default FeatureIcon;
