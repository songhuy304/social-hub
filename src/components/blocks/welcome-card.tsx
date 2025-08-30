import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@/components/ui";

const WelcomeCard = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <Typography size="xl" weight="semibold">
          Welcome to Beincom (BIC)
        </Typography>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <Typography>Quick Introductions and Guides</Typography>
          <Typography>Quick Introductions and Guides</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
