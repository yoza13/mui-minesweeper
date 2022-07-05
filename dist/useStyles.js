import { makeStyles, createStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => createStyles({
    drawerListItem: {
        color: "inherit",
    },
    appContainer: {
        width: "100%",
        maxWidth: "inherit",
        marginBottom: "10rem",
    },
    homePageAvatar: {
        width: 120,
        height: 120,
        border: "5px solid #8f40e9",
        borderColor: (props) => props.isDarkTheme
            ? theme.palette.common.black
            : theme.palette.primary.dark,
    },
    calculatorBox: {
        width: "fit-content",
        margin: "auto",
    },
    displayField: {
        color: "#fff",
        backgroundColor: (props) => props.isDarkTheme ? theme.palette.grey.A700 : theme.palette.grey[400],
        fontWeight: "bold",
        height: "3em",
        textAlign: "right",
        fontSize: "24px",
    },
    buttonPanel: {
        marginBottom: "2rem",
    },
    buttonStack: {
        borderTop: "1px solid",
        "&:last-child": {
            borderBottom: "1px solid",
        },
    },
    buttons: {
        fontSize: "24px",
        color: (props) => (props.isDarkTheme ? "#fff" : "#000"),
        borderRight: "1px solid",
        borderRadius: 0,
        width: "25%",
        backgroundColor: (props) => props.isDarkTheme ? theme.palette.grey.A700 : theme.palette.grey[200],
        "&:last-child": {
            borderRight: "none",
            backgroundColor: (props) => props.isDarkTheme
                ? theme.palette.warning.dark
                : theme.palette.warning.light,
        },
        "&.wide": {
            width: "50%",
        },
    },
    contentBox: {
        margin: "3rem 0 3rem 0",
        paddingTop: "2rem",
    },
    listStyleDisc: {
        listStyle: "disc",
    },
    listAsItem: {
        display: "list-item",
    },
    experienceCard: {
        maxWidth: 345,
        marginRight: "2rem",
        marginBottom: "3rem",
        marginLeft: "2rem",
    },
    boldWeight: {
        fontWeight: "bold",
    },
    dividerStyle: {
        borderColor: "inherit",
        margin: "auto",
        marginBottom: "1rem",
    },
    experienceAccordionStack: {
        marginBottom: "1rem",
        [theme.breakpoints.up("md")]: {
            display: "none !important",
        },
        "& .accordion": { padding: "0 1rem" },
    },
    experienceCardsStack: {
        flexWrap: "wrap",
        margin: "0 auto",
        marginBottom: "1rem",
        [theme.breakpoints.down("md")]: {
            display: "none !important",
        },
    },
    gameAlert: {
        [theme.breakpoints.up("md")]: {
            display: "none !important",
        },
    },
    downloadBlock: {
        justifyContent: "center",
        alignItems: "center",
    },
    downloadLinks: {
        border: (props) => props.isDarkTheme
            ? `10px solid ${theme.palette.secondary.dark}`
            : `10px solid ${theme.palette.primary.dark}`,
        padding: " 1rem 2rem",
        marginBottom: "2rem",
        textDecoration: "none",
        color: "#fff",
        fontWeight: "bold",
        backgroundImage: (props) => props.isDarkTheme
            ? `linear-gradient(${theme.palette.secondary.main}, ${theme.palette.secondary.light})`
            : `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    },
    footer: {
        borderTop: "1px solid",
        backgroundColor: (props) => props.isDarkTheme
            ? theme.palette.grey[900]
            : theme.palette.primary.main,
        color: "#fff",
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100vw",
        maxWidth: "inherit",
        zIndex: 100,
    },
}));
