import { makeStyles } from "@mui/styles";
import { themeValues } from "doc-bot/constants/ThemeConstants";

export const useBaseLayoutStyles = makeStyles((theme) => ({
    app : {
        backgroundColor: theme.palette.background.default,
        color : theme.palette.text.primary,
        transition: themeValues.transition.defaultTansition,
        width:'100vw',
        height:'100vh',
    },
}));
