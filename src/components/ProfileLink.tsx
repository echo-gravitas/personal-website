import Button from "@mui/material/Button";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Grid from "@mui/material/Grid2";
import type { Profile } from "../types/types";

const ProfileLink: React.FC<Profile> = ({ label, url }) => {
  return (
    <Grid>
      <Button
        variant={"social"}
        endIcon={<ArrowOutwardOutlinedIcon />}
        href={url}
        target={"_blank"}
      >
        {label}
      </Button>
    </Grid>
  );
};

export default ProfileLink;
