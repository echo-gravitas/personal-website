import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import type { Profile } from "../types";

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
