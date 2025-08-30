import React from "react";
import { Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui";

const PremiumCard = () => {
  return (
    <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-0 text-white">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              Get Premium to boost your Medals
            </h3>
            <p className="text-sm text-purple-100">
              Your chance to boost your Medals and get special benefits from
              premium features.
            </p>
          </div>
          <Medal className="w-12 h-12 text-purple-200 flex-shrink-0" />
        </div>

        <button className="w-full px-4 py-2 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors">
          Upgrade
        </button>
      </CardContent>
    </Card>
  );
};

export default PremiumCard;
