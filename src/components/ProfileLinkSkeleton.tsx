import Grid from "@mui/material/Grid2";
import { Skeleton } from "@mui/material";

export const ProfileLinkSkeleton: React.FC = () => {
  return (
    <Grid>
      <Skeleton
        variant={"rectangular"}
        animation={"wave"}
        height={28.8}
        width={200}
      />
    </Grid>
  );
};
