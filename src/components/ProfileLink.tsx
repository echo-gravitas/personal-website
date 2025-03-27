import Button from "@mui/material/Button";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Grid from "@mui/material/Grid";
import type { Profile } from "../types/types";

// NOTE: Content while loading

export const ProfileLink: React.FC<Profile> = ({ label, url }) => {
  return (
    <Grid>
      <Button
        disableRipple
        variant={"social"}
        endIcon={<ArrowOutwardOutlinedIcon />}
        href={url}
        target={"_blank"}
        title={label}
      >
        {label}
      </Button>
    </Grid>
  );
};
