import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    alignItems: "center",
    backgroundColor: "gray",
    padding: "10px 0",
  },
  linkActive: {
    color: "red",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    alignItems: "center",
  },

  link: {
    color: "white",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    alignItems: "center",
  },
});
export default useStyles;
